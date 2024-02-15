/* 
    Bài 3: Tìm số lớn nhất
        Input: 3 số a, b, c
        Output: Số lớn nhất trong 3 số và hiển thị kết quả

    Kỹ thuật: đặt lính canh

*/

var a = 10;
var b = 30;
var c = 5;

var max = a; // Giả định giá trị lớn nhất là số đầu tiên

if (max < b) {
    max = b;
}

if (max > c) {
    max = c;
}

console.log(`Max`, max)