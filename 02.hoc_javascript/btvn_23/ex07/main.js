document.addEventListener("DOMContentLoaded", function () {
  var tabHeader = document
    .getElementsByClassName("tab-header")[0]
    .getElementsByTagName("div");
  var tabBody = document.getElementsByClassName("tab-body");

  for (var i = 0; i < tabHeader.length; i++) {
    tabHeader[i].addEventListener("click", function () {
      var activeTab = document.querySelector(".tab-header .active");
      activeTab.classList.remove("active");
      this.classList.add("active");

      var index = Array.from(tabHeader).indexOf(this);
      var activeTabBody = document.querySelector(".tab-content .active");
      activeTabBody.classList.remove("active");
      tabBody[index].classList.add("active");
    });
  }

  var authOverlay = document.querySelector(".form-overlay");
  authOverlay.addEventListener("click", function () {
    var authForm = document.getElementById("authForm");
    authForm.classList.add("hidden");
  });

  var headerRegister = document.querySelector(".header-register");
  headerRegister.addEventListener("click", function () {
    var authForm = document.getElementById("authForm");
    authForm.classList.remove("hidden");
  });
});

// validate form
var email = document.getElementById("email");
var password = document.getElementById("password");

email.addEventListener("input", () => {
  var emailBox = document.querySelector(".emailBox");
  var emailError = document.querySelector(".email-error");
  var emailPattern = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$";

  if (email.value.match(emailPattern)) {
    emailBox.classList.add("valid");
    emailBox.classList.remove("invalid");
    emailError.innerHTML = "Valid email address";
  } else {
    emailBox.classList.add("invalid");
    emailBox.classList.remove("valid");
    emailError.innerHTML = "* Please enter a valid email address";
  }
});

password.addEventListener("input", () => {
  var passBox = document.querySelector(".passBox");
  var passError = document.querySelector(".password-error");
  var passPattern =
    /^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|\[-`|{-~]).+$/;

  if (password.value.match(passPattern)) {
    passBox.classList.add("valid");
    passBox.classList.remove("invalid");
    passError.innerHTML = "Valid email address";
  } else {
    passBox.classList.add("invalid");
    passBox.classList.remove("valid");
    passError.innerHTML = "* Please enter a valid email address";
  }
});

