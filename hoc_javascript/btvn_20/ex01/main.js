// Tìm hiểu về các vòng lặp

var users = ["An", "Tuấn", "Dũng", "Yến"];
console.log(users);

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
    - Trả về false 
*/

var numbers = [1, 3, 5, 2, 9];
// Kiểm tra mảng trên xem tất cả có phải số lẻ hay không
var check = numbers.every(function (number) {
  if (number % 2 === 0) {
    return true;
  }
});

console.log(check);
