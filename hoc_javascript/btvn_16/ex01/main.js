/* 
    Bai 1: Hoán vị 2 số 
        Input: Cho trước 2 số a, b
        Output: Thực hiện hoán vị 2 số không dùng biến trung gian

    Solution: 
        Nhap a = 5, b = 7
        In ra a = 7, b = 5
*/
// ------------------------------------------------------------------

/*
    Bài 2: Thực hiện phép toán
        S = 10 + 20 + 5^10 / 2
*/
let S = 10 + 20 + Math.pow(5, 10) / 2;
console.log("Result is: " + S);
// ------------------------------------------------------------------

/* 
    Bài 3: Tìm số lớn nhất
        Input: 3 số a, b, c
        Output: Số lớn nhất trong 3 số và hiển thị kết quả
*/
function max(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

//testing
let a = 3;
let b = 2;
let c = 1;

let maxNumber = max(a, b, c);
console.log("Số lớn nhất trong 3 số: " + maxNumber);
// ------------------------------------------------------------------

/* 
    Bài 4: Kiểm tra số cùng dấu
        Input: 2 số a, b
        Output: Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
*/

// ------------------------------------------------------------------
