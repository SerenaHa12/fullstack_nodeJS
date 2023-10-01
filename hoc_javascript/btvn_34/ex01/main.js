/*
Try Catch 
- Dùng để xử lý lỗi ngoại lệ (Exception)

Tình huống 1: cho 1 biến a

Thứ tự Try => Catch => Finally 
Try, Catch chỉ xảy ra 1 trong 2
*/
console.log("Chương trình bắt dầu");
var getMessage;

try {
  console.log(a);
  getMessage();

  // Nếu trường hợp là lỗi logic nhưng vẫn muốn đẩy vào ngoại lệ
  if (a < 20) {
    // tự tạo thêm 1 lỗi
    throw new Error("Biến a phải từ 20 trở lên");
  }
} catch (exception) {
  console.log(exception.message);
} finally {
  console.log("Hoàn thành");
}

console.log("hello");
