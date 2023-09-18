// Bai 1: Lấy kết quả giao giữa 2 mảng
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var newArr = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }

  return prev;
}, []);
console.log("====================================");
console.log(newArr);
console.log("====================================");

// Bai 2: Làm phẳng array sau (Chuyển về mảng 1 chiều)
// var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flatArr = function (arr) {
  var newArr = arr.reduce(function (prev, current) {
    if (!Array.isArray(current)) {
      return prev.concat(current);
    }

    return prev.concat(flatArr(current));
  }, []);

  return newArr;
};

var result = flatArr(arr);
console.log("====================================");
console.log(result);
console.log("====================================");

// Cách 2: Sử dụng log(arr.flat(Infinity));

// Bai 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu
// var arr = [["a", 1, true], ["b", 2, false]];
// var result = [[], [], []];

var arr = [
  ["a", 1, true],
  ["b", 2, false],
  [null, undefined, function () {}],
  [false, undefined, NaN, 10],
];

//[["a", "b"], [1, 2], [true, false]]

//Kiểm tra xem có phải là mảng hay không?
if (Array.isArray(arr)) {
  arr = arr.flat(Infinity);
  var array = arr.reduce(function (prev, current) {
    var type = typeof current;
    if (!prev[type]) {
      prev[type] = [];
    }

    prev[type].push(current);

    return prev;
  }, []);

  var result = [];
  for (var index in array) {
    result.push(array[index]);
  }

  console.log(result);
}
