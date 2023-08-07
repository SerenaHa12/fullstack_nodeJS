var users = ["An", "Dương", "Đức"];
//console.log(users);

// Kiểm tra biến có thuộc mảng hay không
if (Array.isArray(users)) {
  //console.log("Là mảng");
}

//Thêm phần tử vào mảng
users[users.length] = "Quân";
users[users.length] = "Chi";

//Truy cập vào một phần tử của mảng
//console.log(users[1]);
//console.log(users[2]);

// xóa -> sử dụng vòng lăpj

// duyệt mảng -> duyệt từ đầu tới cuối
// 1. Duyệt bằng for
for (var i = 0; i < users.length; i++) {
  //console.log(users[i]);
}

// 2. Duyệt bằng for in
for (var index in users) {
  //console.log(users[index]);
}

//console.log(users);

//console.log(Array.prototype);

//console.log(users.concat("Quân", "Tuấn Anh"));

//Bài tập: Tách tên chuỗi họ và tên
var fullname = "Đỗ Hà Chi";
//console.log(fullname.split(" ").slice(-1));

// 11. Shift() => Xóa phần tử đầu mảng và trả về phần tử vừa xóa
var value = users.shift();
//console.log(value);

// 12. spilce(index, number) => Xóa number phần tử từ vị trí thứ index trong mảng
users.splice(1, 1, "Quân");
////console.log(users);

// 13. reverse() => Đảo ngược mảng
//users.reverse();

// 14. sort() => Sắp xếp mảng theo thứ tự tăng dần
users.sort(); //chỉ áp dụng với chuỗi
//console.log(users);

var numbers = [5, 10, 1, 9, 2];
numbers.sort(function (next, prev) {
  if (prev > next) {
    return -10;
  }
});
//console.log(numbers);

// Bài toán: Cho một danh sách khách hàng
var customers = [
  "Tạ Hoàng An",
  "Nguyễn Văn Dũng",
  "Mai Thị Tâm",
  "Nguyễn Thị Yến",
];

var getFirstname = function (customers) {
  return customers.split(" ").slice(-1).join();
};

// sắp xếp danh sách khách hàng tăng dần theo tên
customers.sort(function (a, b) {
  if (getFirstname(a) < getFirstname(b)) {
    return -1;
  }
});
console.log(customers);

//soft name by alphabetic order
