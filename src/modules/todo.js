import '../styles/todoCard.css';
import editIcon from '../assets/images/edit.svg';

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
            taskCard(updateCardValues());
            modal.close();
        })//event listener
    }
}
function todoDialog(){
    const modal = document.querySelector(".todo-dialog");
    modal.show();
}
function getInputValues(){
    let inputVals = [];
    //select every input element and get their value
    const titleVal = document.getElementById("title").value;
    const dateVal = document.getElementById("date").value;
    const descriptionVal = document.getElementById("description").value;
    const priorityVal = document.getElementById("priority").value;

    //add the input values to an array
    inputVals.push(titleVal,dateVal,descriptionVal,priorityVal);

    return inputVals;
}
function taskContainer(){
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
return taskContainer;
}
function updateCardValues(){
    const task = taskContainer();
    //save user input values 
    const input = getInputValues();
    const title = input[0];
    const date = input[1];
    // const description = input[2];
    const priority = input[3];

    const titleElement =  task.querySelector('.todo-title');
    //when user doesnt type a title, set a default name using
    //class constructor value
    if(title == ''){
        const t = new Todo();
        titleElement.textContent = t.title;
    }
    else{
        //change card title to user inputed value
        titleElement.textContent = title;
    }

    //change the card text content with the user input values
    const dateElement = task.querySelector(".due-date");
    dateElement.textContent = date;
    task.classList.add(priority);

    return task;
}
function taskCard(currentTaskContent){
    const content = document.querySelector(".content");
    content.append(currentTaskContent);
}

