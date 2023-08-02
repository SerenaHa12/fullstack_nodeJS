// var getA = function (fn, ...args) {
//   setTimeout(function () {
//     console.log("getA");
//     if (typeof fn === "function") {
//       fn(...args); // Gọi hàm chủ dộng
//       //getC();
//     }
//   }, 2000);
// };

// var getB = function (name, content, subject) {
//   console.log("getB", name, content, subject);
// };

// var getC = function () {
//   console.log("getC");
// };

// var handleGetB = function () {
//   getB("F8");
// };

// getA(getB, "Hoàng An", "F8", "Fullstack");
// getA(getC);
// getA(function () {
//   getB("F8");
// });

// Rest parameters
// var sum = function (...args) {
//   console.log(args);
// };

// sum(5, 10, 15, 20);

// var sum2 = function (title, content, subject) {
//   console.log(title, content);
// };

// sum2();

// var a = ["Hoàng An", "F8", "Fullstack"]; // mảng

// sum2(...a);

// Kỹ thuật debound

// Hàm con closure
// var getMessage = function () {
//   var msgValue = "Tôi là: " + msg;
//   // Biến cục bộ của hàm getMessage
//   var display = function () {
//     console.log("Hoàng An" + msg);
//     console.log(msgValue);
//   };
//   display();
// };

// getMessage("F8");

/*
    Thứ tự ưu tiên
    Biến cục bộ của hàm con => biến cục bộ của hàm cha => biến toàn cục

    Hàm con có thể sử dụng:
    - tham số của hàm cha
    - biến cục bộ của hàm cha
    - biến toàn cục
    - biến cục bộ của chính nó
    - tham số của chính nó
  */

// Closure
// var sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// var add = sum(10); //trả về function
// console.log(add(20));
// console.log(add(30));
// console.log(sum(10)(20));

// Giải thuật đệ quy
// function showNumber(n) {
//   console.log(n);

//   //Điều kiện dừng
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

//Tính tổng S = 1 + 2 + ... + N
//Không dùng vòng lặp
function total(n) {
  if (n === 1) {
    return 1;
  } else if (n > 1) {
    return n + total(n - 1);
  }
}
console.log(total(10));

// Đệ quy trong mảng web thường dùng để giải quyết những bài toán đa cấp
