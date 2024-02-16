const tasks = [];

function addTask() {
  const title = document.getElementById("task-title").value;
  const deadline = document.getElementById("task-deadline").value;
  const priority = document.getElementById("task-priority").value;
  const labels = document.getElementById("task-labels").value.split(",");

  const newTask = {
    title,
    deadline,
    priority,
    labels,
    status: "Incomplete",
  };

  tasks.push(newTask);
  displayTasks();
  clearForm();
}

function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
            <p>${task.title} - Deadline: ${task.deadline} - Priority: ${task.priority} - Status: ${task.status}</p>
            <button onclick="markAsComplete(${index})">Mark as Complete</button>
        `;

    taskList.appendChild(taskItem);
  });
}

function markAsComplete(index) {
  tasks[index].status = "Complete";
  displayTasks();
}

function clearForm() {
  document.getElementById("task-title").value = "";
  document.getElementById("task-deadline").value = "";
  document.getElementById("task-priority").value = "High";
  document.getElementById("task-labels").value = "";
}

// Initial display
displayTasks();
