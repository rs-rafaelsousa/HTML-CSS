document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.querySelector('#inputs input');
    const addButton = document.querySelector('#inputs button');
    const tasksContainer = document.createElement("div");
    const clearButton = document.querySelector('#inputs button:last-of-type');

    document.getElementById('inputs').appendChild(tasksContainer);

    function addTask() {
        const taskText = inputElement.value.trim();
        
        if (taskText !== "") {
            const taskItem = document.createElement("p");
            taskItem.textContent = taskText;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.addEventListener("click", () => taskItem.remove());

            taskItem.appendChild(removeButton);
            tasksContainer.appendChild(taskItem);

            inputElement.value = "";
        }
    }

    addButton.addEventListener("click", addTask);
 
    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    clearButton.addEventListener("click", () => {
        tasksContainer.innerHTML = "";
    });
});
