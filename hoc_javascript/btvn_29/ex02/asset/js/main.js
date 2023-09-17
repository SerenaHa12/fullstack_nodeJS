var sortableList = document.querySelector(".sortable-list");
var items = document.querySelectorAll(".item");
var modules = document.querySelectorAll(".module");

var listItemIndex = 0;
var moduleIndex = 0;

// cập nhập và hiển thị lại index
function updateIndex(rootElement) {
  // chuyển thành mảng các ptu con của sortableList
  var childArr = Array.from(rootElement.children);

  childArr.forEach(function (item, index) {
    item.draggable = "true";

    var type = "Bài";

    // xác định module | item
    if (item.classList.contains("module")) {
      type = "Module";
      moduleIndex++;
    } else {
      listItemIndex++;
    }

    // update index và add vào span
    if (!item.children.length) {
      item.innerHTML = `${type} ${
        type === "Module" ? moduleIndex : listItemIndex
      }: <span>${item.innerText}</span>`;
    } else {
      item.innerHTML = `${type} ${
        type === "Module" ? moduleIndex : listItemIndex
      }: <span>${item.children[0].innerText}</span>`;
    }
  });
}

// sự kiện drag drop
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";

  var targetElement = e.target;
  if (
    targetElement &&
    targetElement !== dragElement &&
    targetElement.nodeName === "LI"
  ) {
    if (targetElement.parentElement === sortableList) {
      sortableList.insertBefore(dragElement, targetElement);
    }
  }
}

// drag end
// thiết lập lại các biến đếm chỉ số và sau đó gọi 
// updateIndex(sortableList) để cập nhật lại chỉ số 
// của danh sách sau khi các mục đã được sắp xếp lại
function handleDragEnd(e) {
  e.preventDefault();

  // Reset index counters
  listItemIndex = 0;
  moduleIndex = 0;

  // Re-updateIndex the list with updated indexes
  updateIndex(sortableList);

  dragElement.classList.remove("opacity");
  sortableList.removeEventListener("dragover", handleDragOver);
  sortableList.removeEventListener("dragend", handleDragEnd);
}

sortableList.addEventListener("dragstart", function (e) {
  dragElement = e.target;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("Text", dragElement.textContent);

  sortableList.addEventListener("dragover", handleDragOver);
  sortableList.addEventListener("dragend", handleDragEnd);

  setTimeout(function () {
    dragElement.classList.add("opacity");
  }, 0);
});

updateIndex(sortableList);
