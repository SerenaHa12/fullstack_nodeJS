var openLogin = document.querySelector(".open-login");
var modalAuth = document.querySelector(".modal-auth");
var modalOverlay = modalAuth.querySelector(".overlay");

var tabNavItems = modalAuth.querySelectorAll(".tab-nav a");

var loginForm = modalAuth.querySelector(".login-form");

var togglePassword = loginForm.querySelector(".show-password");

// Chức năng ấn Đăng nhập để hiện form đăng nhập
var closeModal = function () {
  modalAuth.classList.remove("show");
};

openLogin.addEventListener("click", function () {
  modalAuth.classList.add("show");
});

modalOverlay.addEventListener("click", closeModal);

var currentTab;

// chuyển tab
tabNavItems.forEach(function (navItem) {
  navItem.addEventListener("click", function (e) {
    e.preventDefault();
    var activeTab = modalAuth.querySelector(".tab-nav a.active");

    activeTab.classList.remove("active");
    this.classList.add("active");

    var hash = this.getAttribute("href");

    var tabPanel = modalAuth.querySelector(".tab-content .tab-panel" + hash);
    var tabPanelActive = modalAuth.querySelector(
      ".tab-content .tab-panel.active",
    );
    tabPanelActive.classList.remove("active");
    tabPanel.classList.add("active");

    //Reset các field
    if (currentTab) {
      if (hash !== currentTab) {
        var formGroupList = loginForm.querySelectorAll(".form-group");
        formGroupList.forEach(function (element) {
          element.classList.remove("has-error");
          element.querySelector(".error").innerText = "";
          element.querySelector(".field-item").value = "";
        });
        loginForm.querySelector(".msg").innerText = "";
        currentTab = hash;
      }
    } else {
      currentTab = hash;
    }
  });
});

var handleValidate = function (current) {
  var emailEl = current.querySelector(".email");
  var passwordEl = current.querySelector(".password");

  var email = emailEl.value;
  var password = passwordEl.value;

  var errors = {};

  if (!email.trim()) {
    errors.email = "Vui lòng nhập email";
  }

  if (!password.trim()) {
    errors.password = "Vui lòng nhập password";
  }

  //Chọn tất cả các form-group
  var formGroupList = loginForm.querySelectorAll(".form-group");
  formGroupList.forEach(function (element) {
    var fieldName = element.querySelector(".field-item").classList[1];
    element.classList.remove("has-error");
    element.querySelector(".error").innerText = "";

    if (errors[fieldName]) {
      element.classList.add("has-error");
      element.querySelector(".error").innerText = errors[fieldName];
    }
  });

  return errors;
};

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var errors = handleValidate(this);

  if (!Object.keys(errors).length) {
    loginForm.querySelector(".msg").innerText = `Đăng nhập thành công`;
  } else {
    loginForm.querySelector(".msg").innerText = ``;
  }
});

var fieldItemList = loginForm.querySelectorAll(".field-item");
fieldItemList.forEach(function (fieldItem) {
  fieldItem.addEventListener("input", function () {
    handleValidate(loginForm);
  });
});

togglePassword.addEventListener("click", function () {
  var password = loginForm.querySelector(".password");
  if (this.classList.contains("hide")) {
    password.type = "text";
    this.classList.remove("hide");
  } else {
    password.type = "password";
    this.classList.add("hide");
  }
});