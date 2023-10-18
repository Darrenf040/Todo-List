import input from './modules/todo.js';

window.addEventListener("click", e => {
    //closes any popup when user clicks outside of it
    if(e.target.matches("dialog")){
        const modals = document.querySelectorAll("dialog");
        modals.forEach(modal => {
            modal.close();
        })
        const form = document.getElementById("form");
        form.reset();    
    }
});
const t = new input();

t.todoInputFields();
t.createTask();