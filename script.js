// Get DOM elements
const taskInput = document.getElementById("taskInput");
const descriptionInput = document.getElementById("descriptionInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

// Adding to pending list
function addTaskToList(taskName, taskDescription) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";
  const taskDesc = taskDescription ? ` - ${taskDescription}` : "";
  listItem.innerHTML = `
    <div>
      <h6>${taskName}${taskDesc}</h6>
    </div>
    <div>
      <button type="button" class="btn btn-sm btn-success mr-2 complete-task-btn">Complete</button>
      <button type="button" class="btn btn-sm btn-danger delete-task-btn">Delete</button>
    </div>
  `;
  pendingList.appendChild(listItem);
}

// Add task on submit
addTaskBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const taskName = taskInput.value;
  const taskDescription = descriptionInput.value;
  if (taskName.trim() !== "") {
    addTaskToList(taskName, taskDescription);
    taskInput.value = "";
    descriptionInput.value = "";
  }
});

// Delete task from pending list
pendingList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-task-btn")) {
    event.target.closest("li").remove();
  }
});

// Move task to completed list
pendingList.addEventListener("click", function(event) {
  if (event.target.classList.contains("complete-task-btn")) {
    const listItem = event.target.closest("li");
    completedList.appendChild(listItem);
    event.target.remove();
  }
});

// Delete task from completed list
completedList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-task-btn")) {
    event.target.closest("li").remove();
  }
});
