function myFunction(param) {
  console.log(param);
}

function myCallBack(value) {
  console.log(value);
}

myFunction(123);
myFunction(myCallBack(78));

// ---------------------------------------------------------------

/*
Bài tập 1: Tạo chương trình tính toán
hoàn thành function sumCb và tạo thêm các function subCb, multiCb và divCb.
*/

function sumCb(a, b) {
  return a + b;
}

function subCb(a, b) {
  return a - b;
}

function multiCb(a, b) {
  return a * b;
}

function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

// ---------------------------------------------------------------

// example 01
var getA = function () {
  setTimeout(function () {
    console.log("getA");
  }, 2000); // mất 2s để chạy
};

var getB = function () {
  console.log("getB");
};

var getC = function () {
  console.log("getC");
};
getA();
getB();
// để sử lý bất động bộ A chạy trc, B chạy sau ta cần đặt B trong A
// nếu hàm getB là hàm có tham số -> getB chạy trước
// để getA chạy trước, ta bắt buộc phải đưa getB vào hàm k có tham số

/**
 * Rest Parameter
 * Định nghĩa ra 1 hàm nhận giá trị khi gọi lại
 * Dùng dấu ... khi định nghĩa hàm
 */

// ---------------------------------------------------------------

// example 02
var sum = function (...args) {
  console.log(args);
};
sum(5, 10, 15, 20);

/**
 * Luồng hoạt động của hàm sum
 * -> khi truyền các đối số 5, 10, 15, 20 vào hàm sum
 * -> đối số sẽ được lưu tại trong args dưới dạng mảng
 */

// ---------------------------------------------------------------

// example 03
var sum2 = function (title, content) {
  console.log("Hoang An", "F8");
};

var a = ["Hoang An", "F8"]; // mảng
sum2(...a);

// ---------------------------------------------------------------

// example 04
getA(
  function (name, email) {
    console.log(name, email);
  },
  "Ha Chi",
  "hachi@gmail.com"
);
