// var user = {
//     name: "Hoang An",
//     email: "hoangan@gmail.com",
//     getName: function () {
//         return user.name;
//     },
// };

// console.log(user.getName());

// ES 12: toán tử Optional Chaining (?.)
// var a = {};
// console.log(a?.name);

var a = {
  name: {
    job: "Giảng viên",
  },
  getName1: function () {
    return "Hoàng An";
  },
};

console.log(a?.name?.job);
// Optional Chaining với thuộc tính
console.log(a?.getName());
//Optional Chaining với phương thức

var users = "F8";
if (users?.length) {
  // Đọc mảng
  users.forEach?.(function (user) {
    console.log(user);
  });
}
