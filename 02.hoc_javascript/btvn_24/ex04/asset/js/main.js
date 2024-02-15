var btnAddTask = document.querySelector("button");
var taskName = document.querySelector(".todo-input");

var tasks = getTasks();
addTask(tasks);

btnAddTask.addEventListener("click", function () {
  // blank input
  if (!taskName.value) {
    alert("Please enter task name!");
    return false;
  }

  var tasks = getTasks();
  tasks.push({ name: taskName.value });
  taskName.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTask(tasks);
});

// add task
function addTask(tasks = []) {
  var content = "<ul>";
  tasks.forEach((task, index) => {
    content += `
        <li>
            <div class="task-item">${task.name}</div>
            <a href="#" onclick="editTask(${index})">
                <i class="fa-solid fa-pen-to-square"></i>
            </a>
            <a href="#" onclick="deleteTask(${index})">
                <i class="fa-solid fa-trash"></i>
            </a>
        </li>
    `;
  });

  content += "</ul>";
  document.querySelector(".list-task").innerHTML = content;
}

// save in local storage
function getTasks() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}

// edit task
function editTask(index) {
  var tasks = getTasks();
  var taskItem = document.querySelectorAll(".task-item")[index];
  var updatedTask = prompt("Edit task:", tasks[index].name);

  if (updatedTask !== null) {
    tasks[index].name = updatedTask;
    taskItem.textContent = updatedTask; // Update the displayed task name
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

// delete task
function deleteTask(index) {
  if (confirm("Delete???")) {
    var tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTask(getTasks());
  }
}
