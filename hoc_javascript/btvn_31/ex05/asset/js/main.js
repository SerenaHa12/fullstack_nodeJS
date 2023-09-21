const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");

let count = 30; // Đếm ngược 10 giây
// let count = 10;
let isButtonEnabled = false;
let startTime;
let animationFrameId;

// Sử dụng window.requestAnimationFrame để gọi hàm giảm thời gian
function decreaseCount(customTime) {
  // Kiểm tra thời gian bắt đầu
  if (!startTime) {
    startTime = customTime;
  }

  // Tính thời gian đã trôi qua dựa trên thời gian bắt đầu
  const elapsedTime = customTime - startTime;
  const secondsRemaining = Math.max(
    Math.floor((count * 1000 - elapsedTime) / 1000),
    0
  );

  counter.textContent = secondsRemaining;

  if (secondsRemaining === 0) {
    isButtonEnabled = true;
    btn.removeAttribute("disabled");
  }

  if (secondsRemaining > 0) {
    // Lặp lại hàm giảm thời gian
    animationFrameId = window.requestAnimationFrame(decreaseCount);
  }
}

function getLink() {
  if (isButtonEnabled) {
    window.location.href =
      "https://serenaha12.github.io/fullstack_nodeJS/hoc_javascript/btvn_31/ex05/index.html";
  }
}

btn.addEventListener("click", getLink);

document.addEventListener("DOMContentLoaded", () => {
  // Gọi hàm giảm thời gian lần đầu
  decreaseCount(performance.now());

  // Bắt sự kiện visibilitychange (Hàm tham khảo)
  // Sự kiện visibilitychange để theo dõi sự thay đổi trong tình trạng nhìn thấy của trang web
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      // Trang đã trở thành không nhìn thấy
      // Hủy bỏ requestAnimationFrame để tạm dừng đồng hồ đếm
      window.cancelAnimationFrame(animationFrameId);
    } else if (document.visibilityState === "visible" && count > 0) {
      // Trang đã trở lại và đang nhìn thấy
      // Gọi lại hàm giảm thời gian nếu đếm vẫn còn
      decreaseCount(performance.now());
    }
  });
});
