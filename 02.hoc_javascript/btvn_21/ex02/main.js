/*
Bai 1: 
Yêu cầu: Viết hàm getError(field) có tham số truyền vào là field 
tương ứng với nhóm cần lấy lỗi. Tuy nhiên, chỉ trả về 1 chuỗi là 
lỗi đầu tiên của 1 nhóm
 */
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  if (errors[field]) {
    for (var key in errors[field]) {
      return errors[field][key];
    }
  } else {
    return null;
  }
}

//console.log(getError("name"));
console.log(getError("email"));

// ---------------------------------------------------------------------------------

/*
Bai 2: 
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng 
có 3 thuộc tính: name, age và address.

Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng 
để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.

Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó 
được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName 
của mỗi đối tượng.
*/

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);
// Tạo hàm createCustomers này. return về mảng mới.

function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

function createCustomers(customers) {
  const customerObjects = customers.map((customer) => {
    //split name
    const nameParts = customer.name.split(" "); 
    const shortName = `${nameParts[0]} ${nameParts[2]}`; 
    return new Customer(
      customer.name,
      customer.age,
      customer.address,
      shortName
    );
  });

  customerObjects.sort((a, b) => a.age - b.age);

  return customerObjects;
}

console.log(result);

// ---------------------------------------------------------------------------------

/*
Bai 3: 
Viết một hàm tạo (Constructor) để khởi tạo ra một đối tượng 
có 3 thuộc tính: name, password và email.

Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra 
một mảng chứa các đối tượng có cấu trúc như trên.

Yêu cầu:

Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.
Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.
Tự động thêm role là user cho mỗi đối tượng.
Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:
Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.
Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
*/

const data = [];
const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("Nguyen Van B", "1234567");

function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}

const registerUser = [];