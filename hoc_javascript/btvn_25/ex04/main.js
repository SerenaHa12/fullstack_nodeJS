// carousel
var slideIndex = 1;
showSlide(slideIndex);

// change slide
function changeSlide(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  //   check if n > slide's number, khởi tạo lại
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var mouseStartX = 0;
var mouseEndX = 0;

var slideContainer = document.querySelector(".slide-container");

slideContainer.addEventListener("mousedown", handleMouseDown);
slideContainer.addEventListener("mousemove", handleMouseMove);
slideContainer.addEventListener("mouseup", handleMouseUp);

function handleMouseDown(event) {
  mouseStartX = event.clientX;
}

function handleMouseMove(event) {
  if (mouseStartX === 0) {
    return;
  }

  mouseEndX = event.clientX;
}

function handleMouseUp() {
  if (mouseEndX - mouseStartX > 50) {
    changeSlide(-1);
  } else if (mouseEndX - mouseStartX < -50) {
    changeSlide(1);
  }

  // Đặt lại vị trí x chuột
  mouseStartX = mouseEndX = 0;
}
