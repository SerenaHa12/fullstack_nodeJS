/*
ES6 - Object, Array
1. Destructuring
-> Phá vỡ cấu trúc của array, object để có thể 
truy cập vào các phần tử vào lưu trữ thành biến 
riêng biệt
    1.1 Với object

2. Spread

3. Enhance Object

*/

// 1.1 Destructuring với object
// Với object không destruct được {name, email, {name, email}}
// const user = {
//   name: "Ha Chi",
//   email: "chi@gmail.com",
//   age: 31,
// };

// 1.Destruct đổi tên
// 2.Mặc định
// 3.Rest
// Cách 1
// const name = user.name;
// const email = user.email;
// console.log(name, email);

// Cách 2
// const { name: _name, email, age, address = `Ha Noi` } = user;
// console.log(_name, email, age, address);
// Đổi tên dùng dấu :
// -> Không lạm dụng destructuring

// const { name: _name, email, ...rest } = user;
// console.log(_name, email);
// console.log(rest);

// 1.2 Destructuring với array
// Không có trường hợp đổi tên
// const employees = ["An", "Quân", "Dương", "Sơn"];

// const user = ["Hà Chi", "chi@gmail.com", 31, "Hà Nội"];
// const [username, email, , address, salary = "5000"] = user;
// console.log(username, email, address, salary);

// Case 2:
// const [username, email, ...rest] = user;
// console.log(username, email);
// console.log(rest);

// var customers = [
//   {
//     id: 1,
//     name: "Nguyen Van A",
//   },
//   {
//     id: 1,
//     name: "Nguyen Van B",
//   },
//   {
//     id: 1,
//     name: "Nguyen Van C",
//   },
//   {
//     id: 1,
//     name: "Nguyen Van D",
//   },
// ];
// var html = customers
//   .map(({ id, name }) => `<h3> ${id} - ${name}</h3>`)
//   .join("");
// console.log(html);

// let a = 20;
// let b = 10;
// [a, b] = [b, a];
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

// const oldObject = {
//   name: "Chi",
//   email: "chris@gmail.com",
// };

// const newObject = {
//   course: "Fullstack",
//   teacher: "Hoang An",
//   ...oldObject,
// };
// console.log(newObject);
// const oldArray = ["Hoang An F8", "hoangan@gmail.com"];
// const newArray = ["Fullstack", ...oldArray];

// const getTotal = (a, b) => {
//   console.log(a, b);
// };

// var values = [5, 10];
// getTotal(...values);

// 3. Enhance Object
const name = "Hoang An";
const email = "hoang@gmail.com";
const age = 31;
const address = "Ha Noi";

// const user = { name, email, age };
// console.log(user);

// const getInfo = (name, email, age) => {
//   log(name, email, age);
// };

// getInfo({ name, email, age });
const user = { name, email, age, location: address };
