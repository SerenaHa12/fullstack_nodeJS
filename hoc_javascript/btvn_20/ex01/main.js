// Tìm hiểu về các vòng lặp

// var users = ["An", "Tuấn", "Dũng", "Yến"];
// console.log(users);

// 1. fill -> cập nhập tất cả các phần tử thành một giá trị
//users.fill("F8");

//2. forEach(callback)
/*
    Duyệt từng phần tử của mảng trả về element và index (Trong Callback)
    Hàm này sẽ không trả về giá trị nào, không dùng được.

    Lưu ý: Chỉ duyệt !!! Không có giá trị trả về
    forEach chỉ có một tham số nhưng callback thì có 2.
*/
// users.forEach(function (user, index) {
//   console.log(user, index);
// });

// 3. map(callback)
/*
    Trả về một mảng mới với số lượng phần tử bằng với mảng ban đầu
    Giá trị của từng phần tử phụ thuộc vào giá trị của hàm Callback (có return)
*/
// var newArr = users.map(function (user, index) {
//   console.log(user, index);
//   return `<h3>${index + 1} - ${user}</h3>`;
// });

// var html = newArr.join("");
// document.write(html);

// 4. some()
/*
    Hàm some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng, 
    mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. 
    Chỉ cần hàm callback return true là hàm some sẽ return true. 
    Ngược lại, nếu duyệt hết mảng mà không có return true nào thì hàm some sẽ return false.
*/

// var check = users.some(function (user, index) {
//   console.log(user, index);
//   if (user === "An") {
//     return true;
//   }
// });

// console.log(check);

// Bài toán: Kiểm tra xem hàm sau có số chẵn hay không
// var numbers = [1, 3, 5, 2, 9];
// var check = numbers.some(function (number) {
//   return number % 2 === 0;
// });
// console.log(check);

// 5. every
/*
    - Trả về true/ false
    - Chỉ trả về true khi tất cả các phần tử có return false
    - Trả về false nếu tất cả các phần tử không return true
*/

// var numbers = [1, 3, 5, 2, 9];
// Kiểm tra mảng trên xem tất cả có phải số lẻ hay không
// var check = numbers.every(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// });

// console.log(check);

// 6. filter()
/*
    - Trả về một mảng
    - Số lượng phần tử của mảng mới phụ thuộc vào return true 
    của từng phần tử trong mảng ban đầu
*/

// var results = user.filter(function (user) {
//   console.log(user);
//   if (user === "An" || user === "Dũng") {
//     return true;
//   }
// });

// console.log(results);

// var customers = [
//   "Lưu Anh Quân",
//   "Dương Đức Hiệp",
//   "Đỗ Hà Chi",
//   "Mai Việt Hoàng",
//   "Nguyễn Xuân Tuấn Anh",
//   "Nguyễn Duy An",
// ];

// Lọc danh sách khách hàng trên theo từ khóa
/*
    - Không cần tìm tên chính xác
    - Không phân biệt chữ hoa, chữ thường
    - Includes() là một phương thức của đối tượng String trong JavaScript, 
    được sử dụng để kiểm tra xem một chuỗi có chứa một chuỗi con hay không. 
    Phương thức này trả về một giá trị Boolean, true nếu chuỗi con được tìm thấy 
    trong chuỗi gốc, false nếu không tìm thấy.
*/
// var keyword = "an";
// var results = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(results);

// 7. find()
// 8. findLast()
/*
    - Trả về 1 phần của mảng
    - 
*/

// var customers = [
//   "Lưu Anh Quân",
//   "Dương Đức Hiệp",
//   "Đỗ Hà Chi",
//   "Mai Việt Hoàng",
//   "Nguyễn Xuân Tuấn Anh",
//   "Nguyễn Duy An",
// ];

// var keyword = "n";
// var result = customers.find(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(result);

// 9. findIndex()
/*
- Tìm index dựa vào điệu kiện trong callback
- Tìm với kết quả đầu
*/
// 10. findLastIndex()
// var customers = [
//   "Lưu Anh Quân",
//   "Dương Đức Hiệp",
//   "Đỗ Hà Chi",
//   "Mai Việt Hoàng",
//   "Nguyễn Xuân Tuấn Anh",
//   "Nguyễn Duy An",
// ];

// var keyword = "n";
// var index = customers.findLastIndex(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(index);
// -> tính năng cập nhập lại mảng, to do list

// 11. Reduce
/*
    Cú pháp:
        arr.reduce(callback[, initialValue])
    Hàm reduce(callback, initialValue)
    - callback: hàm có 2 tham số (prevValue, currentValue)
    - initialValue: Giá trị khởi tạo 

    - callback: là hàm được gọi với mỗi phần tử của mảng, gồm 4 tham số:
        accumulator: biến tích lũy, được trả về sau mỗi lần gọi hàm callback.
        currentValue: phần tử của mảng đang được xử lý.
        currentIndex: chỉ số của phần tử trong mảng đang được xử lý.
        array: mảng hiện tại.

    - initialValue: là giá trị khởi tạo cho biến tích lũy accumulator 
    của hàm callback trong lần gọi đầu tiên. 
    Nếu giá trị này không được cung cấp thì 
    giá trị phần tử đầu tiên của mảng được sử dụng.

    - Giá trị trả về: chính là giá trị của accumulator sau lần gọi hàm callback cuối cùng.
    Giá trị khởi tạo cuả hàm Reduce là kết quả lần return cuối cùng
*/

// var numbers = [5, 10, 15, 20, 25];
// var result = numbers.reduce(function (prev, current) {
//   console.log(`Prev: ${prev}`, `Current: ${current}`);
//   return current;
// }, 0);

// console.log(result);

// Thực hiện tính tổng tất cả các phần tử trong mảng bằng reduce
// var result = numbers.reduce(function (total, current) {
//   return total + current;
// }, 0);

// console.log(result);

//Bài tập:tìm số lớn nhất trong mảng sử dụng reduce
// var numbers = [5, 9, 10, 2, 8];
// var maxNumber = numbers.reduce(function (prev, current) {
//   if (prev > current) {
//     return prev;
//   }

//   return current;
// }, 0);

// console.log(maxNumber);

// Bài tập: Tìm phần tử khác giữa 2 mảng
// Phần tử xuất hiện trong mảng 1 nhưng không xuất hiện trong mảng 2
// Trong TH này sẽ trả về mảng [5, 9]

// var arr1 = [1, 5, 2, 9];
// var arr2 = [1, 3, 2];

// var newArr = arr1.concat(arr2);

// var num = newArr.reduce((prev, newArr) => {
//   if (prev.indexOf(newArr) === -1) {
//     prev.push(newArr);
//   }
//   return prev;
// }, []);

// console.log(num);

// ________________________________

// var diff = arr1.reduce((prev, current) {
//     if(!arr2.includes(current)) {
//         prev.push(current);
//     }

//     return prev;
// }, []);

// console.log(diff);

// array là kiể dữ liệu tham chiếu. các kiểu dữ liệu tham chiếu k thể so sánh được.
// var testFunction = function () {
//   arguments.forEach(function (number) {
//     console.log(number);
//   });
//   console.log(arguments);
//   Array.from(arguments).forEach(function (number) {
//     console.log(number);
//   });
// };

// testFunction(5, 10, 15, 20);

// var pElement = document.getElementsByTagName("p");
// Array.from(pElement).forEach(function (item) {
//   console.log(item);
// });

// var a = ["Hoàng An", 31];
//var b = a;

// sao chép mảng
// b = a.map(function (item) {
//   return item;
// });

// b = [...a]; // spread operator
// b[0] = "Hoàng An F8";

// console.log(a, b);
// sao chép mảng
