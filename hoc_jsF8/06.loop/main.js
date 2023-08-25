/*
    1. Vòng lặp For
    => Vòng lặp được xác định trước

        1.1 Vòng lặp for tăng
        1.2 Vòng lặp for giảm

        Cú pháp: 
        for (bienchay, dieukiendung, buocnhay) {
            
        }
*/

// for (var i = 1; i <= 10; i++) {
//     console.log("Xin chào F8: " + i);
// }

/*
- i++ : bước nhảy
- Output: Xin chào F8 * 10
- Vòng lặp for giảm sẽ chạy ngược lại
*/

// Trường hợp vòng lặp for lồng nhau:
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(`${i} - ${j}`);
//   }
// }


// -----------------------------------------------------

/*
Bài tập: Tính giá trị biểu thức
S = 1 + 2 + 3 + 4 + 5 + ... + N
*/

// var n = 10;
// var s = 0;
// for (var i = 1; i <= n; i++) {
//     s = s + i;
// }
// console.log(`${s}`)

/*
Duyệt chương trình qua từng bước:
i = 5;
s = 0;

B1: i = 1 => 1 * 1 = 1
B2: i = 2 => 1 * 1 * 2 = 2
B3: i = 3 => 1 * 1 * 2 * 3 = 6
B4: i = 4 => 1 * 1 * 2 * 3 * 4 = 24 
B5: i = 5 => 1 * 1 * 2 * 3 * 4 * 5 =120

=> Kết thúc vòng lặp, 
total nhận giá trị cuối cùng là 120.
*/

// -----------------------------------------------------

/*
Bài tập 2: 
total = 1 + 1*2 + 1*2*3 + 1*2*3*4 + ... + 1*2*...*n
*/

// var n = 5;
// var total = 0;
// var subTotal = 1;

// for (var i = 0; i < n; i++) {
//     subTotal = subTotal * i;
//     total += subTotal;
// }

// console.log(`total: ${total}`);

/*
Duyệt chương trình qua từng bước:
i = 5;
total = 0;
subTotal = 1;

B1: i = 1 => s = s + i = 0 + 1 = 2
B2: i = 2 => s = s + i = 1 + 2 = 3
B3: i = 3 => s = s + i = 3 + 3 = 6
B4: i = 4 => s = s + i = 6 + 4 = 10
B5: i = 5 => s = s + i = 10 + 5 = 15

=> Kết thúc vòng lặp, 
s nhận giá trị cuối cùng là 15.
*/

// -----------------------------------------------------

/*
Bài tập 3: Kiểm tra số nguyên tố N

Yêu cầu:
- Số nguyên tố chỉ chia hết cho 1 và chính nó
- Số nguyên tố > 1 => <= 1 k phải số nguyên tố
*/

var n = 5;
if ( n <= 1 || n % 1 !== 0)