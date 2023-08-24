/*
    Bài 5: Sắp xếp 3 số
        Input: 3 số a, b, c
        Output: Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
 */

var a = -10;
var b = 5;
var c = 20;

if (a > b) {
    var tmp = a;
    a = b;
    b = tmp;
}

if (a > c) {
    var tmp = a;
    a = c;
    c = tmp;
}

if (b > c) {
    var tmp = b;
    b = c;
    c = tmp;
}

console.log(a, b, c);