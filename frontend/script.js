// ===============================
// 🎯 DESAFIO 7 (JS)
// ===============================
const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const tasksContainer = document.querySelector(".tasks");

let tasks = [];


// ===============================
// 🎯 DESAFIO 8 (addTask)
// ===============================
function addTask() {

    const text = input.value.trim();

    if (text === "") return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);

    input.value = "";

    renderTasks();
}


// ===============================
// 🎯 DESAFIO 9 (renderTasks)
// ===============================
function renderTasks() {

    tasksContainer.innerHTML = "";

    tasks.forEach(task => {

        const div = document.createElement("div");
        div.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            toggleTask(task.id);
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "X";

        btnRemove.addEventListener("click", () => {
            removeTask(task.id);
        });

        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(btnRemove);

        tasksContainer.appendChild(div);
    });

    updateStats();function renderTasks() {

    tasksContainer.innerHTML = "";

    tasks.forEach(task => {

        const div = document.createElement("div");
        div.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            toggleTask(task.id);
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "X";

        btnRemove.addEventListener("click", () => {
            removeTask(task.id);
        });

        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(btnRemove);

        tasksContainer.appendChild(div);
    });

    updateStats(); 
}
}

// ===============================
// 🎯 DESAFIO 10 (toggle)
// ===============================
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    renderTasks();
}


// ===============================
// 🎯 DESAFIO 11 (remove)
// ===============================
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}


// ===============================
// EVENTOS
// ===============================
btnAdd.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});