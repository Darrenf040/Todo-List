import input from './modules/todo.js';

window.addEventListener("click", e => {
    //closes popup when user clicks outside of it
    if(e.target.matches("dialog")){
        const modal = document.querySelector(".todo-dialog");
        modal.close();
        const form = document.getElementById("form");
        form.reset();    
    }
});
const t = new input();

t.todoInputFields();
t.createTask();
