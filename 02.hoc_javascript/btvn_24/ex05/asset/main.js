var todoForm = document.querySelector(".TodoForm");
var todoList = document.querySelector(".todo-list");

var todos = [];

var formUpdateIds = [];

var renderTodos = function () {
  var html = todos
    .map(function (todo, index) {
      var value = formUpdateIds.find(function (element) {
        return +element.index === +index;
      });

      if (value) {
        return `<form class="TodoForm"><input type="text" class="todo-input" placeholder="Update task" value="${value.name}"><button type="submit" class="todo-btn">Add Task</button></form>`;
      }

      return `<div class="Todo" data-index="${index}">
    <p data-type="completed" class="${
      todo.completed ? "completed" : ""
    }">${todo.name}</p>
    <div>
    <svg data-type="update" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
      </svg>
      <svg data-type="remove" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
      </svg></div>
  </div>`;
    })
    .join("");

  todoList.innerHTML = html;
};

var getTodoHtml = function (todo, index) {
  return `<div class="Todo" data-index="${index}">
    <p data-type="completed" class="${todo.completed ? "completed" : ""}">${
    todo.name
  }</p>
    <div>
    <svg data-type="update" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" class="svg-inline--fa fa-pen-to-square " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>
      </svg>
      <svg data-type="remove" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
      </svg></div>
  </div>`;
};

var handleRemove = function (index) {
  if (confirm("Bạn có chắc chắn?")) {
    todos.splice(index, 1);
    renderTodos();
  }
};

var handleCompleted = function (index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
};

var showFormUpdate = function (todoEl) {
  var index = todoEl.dataset.index;
  var todo = todos[index];

  var formUpdate = `<form class="TodoForm" data-index="${index}"><input type="text" class="todo-input" placeholder="Update task" value="${todo.name}"><button type="submit" class="todo-btn">Add Task</button></form>`;

  todoEl.outerHTML = formUpdate;

  var formList = todoList.querySelectorAll(".TodoForm");
  formList.forEach(function (todoForm) {
    if (todoForm.dataset.index === index) {
      var value = todoForm.querySelector(".todo-input").value;
      formUpdateIds.push({
        index: +index,
        name: value,
      });
      todoForm
        .querySelector(".todo-input")
        .addEventListener("change", function () {
          value = this.value;
          var indexUpdate = formUpdateIds.findIndex(function (element) {
            return +element.index === +index;
          });
          if (indexUpdate !== -1) {
            formUpdateIds[indexUpdate].name = value;
          }
        });

      todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        todos[index].name = value; //Cập nhật lại mảng
        todoForm.outerHTML = getTodoHtml(todos[index], index);
        formUpdateIds = formUpdateIds.filter(function (element) {
          return +element.index !== +index;
        });
      });
    }
  });
};

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var nameEl = this.querySelector(".todo-input");

  var doName = nameEl.value;

  if (!doName) {
    alert("Vui lòng nhập tên");
    return;
  }

  var todo = {
    name: doName,
    completed: false,
  };

  //   push todo vào mảng để hiển thị trên giao diện
  todos.push(todo);

  renderTodos();

  nameEl.value = "";
});

todoList.addEventListener("click", function (e) {
  var type;
  var todoEl;
  if (e.target.localName === "path") {
    type = e.target.parentElement.dataset.type;
    todoEl = e.target.parentElement.parentElement.parentElement;
  } else {
    type = e.target.dataset.type;
    todoEl = e.target.parentElement.parentElement;
  }

  var index = todoEl.dataset.index;

  if (type === "update") {
    showFormUpdate(todoEl);
  }

  if (type === "remove") {
    handleRemove(index);
  }

  if (type === "completed") {
    todoEl = e.target.parentElement;
    index = todoEl.dataset.index;
    handleCompleted(index);
  }
});
