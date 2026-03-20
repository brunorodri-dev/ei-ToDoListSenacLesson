// ===============================
// 🎯 DESAFIO 7 (JS)
// 👉 Selecionar elementos do DOM
// ===============================
const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const tasksContainer = document.querySelector(".tasks");

// ===============================
// ESTADO
// ===============================
let tasks = [];


// ===============================
// 🎯 DESAFIO 8 (JS)
// 👉 Criar função addTask()
// ===============================
function addTask() {

    // 1. pegar valor do input

    // 2. validar vazio

    // 3. criar objeto tarefa
    // dica: { id, text, completed }

    // 4. adicionar no array

    // 5. limpar input

    // 6. chamar renderTasks()
}


// ===============================
// 🎯 DESAFIO 9 (JS)
// 👉 Renderizar tarefas
// ===============================
function renderTasks() {

    // limpar container

    // percorrer tasks

    // criar elemento div

    // adicionar checkbox + texto

    // adicionar no DOM
}


// ===============================
// 🎯 DESAFIO 10 (JS)
// 👉 Marcar como concluída
// ===============================
// Dica: usar addEventListener("change")


// ===============================
// 🎯 DESAFIO 11 (JS)
// 👉 Remover tarefa
// ===============================
// Dica: usar filter()


// ===============================
// EVENTOS
// ===============================
btnAdd.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});