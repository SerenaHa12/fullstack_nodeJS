/* 
    Bai 1: Hoán vị 2 số 
        Input: Cho trước 2 số a, b
        Output: Thực hiện hoán vị 2 số không dùng biến trung gian

    Solution: 
        Nhap a = 5, b = 7
        In ra a = 7, b = 5
*/
function permuteNumber(a, b) {
    a = a + b; //gán giá trị của a và b vào biến a
    b = a - b; // lấy giá trị ban đầu của a gán vào biến b
    a = a - b; // lấy giá trị ban đầu của b gán vào biến a

    console.log("Hoán vị 2 số " + b + " và " + a + " là: " + a+ " và " +b);
}

// testing
permuteNumber(5, 7);

// ------------------------------------------------------------------

/*
    Bài 2: Thực hiện phép toán
        S = 10 + 20 + 5^10 / 2
*/
let S = 10 + 20 + Math.pow(5, 10) / 2;
console.log("Ket qua S = 10 + 20 + 5^10 / 2 la: " + S);
// ------------------------------------------------------------------

/* 
    Bài 3: Tìm số lớn nhất
        Input: 3 số a, b, c
        Output: Số lớn nhất trong 3 số và hiển thị kết quả
*/
function maxNumber(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

//testing
let a = 1;
let b = 2;
let c = 3;

let max = maxNumber(a, b, c);
console.log("Số lớn nhất trong 3 số và hiển thị kết quả: " + max);
// ------------------------------------------------------------------

/* 
    Bài 4: Kiểm tra số cùng dấu
        Input: 2 số a, b
        Output: Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
*/
function testNumber(a, b) {
  if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    console.log("Hai so a va b cung dau.");
  } else {
    console.log("Hai so a va b khac dau.");
  }
}

// testing
testNumber(1, 2);
testNumber(-1, 2);
testNumber(-1, -2);
// ------------------------------------------------------------------

/*
    Bài 5: Sắp xếp 3 số
        Input: 3 số a, b, c
        Output: Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
 */
function sortNumber(a, b, c) {
  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];
  console.log("Thứ tự tăng dần của 3 số: " + a, b, c);
}

// testing
sortNumber(1, 2, 3);
sortNumber(2, 1, 3);
sortNumber(3, 2, 1);
