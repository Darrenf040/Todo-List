import editIcon from '../assets/images/edit.svg';
import { getInputValues } from './dialog';
import Todo from './todo.js';
import { editButton } from './edit';
import { detailsPopup } from './details';
import { deleteBtn } from './delete';

export function taskContainer(){
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container")

    taskContainer.innerHTML = `<div>
        <h1 class="todo-title"></h1>
    </div>
    <div class="edit-container"><img src="${editIcon}" class="edit-image"></div>
    <div class="todo-container-btns">
        <div>
            <p class="due-date"></p>
        </div>
        <button type="button" class="details">Details</button>
        <button type="button" class="delete">Delete</button>
        <input type="checkbox">
    </div>`;

    //adds event listenr to edit button to set 
    //form values based on the current task
    editButton(taskContainer);
    detailsPopup(taskContainer);
    deleteBtn(taskContainer);

    return taskContainer;
}
export function updateCardValues(){
    const task = taskContainer();
    //save user input values 
    const input = getInputValues();
    let title = input[0];
    const date = input[1];
    const description = input[2];
    const priority = input[3];

    const titleElement =  task.querySelector('.todo-title');
    //when user doesnt type a title, set a default name using
    //class constructor value
    if(title == ''){
        const t = new Todo();
        title = t.title;
        titleElement.textContent = title;
    }
    else{
        //change card title to user inputed value
        titleElement.textContent = title;
    }

    //change the card text content with the user input values
    const dateElement = task.querySelector(".due-date");
    dateElement.textContent = date;
    task.classList.add(priority);

    task.setAttribute("data-title", title);
    task.setAttribute("data-due-date", date);
    task.setAttribute("data-description", description);
    task.setAttribute("data-priority", priority);

    return task;
}
export function addCardToDisplay(currentTaskContent){
    const currentProject = document.querySelector(".project.active");
    currentProject.append(currentTaskContent);
}