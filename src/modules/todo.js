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

        //when user hits confirm do these actions 
        confirm.addEventListener("click", () => {
            //save the input values after submit
            const inputValues = getInputValues();
            const title = inputValues[0];
            const date = inputValues[1];
            const description = inputValues[2]
            const priority = inputValues[3];

            //create instances of the task container after each submit
            this.cardContainer = taskContainer(); 
            //elements of the new container instance
            const titleElement = this.cardContainer.querySelector(".todo-title");
            const dateElement = this.cardContainer.querySelector(".due-date");
            
            //create an instances of the class
            const t = new Todo(date,description,priority);
            //add priority name as the class name for css styling
            this.cardContainer.classList.add(t.priority);

            //returns true when user doesnt enter a title name
            if(title == ''){ 
                modal.close();
                //set default title name using constructor default value
                titleElement.textContent = t.title;
                dateElement.textContent = t.dueDate;
                taskCard(this.cardContainer);
            }
            else{
                modal.close();
                //overite default title value with user input title
                t.title = title;

                //change the elements text for each instance using 
                //'t' class instance property values 
                titleElement.textContent = t.title;
                dateElement.textContent = t.dueDate;
                taskCard(this.cardContainer);
            }
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
    <button type="button">Details</button>
    <input type="checkbox">
</div>`;
return taskContainer;
}
function taskCard(currentTaskContent){
    const content = document.querySelector(".content");
    content.append(currentTaskContent);
}