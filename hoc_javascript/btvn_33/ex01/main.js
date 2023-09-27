class Person {
  constructor(name, email) {
    // thuộc tính non static
    this.name = name;
    this.email = email;
  }

  //   phương thức non static
  getEmail() {
    // console.log(this);
    // this này trả về một đối tượng
    return this.email;
  }

  static displayName = "John";

  //   phương thức static
  static getName() {
    // console.log(this);
    // this này trả về một class
    return "F8";
  }
}
/**
 * Khi làm việc với this, this của phương thức tĩnh sẽ khác với phương thức thông thường.
 * Cái nào thông qua từ khóa new => non static
 */

const person = new Person("John", "John@gmail.com");
// console.log(person.getEmail());
// console.log(Person.getName());
// console.log(Person.displayName);

// --------------------------------------------------------------

/*
Bài tập 1: Quản lý, thêm user, đăng ký, đăng nhập
tạo class User có các thuộc tính sau: 
- data
- name
-email
-password

Viết các phương thức xử lý:
- add: thêm user với
- getInfo: lấy thông tin user theo id
- 
Tạo class AUth kế thừa từ class User và xây dựng các phương thức sau:
- login -> đăng nhập -> trả về id của user nếu thành công
- register -> đăng ký -> trả về thông tin
- profile -> lấy thông tin theo user id
*/

class User {
  constructor() {
    this.data = [];
    this.name = null;
    this.email = null;
    this.password = null;
    this.constructor.self = this;
    console.log(this.constructor);
  }
  static self = null;

  isExist(email) {
    return this.data.find(({ email: _email }) => email === _email);
  }

  add(name, email, password) {
    if (!this.isExist(email)) {
      return this.data.push({
        id: this.data.length + 1,
        name,
        email,
        password,
      });
    }
  }

  getInfo(id) {
    const user = this.data.find(({ id: _id }) => id === _id);
    delete user.password;
    return user;
  }
}

class Authentication extends User {
  static register(name, email, password) {
    return this.self.add(name, email, password);
  }

  static login(email, password) {
    const user = this.self.data.find((item) => {
      return item.email === email && item.password === password;
    });

    if (user) {
      return user.id;
    }
  }
}
new Authentication();
Authentication.login("chi@gmail.com", "123");

const user = new User();
user.add("Hoàng An", "hoangan.web@gmail.com", "123456");
user.add("Lưu Anh Quân", "quan@gmail.com", "123456");
console.log(user.getInfo(1));
console.log(user.getInfo(2));

// --------------------------------------------------------------
