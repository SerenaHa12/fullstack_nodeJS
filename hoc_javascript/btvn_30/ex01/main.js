var btn = document.querySelector(".btn");
var countEl = document.querySelector(".count");
var message = document.querySelector(".message");

var countEvent = new Event("count");
// lưu ý: Tên sự kiện k được trùng với ccs sự kiện đã có sẵn
console.log(countEvent);

btn.addEventListener("click", function () {
  countEl.innerHTML++;
  //   lúc này ta phải viết logic vào một event khác
  if (+countEl.innerText === 10) {
    // message.innerText = "Hello F8";
    countEl.dispatchEvent(countEvent);
  }
});

countEl.addEventListener("count", function () {
  console.log("Success");
});
/*
Yêu cầu: Nếu count = 10 thì ta hiển thị nội dung "Hello F8 vào div message"
Cách làm: Bây giờ nếu ta muốn tách count = 10 thành 1 component
*/

/*
Yêu cầu: Giữ chuột và tăng số lên
*/

var increaseEvent = new Event("increase");
btn.addEventListener("mousedown", function () {
  countEl.dispatchEvent(increaseEvent);
});

// sử dụng cách gán cờ
var isMouseDown = false;
var handleIncrease = function (current) {
  current.innerText++;
  setTimeout(function () {
    handleIncrease(current);
  }, 500);
  if (!isMouseDown === false) {
    clearTimeout(id);
  }
};
countEl.addEventListener("increase", function () {
  console.log("increase");
  isMouseDown = true;
  this.innerText++;
});

// ------------------------------------------------------------------------------------------------

// case 2:
var quantity = document.querySelector(".quantity");
var quantityInput = document.querySelector("input");
var minusBtn = quantityInput.previousElementSibling;
var plusBtn = quantityInput.nextElementSibling;
var changeEvent = new Event("change");

plusBtn.addEventListener("click", function () {
  quantityInput.value++;
  quantityInput.dispatchEvent(changeEvent);
});

minusBtn.addEventListener("click", function () {
  quantityInput.value--;
  if (quantityInput.value < 1) {
    quantityInput.value = 1;
  }
  quantityInput.dispatchEvent(changeEvent);
});

quantityInput.addEventListener("change", function () {
  console.log(this.value);
});

// Trigger Event
/*
Cách 1: Tự tạo ra event riêng
Cách 2: Sử dụng làm có sẵn

https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
https://www.selenium.dev/
*/

// case 3: tách mouse move, up, down và drag
// áp dụng cho các case phức tạp khi cần xử lý nhiều hành động cùng 1 lúc
var timer = document.querySelector(".timer");
// timer.addEventListener("change", function () {
//   console.log(this.value);
// });

// var isDrag = false;
// timer.addEventListener("mouseup", function () {
//   isDrag = true;
// });

// timer.addEventListener("mousemove", function () {
//   isDrag = false;
// });

// timer.addEventListener("mousedown", function () {
//   isDrag = false;
// });

// timer.addEventListener("input", function () {
//   console.log(this.value);
// });

var initialValue;
var dragEvent;

document.addEventListener("mouseup", function () {
  initialValue = null;
});

timer.addEventListener("input", function () {
  if (!initialValue) {
    initialValue = this.value;
    dragEvent = new CustomEvent("drag", {
      detail: {
        initialValue: initialValue,
      },
    });
  }
  if (this.value !== initialValue) {
    console.log("kéo");
  }
});

timer.addEventListener("drag", function (e) {
  console.log(this.value);
  //   console.log(e.target.value);
  console.log(this.value, e.detail.initialValue);
});

/*
- Sự khác nhau giữa Event và Custom Event
*/
