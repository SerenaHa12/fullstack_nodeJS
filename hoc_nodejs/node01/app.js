import express from "express";
const app = express();

// định tuyến router
// Router sẽ được tách thành một file riêng
app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});
// băt sbuoocj phỉa có response.send

// tạo ra trang sản phẩm
app.get("/san-pham", (req, res) => {
  res.send("<h1>Danh sach san pham</h1>");
});

// notfound
app.use((req, res) => {
  res.send("<h1>404</h1>");
});

const port = 8080;
const hostname = "localhost";
app.listen(port, hostname, () => {
  console.log("Server listening on port " + port);
});
