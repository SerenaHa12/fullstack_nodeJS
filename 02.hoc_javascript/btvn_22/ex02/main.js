// Hàm Math

// ----------------------------------------------------------------

// 1. Giá trị tuyệt đối
// var a = -10;
// console.log(Math.abs(a));

// ----------------------------------------------------------------

// 2. Lấy ngẫu nhiên
console.log(Math.random().toString());

// ----------------------------------------------------------------

// 3. Làm tròn xuống
// var a = 10.9;
// console.log(Math.ceil(Math.random().toString());

// ----------------------------------------------------------------

// 4. Làm tròn lên

var getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandom(1, 100));
