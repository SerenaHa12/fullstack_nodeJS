// Number: Kiểu dữ liệu nguyên thủy
// Hàm tạo của number là number

// console.log(Number.prototype);
// console.log([Number]);
// var a = 10;
// console.log(a);

//--------------------------------------------------------------------------

// Kiểm tra xem 1 biến có phải kiểu number hay không
// http://numeraljs.com/

// if (a === 0 || (a && a.constructor.name === "Number")) {
//   console.log("Đây là số");
// } else {
//   console.log("Đây không phải là số");
// }

//--------------------------------------------------------------------------

// Kiểm tra 1 biến là số nguyên hay không
// if (Number.isInteger(a)) {
//   console.log("Số nguyên");
// } else {
//   console.log("Không phải số nguyên");
// }

//--------------------------------------------------------------------------

// Số NaN: Not a number
// var a = NaN;
// console.log(typeof a);

//--------------------------------------------------------------------------

// Hàm isNaN: Kiểm tra một biến xem có phải NaN hay k
// const a = 1;
// const b = "abc";
// const c = a / b;
// console.log(c);

//--------------------------------------------------------------------------

// Số infinity
// const a = 1;
// const b = 0;
// const c = a / b;
// console.log(c);
// if (c !== Infinity) {
//   console.log(c);
// } else {
//   console.log("Quá giới hạn");
// }

// var d = 1000 * 1000;
// console.log(d);

//--------------------------------------------------------------------------

// Ép kiểu số nguyên
// var a = "10";
// a = Number.parseInt(a);
// console.log(a, typeof a);

//--------------------------------------------------------------------------

// Ép kiểu số thực
// var b = "10.512387a123";
// b = Number.parseFloat(b);
// console.log(b, typeof b);

//--------------------------------------------------------------------------

// Ép kiểu số chung
// var a = " 10.5 ";
// //a = +a;
// a = Number(a);
// console.log(a, typeof a);

//--------------------------------------------------------------------------

/*
    Tổng kết:
        1. Kiểm tra 1 số
        - Không phải NaN
        - Không phải infinity
        - typeOf là number
*/
// var a = NaN;
// if (!isNaN(a) && a !== Infinity && typeof a === "number") {
//   console.log("Là số");
// } else {
//   console.log("Không phải là số");
// }

//--------------------------------------------------------------------------

// Chuyển số thành chuỗi
//var a = 10;
//a += "";
// a = a.toString();
// console.log(a, typeof a);

//--------------------------------------------------------------------------

// Làm tròn và lấy số lượng phần thập phân
// var a = 10.256;
// a = a.toFixed(2);
// console.log(a);

//--------------------------------------------------------------------------

var price = 1200000;
// Hỗ trợ chuyển về định dạng tiền tệ
price = price.toLocaleString("vi", { style: "currency", currency: "VND" });
// Chuyển về chuỗi
console.log(price);
