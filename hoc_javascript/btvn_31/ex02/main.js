/*
Tạo một component tên là image để hiển thị hình ảnh
Các thuộc tính:
- link
- width
-heigh
-style
*/

Component.create("image-tag", function () {
  var shadow = this.attachShadow({mode: "open"});
  var link = this.getAttribute("link");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var style = this.getAttribute("style");

  this.innerText = `Hello`;
  this.innerHTML = `<img src='${link}' width='${width}' height='${height}' style='${style}'></img>`;
});


Component.create('box-image', function () {
  var shadow = this.attachShadow({mode: "open"});
  var style = document.createElement("style");
  style.innerHTML = `
  .box-image {
    border: 1px solid red;
    padding: 10px;
  }`;
  this.append.style;
  this.innerHTML = `<div class="box-image">${this.innerHTML}</div>`;
});