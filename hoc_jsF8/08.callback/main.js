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

var getA = function() {
    setTimeout(function() {
        console.log("getA");
    }, 2000) // mất 2s để chạy
}

var getB = function() {
    console.log("getB");
}

getA();
getB();