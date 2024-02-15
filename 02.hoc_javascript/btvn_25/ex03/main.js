var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carousel.querySelector(".next");
var navPrev = carousel.querySelector(".prev");

// Bước 1: tính toán số lượng ảnh
var carouselItems = carouselInner.querySelectorAll(".item");

if (carouselItems.length) {
  // Xử lý
  // Lấy chiều rộng của 1 item
  var itemWidth = carouselInner.clientWidth;
  // Trả về chiều rộng của element

  // Tính tổng chiều rộng các item
  var totalWidth = itemWidth * carouselItems.length;

  // Cập nhập CSS cho carousel-inner
  carouselInner.style.width = `${totalWidth}px`;

  // Xử lý chuyến slide khi ấn vào nút next
  var position = 0;
  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth) {
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
  });

  navPrev.addEventListener("click", function () {
    if (position < 0) {
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
  });
}
