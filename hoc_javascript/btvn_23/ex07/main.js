// document.addEventListener("DOMContentLoaded", function () {

//   var tabHeader = document
//     .getElementsByClassName("tab-header")[0]
//     .getElementsByTagName("div");
//   var tabBody = document.getElementsByClassName("tab-body");

//   for (var i = 0; i < tabHeader.length; i++) {
//     tabHeader[i].addEventListener("click", function () {
//       var activeTab = document.querySelector(".tab-header .active");
//       activeTab.classList.remove("active");
//       this.classList.add("active");

//       var index = Array.from(tabHeader).indexOf(this);
//       var activeTabBody = document.querySelector(".tab-content .active");
//       activeTabBody.classList.remove("active");
//       tabBody[index].classList.add("active");
//     });
//   }
// });

// // hide form
// var authOverlay = document.querySelector("form-overlay");
// authOverlay.addEventListener("click", function () {
//   authForm.classList.add("hidden");
// });

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
