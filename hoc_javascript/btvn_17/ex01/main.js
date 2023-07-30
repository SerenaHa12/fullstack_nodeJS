/*
var action = "delete";

switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm");
    break;

  case "edit":
    console.log("Sửa");
    break;

  case "delete":
    console.log("Xóa");
    break;

  default:
    console.log("Danh sách");
    break;
}
*/

/*
// if (action == "create" || action == "insert" || action == "add") {
//   console.log("Thêm");
// } else if (action == "edit" || action == "update") {
//   console.log("Sửa");
// } else if (action == "delete") {
//   console.log("Xóa");
// } 
*/

/* 
Hiển thị số ngày trog 1 tháng 
Input: var month = 12

Output: Tháng 12 chỉ có 31 ngày

Quy tắc:
- Tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12
- Tháng có 30 ngày: 4, 6, 9, 11
- Tháng có 29 ngày: 2
*/

/*var month = 12;

if (month > 12 || month < 1){
  console.log("Invalid input month")
} else if (month % 1 == 0) {
  var days;
  switch (month) {
    case 2:
      days = 29;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
      break;
    
  }
  console.log(` Tháng ${month} có ${days} ngày`)
}  else{
  console.log ("Invalid input month")
}*/

// Loop
/*
for (var i = 1; i <=10; i+=2){
  console.log("Xin chào F8: " + i);
}

for (var i = 10; i >=1; i--){
  console.log("Xin chào F8: " + i);
}

for (var i = 1; i <= 5; i++){
  for (var j = 1; j <=5; j++){
    console.log(`i = ${i} - j = ${j}`);
  }
}
*/

/*
var n = 10;
var S = 0;
for (var i = 1; i <= n; i++) {
  S += i;
}
console.log("Giá trị biểu thức 1 + 2 + ... + n là: ", S);


var n = 10;
S = (n * (n + 1)) / 2;
console.log("Giá trị biểu thức 1 + 2 + ... + n là: ", S);

/*
i = 5;
s = 0;

i = 1 => s = s + i = 0 + 1 = 1
i = 2 => s = s + i = 1 + 2 = 3
i = 3 => s = s + i = 3 + 3 = 6
i = 4 => s = s + i = 6 + 4 = 10
i = 5 => s = s + i = 10 + 5 = 15

 */

/* 
Bài tập 2:
total = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
*/
/*
var n = 3;
var total = 1;
for (var i = 0; i < n; i++){
  total = total + total * i;
}
console.log(total)
*/

/*
Bài 3: Kiểm tra số nguyên tố N
Điều kiện:
1. >1
2. Số nguyên tố CHỈ chia hết cho 1 và chính nó

Học được:
1. Phân tích sử dụng phương pháp loại trừ
2. Kỹ thuật đặt cờ hiệu (Cắm cờ)

Phân tích case:

*/

/*
var n = 11.01;
var check = true;
if (n <= 1 || n % 1 !== 0) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      // thoát vòng lặp
      i = n;
    }
  }
}

if (check) {
  console.log(`${n} là số nguyên tố`);
} else {
  console.log(`${n} không phải là số nguyên tố`);
}
*/

var i = 1;
while (i < 10) {
  console.log(`Xin chào F8: ${i}`);
  i++;
}
