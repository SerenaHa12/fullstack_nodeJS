const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");

let count = 30; // Đếm ngược 30 giây
let isButtonEnabled = false;
let startTime; // lưu thgian bắt đầu đếm


// sử dụng window.requestAnimationFrame để gọi hàm giảm time
function decreaseCount(customTime) {
    // check start time
  if (!startTime) {
    startTime = customTime;
  }

//   tính time trôi qua dựa trên time bdau
  const elapsedTime = customTime - startTime;
  const secondsRemaining = Math.max(Math.floor((count * 1000 - elapsedTime) / 1000), 0);

  counter.textContent = secondsRemaining;

  if (secondsRemaining === 0) {
    isButtonEnabled = true;
    btn.removeAttribute("disabled");
  }

  if (secondsRemaining > 0) {
    window.requestAnimationFrame(decreaseCount);
  }
}

function getLink() {
  if (isButtonEnabled) {
    window.location.href = "https://fullstack.edu.vn";
  }
}

btn.addEventListener("click", getLink);

document.addEventListener("DOMContentLoaded", () => {
  window.requestAnimationFrame(decreaseCount);
});
