/*
    1. Vòng lặp For
    => Vòng lặp được xác định trước

        1.1 Vòng lặp for tăng
        1.2 Vòng lặp for giảm

        Cú pháp: 
        for (bienchay, dieukiendung, buocnhay) {
            
        }
*/

// sử dụng hàm console.log để in ra 10 lần dòng chữ Xin chào F8
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

// var n = 5;
// var check = true; // Giả định n là số nguyên tố
// if ( n <= 1 || n % 1 !== 0) {
//     check = false;
// } else {
//     for (var i = 2; i < n; i++) {
//         if (n % i === 0) {
//             check = false;
//             // Thoát vòng lặp -> đảm bảo về performance
//             i = n;
//         }
//     }
// }

// if (check) {
//     console.log(`${n} là số nguyên tố`)
// } else {
//     console.log(`${n} không phải là số nguyên tố`)
// }

// -----------------------------------------------------

/*
Bài tập 4: Tạo danh sách số ngẫu nhiên

Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: 
    làm việc với array, đối tượng Math và loop.

👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. 
Hàm này sẽ trả về một mảng gồm length phần tử, 
các giá trị trong mảng là số ngẫu nhiên, 
giá trị trong khoảng từ min tới max.

Gợi ý: 
Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên 
trong khoảng min - max.
*/

// Làm bài

// function getRandNumbers(min, max, length) {
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
//   }
//   return arr;
// }

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 *
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 *
 * => Treo trình duyệt!!!
 */

// -----------------------------------------------------

/*
Bài tập 5: Tính tổng các phần tử là số của mảng

Cho trước mảng numbers, 
hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
*/
// function getTotal(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
// -----------------------------------------------------

/*
    2. Vòng lặp For/in
    
*/

// -----------------------------------------------------
/*
    4. Vòng lặp While
    Cách hoạt động: điều kiện trong while đúng thì chạy, sai thì dừng
    -> để giải quyết các bài toán không biết trước là lặp lại bao nhiêu lần
    -> một số bào toán karaoke, tìm chuỗi

    Lưu ý: Tất cả các bài toán sử dụng for đều có thể chuyển thành while 
    nhưng không có trường hợp ngược lại
*/
// var i = 1;
// while (i <= 10) {
//     console.log(`Xin chào F8: ${i}`);
//     i++;
// }

// var s = 0;
// var i = 1;
// while ( i <= 10 ) {
//     s += i;
//     i++;
// }
// console.log(`S = ${s}`)

/*
    5. Vòng lặp Do While
    -> chạy trước kiểm tra sau
    -> cho dù điều kiện sai vẫn sẽ chạy vòng lặp
*/
var i = 10;
do {
  console.log(i);
  i++;
} while (i < 10);
