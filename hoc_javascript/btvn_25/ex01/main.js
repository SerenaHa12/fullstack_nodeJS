/*
DOM NAVIGATION
*/

// ------------------------------------------------------------------

// 1. ParentElement => Chọn cấp cha từ element hiện tại
// Ngoài ra: parentNode => học kỹ ở phần DOM Node
// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log(this);
//   console.log(this.parentElement);
//   console.log(this.parentElement.parentElement);
// });

// trong TH muốn lấy thẻ cha nữa thì ta dùng vòng lặp để đẩy

// ------------------------------------------------------------------

// Bài tập 1: Xóa cả phần tử cha khi ấn vào phần tử con

// var btn = document.querySelectorAll(".product .remove");

// if (btn.length) {
//   btn.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//       this.parentElement.remove();
//     });
//   });
// }

// ------------------------------------------------------------------

// 2. Children => lấy danh sách các phần tử con cấp gần nhất
// var menu = document.querySelector(".menu");
// var items = menu.querySelectorAll('li'); -> lấy tất cả 7 cấp
// var items = menu.children[1].children[1].children; // chỉ lấy 4 item cấp cha // giống array object

// children sẽ luôn trả về danh sách cho dù bên trong đó chỉ có 1 phần tử
// console.log(items);

/*
Trên thực tế Parent - Children luôn đi với nhau
*/

// ------------------------------------------------------------------

/*
Bài tập 2: 
Click vào các item ở menu trên, 
nếu item nào có menu con thì đổi màu nền của cả menu con
*/
// var menu = document.querySelector(".menu");
// var items = menu.children;
// // console.log(typeof items);

// items.addEventListener("click", function () {
//   var css = { color: "red" };
//   Object.assign(items.style, css);
//   if (!menu.children[1].children[1].children === undefined) {
//     Object.assign(items.children[1].children.style, css);
//   } else {
//     console.log(undefined);
//   }
// });

// var linkList = document.querySelectorAll(".menu a");
// if (linkList.length) {
//   linkList.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       this.style.color = "red";
//       var children = this.parentElement.children;
//       if (children.length === 2) {
//         children[1].style.background = "pink";
//       } else {
//         this.style.color = "green";
//       }
//     });
//   });
// }

// ------------------------------------------------------------------

// 3.nextElementSibling => trả về một element
// nextSibling => trả về một node
// console.log(productActive);

// Chọn thành phần kế tiếp -> dùng thuộc tính
// console.log(productActive.nextElementSibling);
// console.log(productActive.previousElementSibling);
var productActive = document.querySelector(".products .active");
var products = document.querySelector(".products");
var btnNext = document.querySelector(".next");
var btnPrev = document.querySelector(".prev");

var handleNext = function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = document.querySelector(".products h2");
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
  console.log(productActive);
};

var handlePrev = function () {
  var prevElement = productActive.previousElementSibling;
  if (prevElement === null) {
    prevElement = document.querySelector(".products h2:last-child");
  }
  prevElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = prevElement;
};

btnNext.addEventListener("click", handleNext);

btnPrev.addEventListener("click", handlePrev);

var IDInterval = setInterval(handleNext, 1000);

function stop() {
  clearInterval(IDInterval);
}
