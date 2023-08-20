// Bước 1: tạo các element
var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");

btn.addEventListener("click", function () {
  modalBox.classList.add("show");
});

modalClose.addEventListener("click", function () {
  modalBox.classList.remove("show");
});

modalBox.addEventListener("click", function () {
  modalBox.classList.remove("show");
});

// tình trạng nổi bọt của HTML

var a = 1;
var b = "1";
console.log(a + b);
console.log(a - b);
