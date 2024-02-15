var todo = document.querySelector(".todo");
var todoList = document.querySelector(".todo-list");
var todoForm = document.querySelector("form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.children[0];

  var doName = inputEl.value;

  if (!doName.length) {
    return;
  }

  //   todoList.innerHTML += `<p>${doName}</p>`;

  var removeDoName = function () {
    deBtn.parentElement.remove();
  };

  // chống xss
  // https://toidicodedao.com/2016/10/18/lo-hong-bao-mat-xss/
  var p = document.createElement("p");
  p.innerText = doName;
  console.log(doName);

  var deBtn = document.createElement("button");
  deBtn.innerText = "delete";
  p.appendChild(deBtn);
  deBtn.addEventListener("click", removeDoName);

  todoList.append(p);
  inputEl.value = "";
});

var content = document.querySelector(".content");
console.log(content.children);
console.log(content.childNodes);

// case 1: muốn thay đổi nguyên chữ Hello F8
content.childNodes[0].data = "hi";

var h2 = document.querySelector(".content h2");
console.log(h2.parentNode);

// Hàm tạo HTML Element
// -> Build ra component giống React
// Tác động vào HTML để định nghĩa ra 1 thẻ theo ý muốn của mình