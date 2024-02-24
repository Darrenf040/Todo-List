import '../styles/todoCard.css';
import { todoDialog, clearForm, getInputValues } from './dialog';
import { updateCardValues, addCardToDisplay } from './cardCreation';
import { projects } from './projects';
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
            const currentTask = updateCardValues();
            addCardToDisplay(currentTask);
            projects.project1.push(currentTask);
            modal.close();
            clearForm("form-todo");

        })//event listener
    }
}
