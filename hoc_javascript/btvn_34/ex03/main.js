/**
 * API: Application Programming Interface
 * -> Giao diện lập trình ứng dụng
 *
 *  + Front-end với Back-end
 *  + Back-end với back-end
 *  + Sử dụng các hàm trong 1 thư viện
 *
 * Khi làm việc với Web API -> Thường sử dụng RESTFUL
 *  - URL: Server API + resource|path
 *  - HTTP Method: Phương thức giao tiếp
 *  + GET -> lấy dữ liệu
 *  + POST -> Thêm mới dữ liệu
 *  + PUT -> Cập nhập dữ liệu
 *  + PATCH -> Cập nhập dữ liệu
 *  + DELETE -> Xóa dữ liệu
 *
 * -> Phía back-end sẽ xây dựng
 *
 * Ví dụ:
 *  - Url: https://api.fullstack.edu.vn/users
 *  - Tổng hợp Http Method + Resource => Endpoint
 *
 * Ví dụ:
 *  - POST /users
 *  - GET /users
 *
 * Làm sao để có API
 *  - Sử dụng các dịch vụ có sẵn
 *  - Fake bằng thư viện: JSON SERVER
 *  - https://github.com/typicode/json-server
 */

// Sử dụng hàm fetch để gọi API
// fetch -> trả về 1 promise
const apiUrl = `http://localhost:3000/users`;

const getUsers = async () => {
  const response = await fetch(apiUrl);
  //response => Trả về thông tin của response sau khi gọi API

  const users = await response.json();
  //Response Message Body

  document.body.innerHTML = users
    .map(({ name, email }) => `<h2>${name}</h2><h3>${email}</h3><hr/>`)
    .join("");
};

getUsers();

const getUser = async (id) => {
  const response = await fetch(apiUrl + "/" + id);
  const user = await response.json();
  //   console.log(user);
};
getUser(2);

const postUser = async (data) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("Thêm thành công");
  }
};

postUser({
  name: "User 4",
  email: "user4@gmail.com",
});
