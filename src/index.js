import input from './modules/todo.js';

const modal = document.querySelector(".todo-dialog");
window.addEventListener("click", e => e.target.matches("dialog") ? modal.close(): 0);
const t = new input();

t.todoInputFields();
t.createTask();
