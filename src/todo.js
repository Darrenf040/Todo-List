export default class Todo{
    todoInputFields(){
        const todoBtn = document.querySelector(".todo-btn");
        //show the input fields after clicking add todo
        todoBtn.addEventListener("click", todoDialog);
    }
    createTask(){        
        const confirm = document.querySelector(".add-task");
        //when user hits confirm do these actions 
        confirm.addEventListener("click", () => {
            const modal = document.querySelector(".todo-dialog");
            //close the dialog
            modal.close();
            //save the input values
            const inputValues = getInputValues();
            //create task ui
            taskCard();
        })
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
function taskCard(){
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container")

    taskContainer.innerHTML = `<div>
    <h1 class="todo-title"></h1>
</div>
<div class="todo-container-btns">
    <div>
        <p class="due-date"></p>
    </div>
    <button type="button">Details</button>
    <input type="checkbox">
</div>`;
const content = document.querySelector(".content");
content.append(taskContainer);
}