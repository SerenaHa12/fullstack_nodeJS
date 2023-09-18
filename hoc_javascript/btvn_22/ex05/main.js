/*
Bai 1: Viết 1 hàm tính tổng giá trị biểu thức, 
tham số truyền vào ở dạng Rest Parameter

Yêu cầu chi tiết:
    Hàm return về giá trị
    Ép ràng buộc kiểu dữ liệu là số
    Nếu dữ liệu truyền vào không hợp lệ, trả về thông báo lỗi
*/

var getTotal = function (...numbers) {
  if (numbers.length) {
    var total = 0;
    var check = numbers.every(function (number) {
      if (number !== null) {
        number = +number;
        total += number;
        if (!Number.isNaN(number)) {
          return true;
        }
      }
    });

    if (check) {
      return total;
    }

    return "Dữ liệu không hợp lệ";
  }
};

var result = getTotal(5, 10, 15, "20", "10");
console.log(result);

// Bước 1: Thực hiện ép kiểu

/*
Bai 2: Viết 1 phương thức Prototype có tên là getCurrency 
có đối số truyền vào là đơn vị tiền tệ cần hiển thị

Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ
*/
var price = 12000;
Number.prototype.getCurrency = function (currency) {
  //   console.log(this);
  var value = this.valueOf();
  if (currency) {
    return value.toLocaleString() + " " + currency;
  }
};
String.prototype.getCurrency = Number.prototype.getCurrency;
price.getCurrency("đ");
console.log(price.getCurrency("đ"));

// tình huống 2: không có đơn vị tiền tệ VNĐ
var price = 12000000;

/*
Bai 3: Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
*/

// bước 1: khởi tạo dữ liệu
var categories = [
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

//
var getCategories = function (categories, parent = 0) {
  var result = [];
  if (categories.length) {
    categories.forEach(function (category, index) {
      if (category.parent === parent) {
        // sử dụng đệ quy
        var children = getCategories(categories, category.id);
        if (children.length) {
          category.children = children;
        }

        result[category.id] = category;
      }
    });
  }

  result = result.filter(function (item) {
    return true;
  });
  return result;
};

var tree = getCategories(categories);
console.log(tree);

/*
Bai 4: Viết lại vòng lặp reduce() trong Array bằng cách 
sử dụng Prototype trong Javascript

Lưu ý: Đặt tên là reduce2()
*/

var numbers = [5, 10, 15, 20, 25];

Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length) {
    var prev;
    for (var index = 0; index < this.length; index++) {
      if (index === 0) {
        if (initialValue === undefined) {
          prev = this[0];
          console.log("a");
          continue;
        }

        prev = initialValue;
      }

      var value = this[index];
      prev = callback(prev, value, index);

      if (index === this.length - 1) {
        return prev;
      }
    }
  }
};

var result = numbers.reduce2(function (prev, current, index) {
  //   console.log(prev, current);
  //   return current;
  return prev + current;
}, 0);

console.log(result);
