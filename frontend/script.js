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

    updateStats(); // 🔥 AQUI
}