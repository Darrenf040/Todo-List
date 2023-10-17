export function todoDialog(){
    const modal = document.querySelector(".todo-dialog");

    //hide the confirm edit button
    const confirmEdit = document.querySelector(".confirm-edit");
    confirmEdit.style.display = 'none';
    //show the add task confirm button
    const addTask = document.querySelector(".add-task");
    addTask.style.display = 'block';

    modal.showModal();
}
export function getInputValues(){
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
export function clearForm(){
    const form = document.getElementById("form");
    form.reset();
}