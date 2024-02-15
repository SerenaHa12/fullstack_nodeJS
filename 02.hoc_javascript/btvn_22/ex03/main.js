/*
    DOM = Document Object Model
    1. DOM Element: Truy xuất vào các thẻ HTML => tạo đối tượng HTML
    2. DOM CSS: Thay đổi CSS Inline của các thẻ HTML
    3. Dom HTML: Thay đổi nội dung thuộc tính của thẻ HTML
    4. DOM Event: Gán sự kiện cho các thẻ HTML
    5. DOM Event Listener: Lẵng nghe các sự kiện
    6. DOM Navigation: Thao tác với các element phân cấp
    7. DOM Node: Thao tác với các thẻ HTML thông qua Node (Object)
    8. DOM Animation
*/

/*
1. DOM Element: Truy xuất vào các thẻ HTML => tạo đối tượng HTML

Có 5 cách truy xuất:
- Truy xuất thông qua ID:
document.getElementById

- Truy xuất thông qua Class
document.getElementByClassName(class)

- Truy xuất thông qua Tag Name
document.getElementByTagName(tagName)

- Truy xuat thong qua CSS Selector\
document.querySelector(selector)

- Truy xuất thông qua CSS Selector
*/

// CACH 1
//var title = document.getElementById("title");
// console.log([title]);
// console.log(title.innerText);

// CACH 2
// var titleList = document.getElementsByClassName("title");
// console.log(titleList);

// for (var index = 0; index < titleList.length; index++) {
//   console.log(titleList[index]);
// }

// CACH 3
// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

/*
4. DOM Event: Gán sự kiện cho các thẻ HTML

Có 2 cách:
1. Tác động trực tiếp vào thẻ HTML thông qua HTML

2. Tác động thông qua DOM
*/

// var handleClick = function () {
//   console.log("Đăng ký khóa học thành công");
// };

// Tạo element
// var btn = document.querySelector(".btn");
//console.log([btn]);

// Gắn nội dung hàm
// btn.onclick = function () {
//   console.log("Đăng ký khóa học thành công ");
// };

// btn.onclick = function () {
//   console.log("Đăng ký khóa học thất bại ");
// };

// var province = document.querySelector(".province");
// province.onclick = function () {
//   console.log("Đã chọn");
// };

// => Event Handler

// Event Listener
/*
1. Hàm addEventListener()
2. Hàm removeEventListener()
*/

// var btn = document.querySelector(".btn");

// var handleClick = function () {
//   console.log("Đăng ký khóa học thành công ");
// };

// btn.addEventListener("click", handleClick);

// Selection.addEventListener("change", function () {
//   console.log("Đã chọn");
//   btn.removeEventListener("click", handleClick);
// });

// btn.addEventListener("click", function () {
//   console.log("Khóa học thành công");
// });

// btn.addEventListener("click", function () {
//   console.log("Khóa học thất bại");
// });

var item = querySelectorAll(".menu li");
console.log(item);

for (var i = 0; i < item.length; i++) {
  items[i].innerHTML = item;
  console.log(item[i]);
}
