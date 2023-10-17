import '../styles/todoCard.css';
import { todoDialog, clearForm } from './dialog';
import { updateCardValues, addCardToDisplay } from './cardCreation';
export default class Todo{
    constructor(dueDate, description, priority){
        const allTasks = document.querySelectorAll(".task-container");
        this.title = `task${allTasks.length + 1}`;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }
    todoInputFields(){
        const todoBtn = document.querySelector(".todo-btn");
        //show the input fields after clicking add todo
        todoBtn.addEventListener("click", todoDialog);
    } 
    createTask(){        
        const modal = document.querySelector(".todo-dialog");
        const confirm = document.querySelector(".add-task");

        confirm.addEventListener("click", () => {
            addCardToDisplay(updateCardValues());
            modal.close();
            clearForm();
        })//event listener
    }
}