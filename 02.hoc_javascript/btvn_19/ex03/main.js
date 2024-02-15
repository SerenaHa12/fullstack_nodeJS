console.log("Bai tap ve nha Buoi 19");

/*
    Bài 1: Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
 */

const array = [5, 1, 9, 8, 10];

// tìm số lớn nhất
const maxNumber = Math.max(...array);
const maxIndex = array.indexOf(maxNumber);
console.log("Số lớn nhất:", maxNumber + " và vị trí", maxIndex);

// tìm số nhỏ nhất
const minNumber = Math.min(...array);
const minIndex = array.indexOf(minNumber);
console.log("Số nhỏ nhất:", minNumber + " và vị trí", minIndex);

/*
    Bài 2: Cho trước 1 mảng số nguyên, 
    Tính trung bình các số nguyên tố trong mảng. 
    Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
 */
//const array = [5, 1, 9, 8, 10];

// check prime number
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let sumOfPrimes = 0;
let countOfPrimes = 0;

for (let i = 0; i < array.length; i++) {
  if (isPrime(array[i])) {
    sumOfPrimes += array[i];
    countOfPrimes++;
  }
}

if (countOfPrimes === 0) {
  console.log("Không có số nguyên tố trong mảng.");
} else {
  const average = sumOfPrimes / countOfPrimes;
  console.log("Trung bình các số nguyên tố trong mảng:", average);
}

/*
    Bài 3: Cho trước 1 mảng bất kỳ, 
    Nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). 
    In ra mảng sau khi đã xử lý
 */

const duplicateArray = [5, 5, 5, 1, 1, 9, 9, 9, 9, 8, 10, 10];
const logArray = removeDuplicates(duplicateArray);

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log("Mảng sau khi lọc:", logArray);

/*
    Bài 4: Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
    Sắp xếp mảng theo thứ tự tăng dần
    Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
 */

//const array = [5, 1, 9, 8, 10];
var element = 4;
array.push(4);

array.sort(function (a, b) {
  return a - b;
});

console.log("Mảng sau khi sắp xếp: " + array);
