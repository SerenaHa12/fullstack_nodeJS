/**
 * DOM Nodes
 * =================================================================
 * 
    1. Hàm để check 
    - Sự kiện onload => Trang web được tải xong 
    (Tải xong tất cả tài nguyên: audio, image, video, etc).

    - DOM ContentLoaded

 * =================================================================
 * - Tình huống 1: Có 1 thẻ HTML ở sau thẻ <script>
 */
// var title = document.querySelector(".title");
// console.log(title);
// Tình huống này sẽ lỗi -> console.log ra null

// window.addEventListener("load", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

/**
 * DOM Nodes
 * =================================================================
 *
 * 2. Tạo Element Nodes
 *  - Dùng phương thức: document.createElement('tag)
 *  - Một node được tạo ra chỉ được dùng 1 lần
 *
 * =================================================================
 */

var root = document.querySelector("#root");

// bước 1: tạo ra đối tượng HTML
var h1 = document.createElement("h1");
h1.innerText = "Hello F8";
h1.classList.add("title");
console.log(h1);

// bước 2: render đối tượng lên giao diện UI
// Điều kiện: Phải có 1 element thật
root.appendChild(h1);

/*
Case: tạo ra 1 cặp ul li
*/
var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerText = "Item 1";
ul.appendChild(li);

var li = document.createElement("li");
li.innerText = "Item 2";
ul.appendChild(li);

var li = document.createElement("li");
li.innerText = "Item 3";
ul.appendChild(li);

var li = document.createElement("li");
li.innerText = "Item 4";
ul.appendChild(li);

root.append(ul);

// --------------------------------------------------------------

/**
 * <div id="div1">
      <p id="p1">This is a paragraph.</p>
      <p id="p2">This is another paragraph.</p>
    </div>
 */
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);

/**
 * Muốn thay đổi nội dung | thuộc tính của 1 Node
 */
h1.innerText = "Hello F88";

// --------------------------------------------------------------

/**
 * Ví dụ 1: Xây dựng ứng dụng Counter dùng DOM Nodes
 */
// var handleIncrease = function () {
//   console.log("ok");
//   h2Counter.innerText++;
// };

// var h2Counter = document.createElement("h2");
// h2Counter.innerText = "0";
// root.append(h2Counter);

// var btnIncrease = document.createElement("button");
// btnIncrease.innerText = "+";
// root.append(btnIncrease);
// btnIncrease.addEventListener("click", handleIncrease);

// --------------------------------------------------------------

/**
 * TextNode
 * Ví dụ 2: Trường hợp muốn thêm từ Count: trước số
 * Trong textnode k có innertext mà là data
 */
var handleIncrease = function () {
  countNumber.data++;

//   trường hợp muốn ấn đến 10 thì biến mất
  if (+countNumber.data === 10) {
    countNumber.remove();
  }
};

var h2Counter = document.createElement("h2");
h2Counter.innerText = "Count: ";
var countNumber = document.createTextNode(0);
h2Counter.append(countNumber);
root.append(h2Counter);

var btnIncrease = document.createElement("button");
btnIncrease.innerText = "+";
root.append(btnIncrease);
btnIncrease.addEventListener("click", handleIncrease);

// Thêm comment vào HTML
var counterComment = document.createComment('Counter App');
root.append(counterComment);

// Thêm 1 node mới vào một node khác
var h2Title = document.createElement("h2");
h2Title.innerText = "Counter App";
root.insertBefore(h2Title, h2Counter);

//------------------------------------------------------------------------

/**
 * Replacing HTML Elements 
 * To replace an element to the HTML DOM, use the replaceChild() method:
 */
var h2TitleNew = document.createElement('h2');
h2TitleNew.innerText = "Ứng dụng đếm";
root.replaceChild(h2TitleNew, h2Title)

//------------------------------------------------------------------------
