import editIcon from '../assets/images/edit.svg';
import { getInputValues } from './dialog';
import Todo from './todo.js';

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
        <input type="checkbox">
    </div>`;

    const detailsBtn = taskContainer.querySelector(".details");
    detailsBtn.addEventListener("click", () => {
        console.log("hi");
    });
    const editBtn = taskContainer.querySelector(".edit-image");
    editBtn.addEventListener("click", (e) => {
        const modal = document.querySelector(".todo-dialog");
        modal.showModal();
        //hide the add task confirm button
        const addTask = document.querySelector(".add-task");
        addTask.style.display = 'none';
        //show the confirm edit button
        const confirmEdit = document.querySelector(".confirm-edit");
        confirmEdit.style.display = "block";
        //select the current taskContainer from the 
        //edit button that was clicked parent
        const currentTask = e.target.parentElement.parentElement;
        //set the form input values to the current task data
        const title = document.getElementById("title");
        title.value = currentTask.dataset.title;
        const date = document.getElementById("date");
        date.value = currentTask.dataset.dueDate;
        const description = document.getElementById("description");
        description.value = currentTask.dataset.description;
        const priority = document.getElementById("priority");
        priority.value = currentTask.dataset.priority;
    })

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
    const content = document.querySelector(".content");
    content.append(currentTaskContent);
}

