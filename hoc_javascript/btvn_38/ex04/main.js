// Regex
// Regular expression
// Biểu thức chính quy

/*
Biểu thức chính quy:
- Tập hợp các ký hiệu theo một quy tắc nhất định để xử lý chuỗi
- Viết bằng ngôn ngữ Perl

Tác dụng:
- So khớp
- Cắt chuỗi 
- Thay thế

Cú pháp: /regex/modifier
- regex: /regex/modifier
- modifier: cấu hình cho biểu thức chính quy
    + g -> global
    + i -> không phân biệt chữ hoa chữ thường 
    + m -> multi line -> khớp nhiều dòng
    + s -> single line -> khớp một dòng 

Các ký hiệu cơ bản
- char -> tìm chuỗi char trong chuỗi gốc
- Khớp đầu chuỗi: ^
- Khớp cuối chuỗi: $
- Khớp ký tự đại diện: [A-Z] -> Chữ hoa
- Khớp ký tự đại diện: [a-z] -> Chữ thường
- Khớp ký tự đại diện: [0-9] -> Số
- Khớp ký tự đại diện: [charList] -> các kỹ tự chỉ định (Khớp theo điều kiện hoặc)
- Khớp độ dài: Mặc định các biểu thức chỉ có độ dài = 1
- {min, max} -> độ dài từ min đến max
- {min,} -> độ dài từ min đến vô cùng
- {max} -> độ dài cố định

Ký hiệu viết tắt của độ dài :
- {0, 1} -> ?
- {1, } -> +
- {0, } -> *

Nếu muốn so khớp các ký hiệu bị trùng với ký hiệu của biểu thức 
chính quy thì cần thêm dấu \ phía trước.
- Dấu chấm (.)
- Dấu ngoặc vuông ([])
- Dấu gạch chéo (/)
...
*/

// const str = "1hoangan@gmail.com";
// const pattern = /hoangan/;
// const check = pattern.test(str);
// console.log(check);

const str = "hoangan@gmail.com";
// const pattern = /^[a-zA-Z]*hoangan/;
const pattern = /^[a-z][a-z\.0-9-_]{2,}@[a-z-_\.0-9]+\.[a-z]{2,}$/;
const check = pattern.test(str);
console.log(check);
