// HTML Element

// Cách viết thông thường
// var title = document.querySelector(".title");
// var p = document.querySelector("p");

// var css = {
//   border: "1px solid red",
//   background: "yellow",
// };

// Object.assign(title.style, css);

// var changeCSS = function (element, style) {
//   Object.assign(element.style, style);
// };

// changeCSS(title, css);

// Cách viết giống DOM
HTMLElement.prototype.changeCSS = function (style) {
  Object.assign(this.style, style);
};
var title = document.querySelector(".title");
var p = document.querySelector("p");

title.changeCSS({
  border: "1px solid red",
  background: "yellow",
});
document.querySelector("p").changeCSS({
  color: red,
});

/**
 * Vanilla JS Carousel
 * https://codepen.io/ekeric13/pen/wKOwmg
 */
