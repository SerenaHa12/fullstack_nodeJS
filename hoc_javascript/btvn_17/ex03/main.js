/*
    Bài 1: Tính tiền taxi

        Tính tiền cước taxi dựa vào các điều kiện sau
        Số km ≤ 1 giá 15000đ
        1 < số km ≤ 5 giá 13500đ
        Số km > 5 giá 11000đ
        Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
*/
function calculatePrice(distance) {
  var price;

  if (distance < 1) {
    price = 15000; //Số km ≤ 1 giá 15000đ
  } else if (distance > 1 && distance <= 5) {
    //1 < số km ≤ 5 giá 13500đ
    price = 13500;
  } else {
    price = 11000; //Số km > 5 giá 11000đ
  }

  var totalMoney = distance * price;

  if (distance > 120) {
    totalMoney *= 0.9; // discount 10% -> pay 90%
  }

  return totalMoney;
}

var distance = 4;
//var distance = 6;
//var distance = 124;
var price = calculatePrice(distance);
console.log("Total money for", distance, "km is", price);

// ------------------------------------------------------------------

/*
    Bài 2: Tính tiền điện
        Học viên viết chương trình tiền điện hàng tháng theo yêu cầu sau
        Input: Số điện tiêu thụ hàng tháng
        Output: Hiển thị số tiền phải đóng
        Chi tiết giá điện theo bậc
*/
function calculatePrice(numberElectricity) {
  var priceElectric;

  if (numberElectricity > 0 && numberElectricity < 50) {
    priceElectric = 1.678;
  } else if (numberElectricity >= 50 && numberElectricity < 100) {
    priceElectric = 1.734;
  } else if (numberElectricity >= 100 && numberElectricity < 200) {
    priceElectric = 2.014;
  } else if (numberElectricity >= 200 && numberElectricity < 300) {
    priceElectric = 2.536;
  } else if (numberElectricity >= 300 && numberElectricity < 400) {
    priceElectric = 2.834;
  } else if (numberElectricity >= 400 && numberElectricity < 500) {
    priceElectric = 2.927;
  }

  var totalMoney = numberElectricity * priceElectric;
  return totalMoney;
}

var numberElectricity = 2;
var priceElectric = calculatePrice(numberElectricity);
console.log("Total money for", numberElectricity, "kWh is", priceElectric);

// ------------------------------------------------------------------

/*
    Bài 3: Tính giá trị biểu thức
*/
function sumS(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i * (i + 1);
  }
  return sum;
}

//var n = 2;
var n = 10;
var sum = sumS(n);
console.log("S =", sum);
// ------------------------------------------------------------------

/*
    Bài 4: Viết hàm kiểm tra số nguyên tố
*/
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var num = 17;
var prime = isPrime(num);
console.log(num, prime ? " is a prime number" : "is not a prime number");
// ------------------------------------------------------------------

/*
    Bài 5: Vẽ tam giác số
*/
function drawTriangle(n) {
  var currentNum = 1;
  for (var i = 1; i <= n; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += currentNum + " ";
      currentNum++;
    }
    console.log(row);
  }
}

var n = 10;
drawTriangle(n);
// ------------------------------------------------------------------

/*
    Bài 6: Vẽ bàn cờ vua
*/
// ------------------------------------------------------------------

/*
    Bài 7: Vẽ bảng cửu chương
*/
// ------------------------------------------------------------------

/*
    Bài 8: Tính giá trị biểu thức không dùng vòng lặp
*/
// ------------------------------------------------------------------
