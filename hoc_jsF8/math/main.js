// 1. Toán tử số học - Arithmetic
// var a = 1;
// var b = 2;
// var c = a - b;
// console.log(c)

// var a = 5;
// a++;
// a--;
// console.log(a);

// -----------------------------------------------------------------

// 2. Toán tử gán - Assignment
// var a = 1;
// a = a + 2;
// console.log(a)

/*
    Thực hành với toán tử gán
    Sử dụng kiến thức về toán tử gán và toán tử số học 
    để tạo các biến a, b, c, d thỏa mãn các yêu cầu sau đây:
    a là 1 số dương
    b là 1 số âm
    c là kết quả của a + b
    d là kết quả của a - b
*/
// var a = 1;
// var b = -1;
// var c = a + b;
// var d = a - b;
// console.log(a, b, c, d);

// -----------------------------------------------------------------

// 3. Toán tử so sánh - Comparison
var a = 1;
var b = 2;

if (a == b) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}
// -----------------------------------------------------------------

// 4. Toán tử logic If - Else

// Case study 1: Trường hợp đầu vào là kiểu Boolean
if (true) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}

// Case study 2: Trường hợp đầu vào không là kiểu Boolean
var fullname = "Hà Chi";
if (fullname) {
    console.log('DIEU KIEN DNG');
} else {
    console.log('DIEU KIEN SAI');
}

// Toán tử And &&
var a = 1;
var b = 2;
var c = 3;
if (a > 0 && b > 0) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}

// Toán tử Or ||
// Toán tử Not !  -> Phủ định lại giá trị của điều kiện
if (!(a > 0)) {
    console.log('DIEU KIEN DUNG');
}

// -----------------------------------------------------------------

// 5. Toán tử chuỗi - String Operator
var firstName = "Hà";
var lastName = "Chi";

// yêu cầu: in ra hai biến trên 1 dòng
// trong trường hợp log dưới đây, phép cộng này trở thành
// phép nối chuỗi chữ k phải phép cộng số học nữa
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

var name = "Hà";
name += "Chi";
console.log(name);

// -----------------------------------------------------------------

// 6. Kiểu dữ liệu Boolean

var isSuccess = true;
console.log(isSuccess);

// -> biểu thức điều kiện so sánh luôn trả về giá trị true|false
/*
Trong JS có các giá trị sau khi được convert sang Boolean sẽ đều là false
    1. 0
    2. false
    3. '' - "" chuỗi rỗng
    4. undefined
    5. NaN
    6. null
*/