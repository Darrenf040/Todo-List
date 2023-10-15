export default class Todo{
    constructor(){
        const allTasks = document.querySelectorAll(".task-container");
        this.title = `task${allTasks.length + 1}`;
        this.priority = 'low';
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
        //save the input values on click
        const inputValues = getInputValues();
            console.log(inputValues);
            if(inputValues[0] == ''){
                //create default for task card if user doesnt input title
                const t = new Todo();
                console.log(t);
                modal.close();
                taskCard();
            }
            else{
                //close the dialog
                modal.close();
                //create task ui
                taskCard();    
            }
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