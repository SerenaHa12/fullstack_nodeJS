var slideContainer = document.querySelector(".slider .slide-container");
var slides = document.querySelectorAll('.slide');

var nextBtn = document.querySelector('.next-btn');
var prevBtn = document.querySelector('.prev-btn');
var slideIcons = document.querySelectorAll('.slide-icon');
var numberOfSlides = slides.length;
var slideNumber = 0;

// next btn
nextBtn.addEventListener("click", function() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

})


// prev btn
prevBtn.addEventListener("click", function() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })

    slideNumber--;

    if(slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

})

