export function deleteBtn(taskContainer){
        const cardDeleteBtn = taskContainer.querySelector(".delete");
        cardDeleteBtn.addEventListener("click", (e)=> {
            //pressing delete button gets access to the card clicked
            const cardClicked = e.target.parentElement.parentElement;
            cardClicked.remove();
        })
        console.log(cardDeleteBtn);
    }