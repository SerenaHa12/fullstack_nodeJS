/*
    Bài 1: Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, 
    nhỏ nhất trong mảng và vị trí

    Hướng làm: sử dụng for | for in | for each
*/
var numbers = [5, 2, 1, 9, 8];

var max = numbers[0];
var min = numbers[0];
var maxIndex = 0;
var minIndex = 0;

// for (var i = 1; i < numbers.length; i++) {
//   //Tìm max
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }

//   //Tìm min
//   if (min > numbers[i]) {
//     min = numbers[i];
//   }
// }

for (var i in numbers) {
  //Tìm max
  if (max < numbers[i]) {
    max = numbers[i];
    maxIndex = i;
  }

  //Tìm min
  if (min > numbers[i]) {
    min = numbers[i];
    minIndex = i;
  }
}

console.log(`Giá trị lớn nhất là: ${max} - Vị trí: ${maxIndex}`);
console.log(`Giá trị nhỏ nhất là: ${min} - Vị trí: ${minIndex}`);

// ---------------------------------------------------------------------------
/*
    Bài 2: Cho trước 1 mảng số nguyên, 
    Tính trung bình các số nguyên tố trong mảng. 
    Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
*/
var numbers = [2, 5, 1, 9, 8];

var isPrime = function (n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }

  for (var i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

var total = 0;
var avg;
var count = 0;
for (var i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    total += numbers[i];
    count++;
  }
}

if (count > 0) {
  avg = total / count;
  console.log(`Trung bình cộng ${count} số nguyên tố là: ${avg}`);
} else {
  console.log("Không có số nguyên tố");
}

// ---------------------------------------------------------------------------
/*
    Bài 3: Cho trước 1 mảng bất kỳ, 
    Nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). 
    In ra mảng sau khi đã xử lý.

    Bài toán lọc trùng: 
    - so sánh từng phần tử với các phần tử phia sau của nó
    - nếu có phần tử trùng lặp -> loaij phần tử đó đi
*/
var numbers = [2, 5, 1, 9, 8];

var newArray = [];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);

  //   Kiểm tra nếu đã có ta bỏ qua
  if (newArray.includes(numbers[i])) {
    continue;
  }

  newArray[newArray.length] = numbers[i];
}

console.log(newArray);
// ---------------------------------------------------------------------------
/*
    Bài 4: Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
    Sắp xếp mảng theo thứ tự tăng dần
    Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng

    sử dụng sort để sắp xếp
*/
var numbers = [10, 6, 1, 9, 8];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

var element = -5;

if (element < numbers[0]) {
  numbers.unshift(element);
} else if (element > numbers[numbers.length - 1]) {
  numbers.push(element);
} else {
  var indexInsert;
  for (var i = 0; i < numbers.length; i++) {
    if (element >= numbers[i] && element < numbers[i + 1]) {
      indexInsert = i;
      break;
    }
  }

  numbers = [].concat(
    numbers.slice(0, indexInsert + 1),
    element,
    numbers.slice(indexInsert + 1)
  );
}

console.log(numbers);
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
