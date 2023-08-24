// var action = "create";

// switch (action) {
//   case "create":
//   case "insert":
//   case "add":
//     console.log("Thêm");
//     break;

//   case "edit":
//   case "update":
//     console.log("Sửa");
//     break;

//   case "delete":
//   case "remove":
//   case "destroy":
//     console.log("Xóa");
//     break;

//   default:
//     console.log("Danh sách");
//     break;
// }

// -> chỉ chấp nhận so sánh bằng

// -----------------------------------------------------------------------------

/*
Yêu cầu bài toán: Sử dụng If-else để chuyển sang switch-case
*/
var action = "create";
if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Danh sách");
}

// -----------------------------------------------------------------------------

/*
Yêu cầu bài toán: Hiển thị số ngày trong 1 tháng

Input: 
var month = 12;

Output:
Tháng 12 có 31 ngày

Quy tắc:
- Tháng 31 ngày: 1, 3. 5, 7, 8, 10, 12
- Tháng 30 ngày: 4, 6, 9, 11
- Tháng 29 ngày: 2

Yêu cầu: 
- Tháng phải là số nguyên
- Tháng có giá trị từ 1 -> 12
- Không được sử dụng hàm
*/

var month = "4";
var year = 2020;
month = +month;

if (month % 1 !== 0 || month > 12 || month < 0) {
  console.log("Please enter a valid month");
} else if (month === 2) {
  if (year % 4 === 0) {
    console.log("Tháng", month + " có 28 ngày");
  } else {
    console.log("Tháng", month + " có 29 ngày");
  }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("Tháng", month + " có 30 ngày");
} else {
  console.log("Tháng", month + " có 31 ngày");
}

// dispatch action (ví dụ: Chức năng thêm sửa xóa sản phẩm)
