/*
Function
1. Arrow Function -> Hàm mũi tên
    Cú pháp: 
    TH1: Arrow Function không có tham số:
        var getMessage = () => {
        return "hello";
        };
        console.log(getMessage());
    
    TH2: Arrow Function có 1 tham số:
        var getMessage = (msg) => {
        return msg;
        };
        console.log(getMessage("hello"));

    TH3: Arrow function có nhiều tham số:
        var getMessage = (msg, type = "success") => {
        console.log(`msg: ${msg}`);
        console.log(`type: ${type}`);
        };
        getMessage("hello", "success");

    TH4: Arrow Function có return
        var getTotal = (a, b) => a + b;
        console.log(getTotal(10, 20));

-> Tiện khi biết dưới dạng callback
-> Không thay thế dạng truyền thống
-> Arrow function thường dùng const để khai báo và vẫn đảm bảo đảm bảo về vấn đề scope.

Lưu ý: Nếu return về một object -> Bọc cặp ngoặc ()

Lưu ý khi SỬ DỤNG ARROW FUNCTION
      TH1: Arrow function k bind được this và arguments  

*/

// TH1: Arrow Function không có tham số:
var getMessage = () => {
  return "hello";
};
console.log(getMessage());

// TH2: Arrow Function có 1 tham số
var getMessage = (msg) => {
  return msg;
};
console.log(getMessage("hello"));

// TH3: Arrow function có nhiều tham số
var getMessage = (msg, type = "success") => {
  console.log(`msg: ${msg}`);
  console.log(`type: ${type}`);
};
getMessage("hello", "success");

// TH4: Arrow Function có return
var getTotal = (a, b) => a + b;
console.log(getTotal(10, 20));

var getUser = () => ({ name: "Chi" });
console.log(getUser());

var users = [
  {
    name: "Chi",
    email: "chis@gmail.com",
  },
  {
    name: "Chip",
    email: "chip@gmail.com",
  },
  {
    name: "Chup",
    email: "chup@gmail.com",
  },
];

// TH1: Arrow function k bind được this và arguments
// this.arrow function là window
/**
 * giải thích:
 * arrow function không bind this vì thế nên
 * khi log this, sẽ lấy phần tử gần nhất với phẩn tử button -> window
 */
var btn = document.querySelector(".btn");
var wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", function () {
  btn.addEventListener("click", () => {
    console.log(this);
  });
});

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

console.log(module);

var products = document.querySelectorAll(".products h2");
// products.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log(this);
//   });
// });

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener("click", () => {
    console.log(this);
  });
}

// argument
var getMax = function () {
  console.log(typeof arguments); // array like object
};
getMax(5, 10, 15, 20);

var user = {
  name: "Ha Chi",
  email: "chi@gmail.com",
  getName: () => {
    return this.name;
  },
};
console.log(user.getName());

var Customer = () => {
  this.name = "Ha Chi";
  this.getName = function () {
    return "Hà Chi";
  };
};
var customer = new Customer();
/**
 * Trường hợp: Không hoisting được
 *
 * Tránh được trường hợp sau, còn lại dùng arrow function:
 */

/*
2. Rest Parameters:
*/

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
