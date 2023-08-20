/*
DOM HTML:
-> Giúp chúng ta thay đổi HTML:
    - text
    - thuộc tính
    - xóa thẻ HTML
*/

// 1. Lấy nội dung bên trong thẻ HTML
// Trước khi lấy nội dung => Cần phải lấy được Element
// var content = document.querySelector(".content");
// console.log(content);

// 1.1 innerHTML => Trả về nội dung bên trong thẻ HTML (Bao gồm các thẻ html khác nếu có)
// console.log(content.innerHTML);

// 1.2 innerText => Trả về nội dung bên trong thẻ HTML (Ở dạng text)
// console.log(content.innerText);

// 1.3 textContent => Trả về text ở bên trong thẻ HTML (Giữ nguyên khoảng cách)
// console.log(content.textContent);

// 1.4 outerHTML => Lấy chính element hiện tại
// console.log(content.outerHTML);

// console.log(content.outerText);

// 2. Thay đổi content thẻ HTML
// content.outerHTML = `<h1>Hoàng An</h1>`;
// content.textContent = `<h1>AN</h1>`;

/*
    Bài tập: Khi click vào nút click me 
    => Lấy toàn bộ content của div class content 
    và chèn vào div class result
    Đồng thời xóa nội dung của div class content
*/

var content = document.querySelector(".content");
var result = document.querySelector(".result");
var button = document.querySelector(".btn");
var index = 0;

// var handleClick = function () {
//   result.innerHTML = content.innerHTML;
//   content.innerHTML = ``;
// };

// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

if (button && content && result) {
  button.addEventListener("click", function () {
    if (result.innerHTML === "") {
      result.innerHTML = content.innerHTML;
      content.innerHTML = "";
      index++;
      button.innerHTML = `Lên ${index}`;
    } else {
      content.innerHTML = result.innerHTML;
      result.innerHTML = "";
      index++;
      button.innerHTML = `Xuống ${index}`;
    }
  });
}
