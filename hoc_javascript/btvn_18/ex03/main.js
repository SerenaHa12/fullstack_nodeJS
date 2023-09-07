/**
 * Ý tưởng:
 * - Thêm mỗi chữ vào một thẻ span
 */

var content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic nam non, nostrum nihil impedit qui libero odit possimus. Ut";

// Bước 2: Thay thế tất cả các khoảng trống thành cặp thẻ span
content = content.replaceAll(" ", "</span> <span>");

// Bước 1: Thêm thẻ span
content = `<span class="highlight">${content}</span>`;

// Bước 3: Di chuyển class highlight xuống từng thẻ span
var index = 0;
setInterval(function () {
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);

  if (char === ">" && charNext !== " ") {
    var html =
      content.slice(0, index) + ` class="highlight"` + content.slice(index);
    console.log(html);
    // sử dụng kỹ thuật của DOM
    document.body.innerHTML = html;
  }

  index++;

  if (index === content.length) {
    index = 0;
  }
}, 50);

console.log(content);
document.write(content);
