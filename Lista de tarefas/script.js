document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.querySelector('#inputs input');
    const addButton = document.querySelector('#inputs button');
    const tasksContainer = document.createElement("div");
    const clearButton = document.querySelector('#inputs button:last-of-type');

    document.getElementById('inputs').appendChild(tasksContainer);

    // Carregar tarefas do localStorage ao carregar a página
    const loadTasks = () => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(task => {
            const taskItem = document.createElement("div");

            const taskDescription = document.createElement("p");
            taskDescription.textContent = task.text;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.addEventListener("click", () => {
                taskItem.remove();
                removeTaskFromLocalStorage(task.id);
            });

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(removeButton);
            tasksContainer.appendChild(taskItem);
        });
    };

    // Salvar tarefa no localStorage
    const saveTaskToLocalStorage = (task) => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    };

    // Remover tarefa do localStorage
    const removeTaskFromLocalStorage = (taskId) => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = savedTasks.filter(task => task.id !== taskId);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    function addTask() {
        const taskText = inputElement.value.trim();
        
        if (taskText !== "") {
            const taskId = new Date().getTime(); // Criando um ID único para cada tarefa

            const taskItem = document.createElement("div");

            const taskDescription = document.createElement("p");
            taskDescription.textContent = taskText;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.addEventListener("click", () => {
                taskItem.remove();
                removeTaskFromLocalStorage(taskId);
            });

            taskItem.appendChild(taskDescription);
            taskItem.appendChild(removeButton);
            tasksContainer.appendChild(taskItem);

            // Salvar a tarefa no localStorage
            const task = { id: taskId, text: taskText };
            saveTaskToLocalStorage(task);

            inputElement.value = ""; // Limpar o input
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
        localStorage.removeItem("tasks"); // Limpar o localStorage
    });

    // Carregar as tarefas ao carregar a página
    loadTasks();
});
