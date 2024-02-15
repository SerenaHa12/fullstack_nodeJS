document.addEventListener("DOMContentLoaded", function () {
  var tabHeader = document.querySelector(".tab-header");
  var tabHeaderElements = tabHeader.querySelectorAll(".tab-header > div");
  var tabBody = document.querySelector(".tab-body");
  var tabBodyElements = tabBody.querySelectorAll(".tab-body > div");
  var authForm = document.getElementById("authForm");
  var authContainer = document.getElementById("authContainer");

  // Sự kiện ấn vào dòng chữ "Đăng nhập" trên header
  var headerRegister = document.querySelector(".header-register");
  headerRegister.addEventListener("click", function () {
    authForm.classList.remove("hidden");
    tabHeaderElements[0].classList.add("active");
    tabHeaderElements[1].classList.remove("active");
    tabBodyElements[0].classList.add("active");
    tabBodyElements[1].classList.remove("active");
  });

  // hide form
  var authOverlay = document.querySelector(".auth-overlay");
  authOverlay.addEventListener("click", function () {
    authForm.classList.add("hidden");
  });

  // Đăng ký sự kiện chuyển tab giữa "Đăng nhập" và "Đăng ký"
  for (var i = 0; i < tabHeaderElements.length; i++) {
    (function (index) {
      tabHeaderElements[index].addEventListener("click", function () {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderElements[index].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyElements[index].classList.add("active");
      });
    })(i);
  }
});
