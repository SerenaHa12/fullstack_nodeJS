/*
Bai 1: Viết 1 hàm tính tổng giá trị biểu thức, 
tham số truyền vào ở dạng Rest Parameter

Yêu cầu chi tiết:
    Hàm return về giá trị
    Ép ràng buộc kiểu dữ liệu là số
    Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
*/

getTotal = function (...numbers) {
  console.log(numbers);
  if (numbers.length) {
    var check = numbers.every(function (number) {
      if (number !== null) {
        number = +number;
        if (!number.isNaN(number)) {
          return true;
        }
      }
      return false;
      //   console.log(check);
      if (check) {
        return numbers.reduce(function (total, number) {
          return +total + +number;
        });
      }
      return `Du lieu khong hop le`;
    });
  }
};

// getTotal(5, 10, 12, 20, null, undefined, "10a");
getTotal(5, 10, 12, 20);

// Bước 1: Thực hiện ép kiểu


/*
Bai 2: Viết 1 phương thức Prototype có tên là getCurrency 
có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ
*/