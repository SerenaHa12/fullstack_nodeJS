/*
    1. tạo hàm đầu tiên

    - toán tử call() -> toán tử để gọi hảm
*/

// function showDialog() {
//     alert(`Hi, xin chao các bẹn`)
// }
// showDialog()

function showDialog(mess) {
  // <- tham số
  console.log(mess);
}
showDialog(`Xin chao các cháu`); // gọi tới function truyền vào giá trị -> đối số

//-------------------------------

function getMess() {
  console.log(`Xin chào F8`);
}

function getMessage(msg, type = "success") {
  console.log(`Xin chào ${msg}`);
  console.log(`Type${type}`);
}

getMess();
getMessage(`Ha Chi`, `error`);

//-------------------------------

// Hàm void -> không có giá trị

// ----------------------------------------------------------------

/*
    2. Đối tượng Argument
    -> chỉ xuất hiện trong function
    -> hoạt động theo cách sử dụng đối tượng argument
*/
// function writeLog() {
//     console.log(arguments);
// }
// writeLog(`Log 1`, `Log 2`);

// Cách sử dụng vòng for of
// Yêu cầu: Tất cả những chuối được truyền vào trong hàm writeLog()
// được in ra trên 1 dòng và được ngăn cách với nhau bởi dấu gạch ngang

// function writeLog() {
//     for (var param of arguments) {
//         console.log(param);
//     }
// }
// writeLog(`Log 1`, `Log 2`);

/*
Lúc này trên màn hình console.log 
sẽ in ra 2 dòng của 2 tham số truyền vào param

Luồng hoạt động:
- tham số đầu tiên trong argument đi vào vòng lặp for, 
được lưu lại ở biến param, và console.log ra biến param.
- lần thứ hai, tham số thứ 2 trong argument được lấy ra và hoạt động tương tự.

-> chạy 2 lần ( số lần chạy của vòng for bằng với tham số truyền vào)
*/

// sử dụng template string để nối param với dấu gạch ngang
function writeLog() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param}`;
  }
  console.log(myString);
}
writeLog(`Log 1`, `Log 2`);

// ----------------------------------------------------------------

/*
    3. Return
    - Hàm return là hàm chứa một giá trị
    - Hàm void không chứa giá trị và không có giá trị sử dụng
    - Khi từ khóa return được gọi -> Thoát hàm
*/
function cong(a, b) {
  return a + b;
  //   những dòng code phía dưới return sẽ không được hoạt động
}

// --------------------------------------------------------------

var result = cong(2, 8);
console.log(result);

function getTotal2(a, b = 0) {
  var s = a + b;
  if (b !== 0) {
    return s;
  }
  return "Không tính được";
}
var result = getTotal2(10, 20);

// --------------------------------------------------------------

/*
    Bài toán 1:
    Kiểm tra các số chẵn trong khoảng từ 1 đến n

    Yêu cầu:
    Viết hàm kiểm tra số chẵn
*/
function isEven(n) {
  // if (n % 2 === 0) {
  //     return true;
  // } else {
  //     return false;
  // }

  return number % 2 === 0; // cách viết này sẽ trả về true nếu đúng \ false nếu sai
}

var n = 10; // đối số i tương ứng với tham số n
for (var i = 1; i <= n; i++) {
  if (isEven(i)) {
    console.log(`${i} là số chẵn`);
  }
}
/*
luồng hoạt động:
- Lặp qua isEven, chạy từ 1 tới n -> kiểm tra biến i
- Lúc này i là đối số và n là tham số
*/

// ----------------------------------------------------------------

/*
    4. Các loại Function
*/
// Declaration Function
function showMessage() {}

// Expression Function -> xuất hiện toán tử gán
var showMessage2 = function () {};

// ----------------------------------------------------------------

/*
    5. Hàm con - Closure
*/

// example 01
var getMessage = function () {
  var display = function () {
    // -> gọi là hàm con, chỉ chạy được trong getMessage
    console.log("Ha Chi");
  };
  display(); // -> có dòng này mới chạy
};
getMessage();
// -> lúc này gọi hàm sẽ không chạy
// -> hàm con nhưng lại đọc được tham số của hàm cha

// example 02
var getMessage = function () {
  var msgValue = "Tôi là:" + msg; // biến cục bộ của hàm getMessage
  var display = function () {
    var a = 10;
    console.log("Ha Chi" + msg); // được sử dụng trong hàm con
  };
  display(); // -> có dòng này mới chạy
};
getMessage("gv Teky");

// ----------------------------------------------------------------
