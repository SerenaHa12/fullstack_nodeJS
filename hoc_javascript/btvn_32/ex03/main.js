/*
Class
- Class được bổ sung vào ES6 để khởi tạo, dễ sử dụng và bảo trì
- Khuyến khích sử dụng class thay thế cho hàm tạo
*/

// function User() {
//     this.name = 'Ha Chi';
//     this.email = 'chi@gmail.com';
//     this.getName = function() {
//         return this.name;
//     }
// }

class User {
  // Bước 1: Khai báo constructor()
  // Dùng để khai báo các thuộc tính, các giá trị khởi tạo
  // Chạy đầu tiên khi object được khởi tạo
  constructor() {
    this.name = "Ha Chi";
    this.email = "chi@gmail.com";

    // Bước 2: Các giá trị khởi tạo
  }

  // Các phương thức
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}
// Ở bản ES6 đưa ra phần khởi tạo này để gần giống các ngôn ngữ lập trình khác
// Các phương thức sẽ dược đẩy vào prototype
// user.prototype.message = `hello`;
// const user = new User();
// console.log(user.name);
// console.log(user.email);
// console.log(user.getEmail());

class Authentication extends User {
  constructor(name, email, age) {
    console.log("Constructing Authentication");
    super(name, email, age);
  }
  getUser() {
    return {
      name: this.getName(),
      email: this.getEmail(),
    };
  }
}

const auth = new Authentication();
console.log(auth.getUser());

/*
Từ khóa this trong class:

*/
const root = document.querySelector(".root");
class Counter {
  constructor() {
    this.count = 0;
    this.h1 = null;
  }

  handleIncrement = () => {
    this.count++;
    this.h1.innerText = this.count;
    console.log(this.count);
  };
  render() {
    this.h1 = document.createElement("h1");
    this.h1.innerText = this.count;
    const button = document.createElement("button");
    button.innerText = "+";
    button.addEventListener("click", this.handleIncrement);

    root.append(this.h1);
    root.append(button);
  }
}
new Counter().render();
