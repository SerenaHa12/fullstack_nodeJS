/*
STORAGE 

1. Local Storage:
- Lưu trữ vô thời hạn

1.1 setlocalStorage
- setlocalStorage: localStorage.setItem('key', 'value')

1.2 getlocalStorage
- getlocalStorage: localStorage.getItem('key')
-> không có hàm sửa, khi muốn sửa thì set lại

1.3 removelocalStorage
- remove localStorage: localStorage.removeItem('key')
- xóa tất cả localStorage.clear()

2. Session Storage:
- Lưu trữ theo phiên
- Tắt trình duyệt là Xóa
- Tương tự localStorage

3. Cookie Storage:
- Lưu trữ theo phiên và lưu trữ theo thời gian xác định
- Tự động đính kèm vào HTTP request server
- Chuỗi Cookie: key1=value1;key2=value2;...;...

-> Local Storage ở các domain sẽ khác nhau
*/

if (typeof Storage !== "undefined") {
  console.log(localStorage.getItem("userName"));
}

// 3.1 set cookie
// exprire sẽ chấp nhận định dạng thời gia UTC
const expire = new Date("2023-10-16 09:00:00").toUTCString();
console.log(document.cookie);

// 3.2 Đọc cookie

// 3. Cập nhập cookie
// document.cookie = "username=hoangan";
document.cookie = "username=hoangan.web;path=/";
// document.cookie = "username=hoangan.web";
document.cookie = "username=hoangan.web;http=only";

// 3.4 Xóa cookie
// document.cookie = `username=; expires=${new Date().toUTCString()}`;

/*
HTTP only cookies: tránh đánh cắp thông tin cookies
secure -> chỉ lấy được thông tin cookies nếu sử dụng https
*/

import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);
const root = document.querySelector("#root");
const render = () => {};
render();
