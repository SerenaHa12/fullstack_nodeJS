// Object: Đối tượng
/*
    1. Object Literal
    2. Function Constructor: Hàm tạo
*/

// Khai báo
// var user = new Object();
// var user = {};
// console.log(user);

// Thuộc tính và phương thức
var users = {
  name: "Hoàng An",
  email: "hoangan@gmail.com",
  address: "Hà Nội",
  job: "Giảng viên",
  getName: function () {
    return "Hoàng An";
  },
};
//console.log(users);

// Truy cập vào key của object
// console.log(users.name);
// console.log(users.email);
// console.log(users.getName());
// console.log(users.address);
// console.log(users.job);

// Thêm key mới
users.location = "Hà Nội";

// Sửa key
users.email = "hoangan@fullstack.edu.vn";

// Xóa key
delete users.job;

// console.log(users);

// Bài tập: Kiểm tra xem biến này có phải object
var a = {};
console.log(a);

if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("Là Object");
} else {
  console.log("Không phải object");
}
