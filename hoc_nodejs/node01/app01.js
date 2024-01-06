/**
 * Client -> HTTP (Request, Response) -> Server
 *
 * Import 1 file, thư viện khác --> Sử dụng lệnh require() ==> CommonJS
 *
 * Node sẽ có một số thư viện không cần cài đặt như
 * - HTTP
 * - fs: file system
 * - path
 *
 * Chú ý khi học beackend : tách các file nhỏ
 *
 *
 */

// /jsdđ

// muốn build một thư viện node cần import http
// const http = require("http"); es5
import http from "http";
// console.log(http);

// const parse = require("url-parse");
import parse from "url-parse";

// import getName and getEmail
// const { getName, getEmail } = require("./utils/function");
import { getName, getEmail } from "./utils/function.js";
console.log(getName(), getEmail());

const hostname = "localhost";
const port = 8080;
const server = http.createServer((req, res) => {
  // req: yêu cầu từ phía client gửi lên
  // console.log(req);

  const url = parse(req.url, true);
  console.log(url.pathname);

  // const path = req.url;
  const path = url.pathname;
  // console.log(pathname);

  const userAgent = req.headers["user-agent"];
  // console.log(userAgent);

  const method = req.method;
  // console.log(method);

  let content;
  if (path === "/") {
    content = `<h1>Trang chu</h1>`;
  } else if (path === "/sanpham") {
    // console.log(url.query);
    const { status, keyword } = url.query;
    content = `<h1>San pham</h1> 
    <h2>Status: ${status}</h2>
    <h2>Keywords: ${keyword}</h2>`;
  } else {
    content = `<h1>Page not found</h1>`;
  }

  // phẩn hồi từ server về phía client
  res.setHeader("abc", "xyz");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  // res.setHeader("Set-Cookie", "name=hachi;path=/;max-age=84600;HttpOnly");
  // charset=utf-8 -> thiết lập tiếng việt

  const cookie = res.headers["cookie"];
  console.log(cookie);

  // thay đổi status -> mặc định là 200
  // res.statusCode = 404;
  res.end(content);
});

// để truy cập server từ phía cliet phải có hostname và port
server.listen(port, hostname, () => {
  console.log("server is listening on 8080");
});

// sử dụng thư viện node mon
// bên BE chủ yếu làm việc với res và response
