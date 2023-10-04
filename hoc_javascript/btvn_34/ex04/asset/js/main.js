document.addEventListener("DOMContentLoaded", async function () {
  const searchBtn = document.querySelector(".sreachBtn");
  const addBtn = document.querySelector(".addBtn");
  const addTask = document.querySelector(".add-task");
  const appTask = document.querySelector(".app-task");
  const saveBtn = document.querySelector(".saveBtn");
  const cancelBtn = document.querySelector(".cancelBtn");
  const addTaskOverlay = document.querySelector(".add-task_overlay");

  const apiUrl = "https://q9z2qj-3000.csb.app/task";

  const getTasks = async () => {
    const response = await fetch(apiUrl);
    console.log(response);
    const tasks = await response.json();

    appTask.innerHTML = "";

    tasks.forEach(({ title, id }) => {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");

      const taskTitle = document.createElement("p");
      taskTitle.textContent = title;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => editTask(id));

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTask(id));

      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.addEventListener("click", () => completeTask(id));

      taskItem.appendChild(taskTitle);
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(completeButton);

      appTask.appendChild(taskItem);
    });
  };
  getTasks();

  // edit task
  const editTask = async (taskId) => {
    const newTitle = prompt("Enter a new title for the task:");
    if (newTitle !== null && newTitle.trim() !== "") {
      try {
        await fetch(`${apiUrl}/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newTitle }),
        });

        // refresh task list
        getTasks();
      } catch (error) {
        console.error("Error editing task:", error);
      }
    }
  };

  // delete task
  const deleteTask = async (taskId) => {
    if (confirm("Are you sure you want to delete this task?")) {
      try {
        await fetch(`${apiUrl}/${taskId}`, {
          method: "DELETE",
        });
        getTasks();
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  // complete task
  const completeTask = async (taskId) => {
    try {
      await fetch(`${apiUrl}/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true }),
      });

      // Refresh the task list
      getTasks();
    } catch (error) {
      console.error("Error marking task as complete:", error);
    }
  };

  //   add task
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (addTask.style.display === "none") {
      addTask.style.display = "block";
      addTaskOverlay.style.display = "block";
    } else {
      addTask.style.display = "none";
      addTaskOverlay.style.display = "none";
    }
  });

  cancelBtn.addEventListener("click", () => {
    addTask.style.display = "none";
    addTaskOverlay.style.display = "none";
  });

  //   save task
});
