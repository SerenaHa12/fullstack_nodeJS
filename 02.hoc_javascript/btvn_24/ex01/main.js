// DOM CSS -> áp dụng trong một số trường hợp khẩn cấp, bắt buộc

// var css = {
//     color: "white",
//     fontStyle: "italic",
//     fontWeight: "bold",
//     backgroundColor: "black",
// };

// Object.assign(content.style, css);
// console.log(content.style.lineHeight);

//   button.addEventListener("click", function () {
//     var css = {
//       color: "white",
//       opacity: 0,
//     };
//     Object.assign(content.style, css);
//   });

// ----------------------------------------------

// Cách 1
var content = document.querySelector(".content");
var btn = document.querySelector(".btn");

// var hideContent = function () {
//   var css = {
//     color: "white",
//     opacity: 0,
//   };
//   Object.assign(content.style, css);
// };

// btn.addEventListener("click", hideContent);

// ----------------------------------------------

// Cách 2
// btn.addEventListener("click", function () {
//   if (!content.style.display) {
//     content.style.display = "none";
//     this.innerText = "Hiện ";
//   } else {
//     content.style.display = "";
//     this.innerText = "Ẩn";
//   }
// });

//----------------------------------------------------------------

// Yêu cầu: Chỉ cho phép click 5 lần, quá 5 lần thì vô hiệu hóa
// var count = 0;

// btn.addEventListener("click", function () {
//   if (!content.style.display) {
//     content.style.display = "none";
//     this.innerText = "Hiện ";
//   } else {
//     content.style.display = "";
//     this.innerText = "Ẩn";
//   }

//   count++;
//   if (count >= 5) {
//     this.disabled = true;
//   }
// });

//----------------------------------------------------------------

