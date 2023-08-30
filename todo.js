// const addButton = document.getElementById("add");
// const taskList = document.getElementById("task-list");

// addButton.addEventListener("click", () => {
// const lineAddDiv = document.querySelector(".line_add");
// const clonedLineAddDiv = lineAddDiv.cloneNode(true);

// taskList.appendChild(clonedLineAddDiv);
// });


//  const addButton = document.getElementById("add");
//  const taskListContainer = document.querySelector(".task-list-container");

//  addButton.addEventListener("click", () => { const lineAddDiv = document.querySelector(".line_add");
//  const newLineAddDiv = lineAddDiv.cloneNode(true);


//  taskInput.value = "";

//  const addButton = newLineAddDiv.querySelector(".add-button");
//  addButton.addEventListener("click", () => {
//      const taskList = newLineAddDiv.querySelector(".task-list");
//      const taskText = taskInput.value.trim();

//      if (taskText !== "") {
//      const newTaskItem = document.createElement("div");
//      newTaskItem.textContent = taskText;
//      taskList.appendChild(newTaskItem);
//      taskInput.value = "";
//      }
//  });

//  taskListContainer.appendChild(newLineAddDiv);
//  });


const addButton = document.getElementById("add");
const deleteButton = document.querySelector(".delete-button");
const taskListContainer = document.querySelector(".task-list-container");

addButton.addEventListener("click", () => {
    const lineAddDiv = document.querySelector(".line_add");   const newLineAddDiv = lineAddDiv.cloneNode(true);

    // Temizleme işlemi
    const taskInput = newLineAddDiv.querySelector("#task-input");
    taskInput.value = "";

    // Add düğmesinin click olayını değiştirme
    const addTaskButton = newLineAddDiv.querySelector(".add-button");
    addTaskButton.addEventListener("click", () => {
        const taskList = newLineAddDiv.querySelector(".task-list");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
        const newTaskItem = document.createElement("div");
        newTaskItem.textContent = taskText;
        taskList.appendChild(newTaskItem);
        taskInput.value = "";
        }
    });
    
    taskListContainer.appendChild(newLineAddDiv);

    deleteButton.addEventListener("click", () => {
        const taskList = document.querySelector(".task-list");
        taskList.innerHTML = ""; // Clear the task list content
    });
});

