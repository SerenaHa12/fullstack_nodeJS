// function getMsg() {
//   console.log("Xin chào F8");
// }

// function getMessage(msg, type = "success") {
//   console.log(`Xin chào ${msg}`);
//   console.log(`Type ${type}`);
// }
// getMsg();
// getMessage("Hoàng An", "error");

// // Hàm void không có giá trị trả về
// function getTotal(a, b) {
//   var s = a + b;
//   console.log(s);
// }

// //Hàm return
// function getTotal2(a, b) {
//   var s = a + b;
//   return s;
// }

/*
Kiểm tra các số chẵn trong khoảng từ 1 đến n
Yêu cầu: Viết hàm kiểm tra số chẵn
*/

// function isEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// var n = 10;
// for (var i = 1; i <= n; i++) {
//   if (isEven(i)) {
//     console.log(`${i} là số chẵn`);
//   }
// }

function getMessage(msg) {
  var msgValue = `Xin chào: ${msg}`;
  //msgValue => biến cục bộ
  return msgValue;
}

console.log(getMessage("F8"));

var msg = "Hello F8"; // Biến toàn cục
function getMessage() {
  return msg;
}

function setMessage(value) {
  msg = value;
}

setMessage("Hoàng An");
console.log(getMessage());

// Expression Function (anonymous function)
var getMessage = function (msg) {
  return msg;
};

console.log(getMessage("Xin chào F8"));

if (typeof getMessage === "function") {
  console.log(`Đây là Function`);
}

var getA = function (a) {
  console.log(a);
};

var getB = function () {
  console.log(`getB`);
};

getA("F8");
