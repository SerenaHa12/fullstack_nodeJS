var items = document.querySelectorAll(".item");
var sortableList = document.querySelector(".sortable-list");

// drag and drop event listener to list item
items.forEach((item) => {
  // add class deag
  item.addEventListener("dragstart", () => {
    // item.classList.add('drag');
    setTimeout(() => item.classList.add("drag"), 0);
  });
  // remove class drag
  item.addEventListener("dragend", () => {
    item.classList.remove("drag");
  });
});

items.forEach((item, index) => {
    // Thêm số bài và số thứ tự vào trước nội dung của span details
    var details = item.querySelector(".details");
    details.textContent = `Bài ${index + 1} - ${details.textContent}`;
  
    // Thêm sự kiện dragstart để cập nhật số bài khi kéo
    item.addEventListener("dragstart", (e) => {
      var dragItem = e.target;
      var dragIndex = [...items].indexOf(dragItem) + 1;
      e.dataTransfer.setData("text/plain", dragIndex);
    });
  });
sortableList.addEventListener("dragover", (e) => {
  e.preventDefault();
  var dragItem = document.querySelector(".drag");
  // making array of them
  var siblings = [...sortableList.querySelectorAll(".item:not(.drag)")];

  var nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  // console.log(nextSibling);

  // insert drag item
  if (nextSibling === undefined) {
    sortableList.appendChild(dragItem);
  } else {
    sortableList.insertBefore(dragItem, nextSibling);
  }
});
