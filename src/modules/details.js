import '../styles/details.css';

export function detailsPopup(taskContainer){
    const detailsBtn = taskContainer.querySelector(".details");
    detailsBtn.addEventListener("click", () => {
        const dialog = document.querySelector(".details-dialog");
        dialog.showModal();
        //select the elements inside of the details popup menu 
        const titleElement = document.querySelector(".details-title");
        const descriptionElement = document.querySelector(".description-text");
        const priorityElement = document.querySelector(".details-priority");
        const dueDateElement = document.querySelector(".details-due-date");
        //values of the current task containers
        const title = taskContainer.dataset.title;
        const dueDate = taskContainer.dataset.dueDate;
        const description = taskContainer.dataset.description;
        const priority = taskContainer.dataset.priority;
        //add the values to the elements textContent
        titleElement.textContent = title;
        descriptionElement.textContent = description;
        priorityElement.textContent = `Priority ${priority}`;
        dueDateElement.textContent = dueDate;
        //popup border match the cards border color
        const popup = document.getElementById("entire-popup-container");
        popup.className = priority;
    })
}