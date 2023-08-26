var btnAddTask = document.querySelector("button");
var taskName = document.querySelector(".todo-input");

btnAddTask.addEventListener("click", function () {
  if (!taskName.value) {
    alert("Please enter task name!");
    return false;
  }

  var tasks = [];
  tasks.push({
    name: taskName.value,
  });

  //   console.log(tasks);
  taskName.value = "";
  addTask(tasks);
});

function addTask(tasks = []) {
  var content = "<ul>";
  tasks.forEach((task) => {
    // console.log(task)
    content += `
        <li>
            <div class="task-item">${task.name}</div>
            <a href="#">
                <i class="fa-solid fa-pen-to-square"></i>
            </a>
            <a href="#">
                <i class="fa-solid fa-trash"></i>
            </a>
        </li>
    
    `;

    content += '</ul>';
    document.querySelector('.list-task').innerHTML = content;
  });
}
