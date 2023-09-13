// Scroll Event
window.addEventListener("scroll", function () {
  console.log("Scrolling...");
});

// Scroll End
window.addEventListener("scrollend", function () {
  console.log("End Scrolling");
});

// Scroll Start
window.addEventListener("scrollstart", function () {
  console.log("Start Scrolling");
});

/**
 * window.scrollY => lấy tọa độ của vị trí scroll so với top
 * window.scrollX => lấy tọa độ của vị trí scroll so với left
 * window.scroll(X.Y) => thiết lập vị trí theo trục X, Y
 */

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  window.scroll(0, 300);
});

// Bài tập 1: xây dựng chức năng Back to top

// ấn hiện nút scroll sau tọa độ Y = 60
var backBtn = document.querySelector(".back");
window.addEventListener("scroll", function () {
  var position = this.window.scrollY;
  if (position >= 60) {
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
});

// chức năng back to top
backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  // window.scroll(0, 0);
  scrollTo(0);
});

var scrollTo = function (position) {
  console.log(window.scrollY);
  var currentScrollY = window.scrollY;
  var id = setInterval(function () {
    currentScrollY -= 50;
    window.scroll(0, currentScrollY);
    console.log(currentScrollY);
    if (currentScrollY < 0) {
        clearInterval(id);
    }
  }, 20);
};
