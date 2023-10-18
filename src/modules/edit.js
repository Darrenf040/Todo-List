import { getInputValues } from "./dialog";

let currentInputVals;
export function editButton(taskContainer){
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
        //use the current task data just set and save it as 
        //the current input values
        currentInputVals = getInputValues();
    })
}

    const confirmEdit = document.querySelector(".confirm-edit");
    confirmEdit.addEventListener("click", () => {
        const curentTaskTitle = currentInputVals[0];
        //select the current task container by getting its title data
        const currentTask = document.querySelector(`[data-title="${curentTaskTitle}"]`);
        //save the new input values
        const confirmEditInputVals = getInputValues();
        const updatedTitle = confirmEditInputVals[0];
        const updatedDate = confirmEditInputVals[1];
        const updatedDescription = confirmEditInputVals[2];
        const updatedPriority = confirmEditInputVals[3];
        //update the current task text contents
        const currentTitleElement = currentTask.querySelector(".todo-title");
        currentTitleElement.textContent = updatedTitle;
        const currentDateElement = currentTask.querySelector(".due-date");
        currentDateElement.textContent = updatedDate;
        //remove the previous priority class name
        currentTask.classList.remove(currentInputVals[3]);
        //update the class name with the new priority
        currentTask.classList.add(updatedPriority);
        //update the task containers data
        currentTask.setAttribute('data-title', updatedTitle);
        currentTask.setAttribute('data-due-date', updatedDate);
        currentTask.setAttribute('data-description', updatedDescription);
        currentTask.setAttribute('data-priority', updatedPriority);
        
        const modal = document.querySelector(".todo-dialog");
        modal.close();
    })