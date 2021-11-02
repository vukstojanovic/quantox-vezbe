
const columns = document.querySelectorAll(".column");
const columnContainers = document.querySelectorAll(".column-container");

columnContainers.forEach(cc => {
    const input = cc.querySelector("input");
    const button = cc.querySelector("button");
    const column = cc.querySelector(".column");

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".js-dragging");
        const cardAfterDraggingCard = getCardAfterDraggingCard(column, e.clientY);
        if (cardAfterDraggingCard) {
            column.insertBefore(dragging, cardAfterDraggingCard);
        } else {
            column.appendChild(dragging);
        }
        // column.appendChild(dragging);
        // const columnTop = dragging.getBoundingClientRect().top;
        // console.log(e.clientY, columnTop);
    });

    button.addEventListener("click", () => {
        if (input.value) {
            const element = document.createElement("div");
            element.classList.add("element");
            element.textContent = input.value;
            element.draggable = true;

            element.addEventListener("dragstart", () => {
                element.classList.add("js-dragging");
            });

            element.addEventListener("dragend", () => {
                element.classList.remove("js-dragging");
            });

            column.appendChild(element);
            input.value = "";
        }
    });
});

function getCardAfterDraggingCard(list, yDraggingCard) {
    // 
}


















