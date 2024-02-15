/*
Bai 1: Viết 1 hàm tính tổng giá trị biểu thức, 
tham số truyền vào ở dạng Rest Parameter

Yêu cầu chi tiết:
    Hàm return về giá trị
    Ép ràng buộc kiểu dữ liệu là số
    Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
*/

function sum(...nums) {
  var validNums = nums.map((num) => parseInt(num));

  if (validNums.some((num) => isNaN(num))) {
    return "Invalid input";
  } else {
    return validNums.reduce((total, num) => total + num, 0);
  }
}

// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum("a", 1, 2));

// ---------------------------------------------------------------------------

/*
Bai 2: Viết 1 phương thức Prototype có tên là getCurrency 
có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ
*/

String.prototype.getCurrency = function (unit) {
  // Eliminate Not number
  var numString = this.replace(/\D/g, "");

  var formattedNumber = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber + " " + unit;
};

//Case 1
// var price = 12000;
// console.log(price.getCurrency('đ')) //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ")); //Hiển thị: 12,000,000 đ

// ---------------------------------------------------------------------------

/*
Bai 3: Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
*/
var data = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function buildNestedStructure(array, parent = 0) {
  var nestedArray = [];
  array.forEach((item) => {
    if (item.parent === parent) {
      const children = buildNestedStructure(array, item.id);
      if (children.length) {
        item.children = children;
      }
      nestedArray.push(item);
    }
  });
  return nestedArray;
}

var nestedStructure = buildNestedStructure(data);

console.log(JSON.stringify(nestedStructure, null, 2));

// ---------------------------------------------------------------------------

/*
Bai 4: Viết lại vòng lặp reduce() trong Array bằng cách 
sử dụng Prototype trong Javascript

Lưu ý: Đặt tên là reduce2()
*/

Array.prototype.reduce2 = function (callback, initialValue) {
  var accumulator = initialValue;

  if (initialValue === undefined) {
    accumulator = undefined;
  } else {
    accumulator = initialValue;
  }
  
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

var numbers = [1, 2, 3, 4, 5];

var total = numbers.reduce2((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total); 
