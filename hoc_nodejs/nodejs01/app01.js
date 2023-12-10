// const http = require("http"); //import thư viện http có sẵn của nodejs
// const getProducts = require("./modules/products");
// getProducts();
import http from "http";
import { getProducts } from "./modules/products.js";
getProducts();
const server = http.createServer((req, res) => {
  const path = req.url;
  const cookie = req.headers["cookie"];
  const method = req.method;
  console.log(method);

  //Xử lý dữ liệu, logic --> Truy vấn với Database --> Trả về dữ liệu

  //Phản hồi về phía client
  res.setHeader("abc", "xyz"); //response header
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 200;
  //Set cookie
  // res.setHeader("Set-Cookie", "name=hoangan;path=/;Max-Age=86400;HttpOnly");

  if (path === "/") {
    res.write("<h1>Học NodeJs không khó</h1>");
  } else if (path === "/san-pham") {
    res.write("<h1>Sản phẩm</h1>");
  } else {
    res.write("<h1>Page Not Found</h1>");
  }

  res.end();
});
server.listen("8080", "localhost", () => {
  console.log("Server đang chạy: http://localhost:8080");
});

/*
Các package hay dùng của nodejs (Không cần phải cài)
http
fs
path

CommonJS Module --> Sử dụng require
ES6 Module --> Sử dụng import / export
*/
