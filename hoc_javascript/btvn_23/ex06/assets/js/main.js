document.addEventListener("DOMContentLoaded", function() {
    var tabHeader = document.querySelector(".tab-header");
    var tabHeaderElements = tabHeader.querySelectorAll(".tab-header > div");
    var tabBody = document.querySelector(".tab-body");
    var tabBodyElements = tabBody.querySelectorAll(".tab-body > div");
  
    for (var i = 0; i < tabHeaderElements.length; i++) {
      (function(index) {
        tabHeaderElements[index].addEventListener("click", function() {
          tabHeader.querySelector(".active").classList.remove("active");
          tabHeaderElements[index].classList.add("active");
          tabBody.querySelector(".active").classList.remove("active");
          tabBodyElements[index].classList.add("active");
        });
      })(i);
    }
  });
  