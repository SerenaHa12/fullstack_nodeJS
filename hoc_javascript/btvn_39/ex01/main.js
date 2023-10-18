/*
Authentication với mạng xã hội
- Firebase
- Auth0
- https://regex101.com/

Các ký hiệu viết tắt
- \d -> [0-9]
- \D -> Các ký tự không phải là số
- \s -> Khoảng trắng
- \S -> Không phải khoảng trắng
- \w -> Từ A-Z, a-z, 0-9, _
- \W -> Ngược lại của \w

Phủ định: ^
Hoặc: | 
Ký tự đại diện cho tất cả các ký tự: .
*/

// const str = "abc123";
// const pattern = /[^ABC]+/;
// Biểu thức khai báo trong ký tự [] được hiểu là hoặc
// const check = pattern.test(str);
// console.log(check);

// Khẳng định a>0 || b>0 || c>0
// const str = "https://fullstack.edu.vn";
// const pattern = /^http|https:\/\/[a-z_0-9\.]+\.[a-z]{2,}$/;
// const check = pattern.test(str);
// console.log(check);

// Nghiệp vụ:
// So chuỗi
// Nối chuỗi
// Cắt chuỗi

/*
Bài tập 1
Yêu cầu: check chuỗi url xem có phải url của Youtube hay không 
*/
// const str =
//   "https://www.youtube.com/watch?v=76wMoTs0xKo&ab_channel=MeineCrochet";
// const pattern = /^(http|https):\/\/(www\.)*(youtube\.com\/.+|youtu\.be\/.+)$/;
// const check = pattern.test(str);
// console.log(check);

// Cắt chuỗi
// const content = `hello 0373506620, abcd 01234567890`;
// const pattern = /(0|\+84)\d{9}/g;
// const result = content.match(pattern);
// console.log(result);

/*
Kỹ thuat Capturing Group
*/
// const content = `hello 0373506620 hoangan@gmail.com, abcd chidh@gmail.com 01234567890`;
// const pattern = /[a-z\.0-9-_]{3,}@[a-z-_\.0-9]+\.[a-z]{2,}/g;
// const result = content.match(pattern);
// const domainList = result.map((email) => {
//     const pattern = /([a-z\.0-9-_]{3,})@([a-z-_\.0-9]+\.[a-z]{2,})/;
//     const domain = email.match(pattern);
//     return domain[1]
// })
// console.log(domainList);

// const url = "http://fullstack.edu.vn/khoa-hoc/fullstack-offline";
// const pattern = /^(?:http|https):\/\/[a-z-_0-9\.]+\.([a-z]{2,})\/.*$/;
// const result = url.match(pattern);
// console.log(result);

// Greedy
// const str = `<img title = ""F8 src = "https://fullsatck.edu.vn" width="200" alt="F8"></img>`;

// Thay thế
// let content = `So dien thoai cua toi la: 0373506620. Them so nua: 0123456789`;
// const pattern = /(0|\+84)\d{9}/g;
// content = content.replace(pattern, "***");
// console.log(content);

// Đổi sang chuỗi -> Chỉ hoạt động với capturing group
let content = `So dien thoai cua toi la: 0373506620. Them so nua: 0123456789`;
const pattern = /(0|\+84)\d{9}/g;
content = content.replace(pattern, `<a href="tel:$1">$1</a>`);
console.log(content);
document.body.innerHTML = content;

// lookaround trong biểu thức chính quy
const a = `abc\/\d+`;
// Chuyển đổi thành pattern
const pattern2 = new RegExp(a, "ig");
console.log(pattern2);


/**
 * Tổng hợp
 * 1. Phủ định
 * 2. Hoặc
 * 3. Cắt chuỗi
 * - capturing group
 * - non capturing group
 * 4. Thay thế
 * - thay thế thường: chuyển btcq thành 1 chuỗi cố định
 * - đối sánh chuỗi
 * 5. Ký tự đại diện \d, \D, \w, \W, \s, \S
 */