// variables

const $columnContainers = document.querySelectorAll(".column-container");

// event listeners

$columnContainers.forEach((cc, index) => {
    const $input = cc.querySelector("input");
    const $button = cc.querySelector("button");
    const $column = cc.querySelector(".column");
    if (localStorage.getItem(index)) {
        const textArray = JSON.parse(localStorage.getItem(index));
        textArray.forEach(text => {
            setNewElement(text, index, $column);
        });
    }

    $column.addEventListener("dragover", (e) => {
        e.preventDefault();
        const $dragging = document.querySelector(".js-dragging");
        const cardAfterDraggingCard = getCardAfterDraggingCard($column, e.clientY);
        if (cardAfterDraggingCard) {
            $column.insertBefore($dragging, cardAfterDraggingCard);
        } else {
            $column.appendChild($dragging);
        }
    });

    $button.addEventListener("click", () => {
        if ($input.value) {
            setNewElement($input.value, index, $column);
            updateLocalStorage(index, $column);
            $input.value = "";
        }
    });
});

// functions

function getCardAfterDraggingCard(list, yDraggingCard) {
    const listCards = [...list.querySelectorAll(".element:not(.js-dragging)")];
    const offsets = listCards.map(card => {
        const rect = card.getBoundingClientRect();
        const offset = (rect.top + (rect.height / 2));
        return offset;
    });
    let current;
    for (let i = 0; i <= offsets.length; i++) {
        if (yDraggingCard <= offsets[i]) {
            current = listCards[i];
            break;
        }
    }
    return current;
}

function updateLocalStorage(index, column) {
    const allElements = [...column.querySelectorAll(".element")];
    const allText = allElements.map(el => el.textContent);
    localStorage.setItem(index, JSON.stringify(allText));
}

function setNewElement(inputText, index, column) {
    const $element = document.createElement("div");
    $element.classList.add("element");
    $element.textContent = inputText;
    $element.draggable = true;

    const $deleteIcon = document.createElement("div");
    $deleteIcon.innerHTML = `<i class="far fa-times-circle"></i>`;
    $deleteIcon.addEventListener("click", () => {
        $element.remove();
        updateLocalStorage(index, column);
    });
    $element.appendChild($deleteIcon);

    $element.addEventListener("dragstart", () => {
        $element.classList.add("js-dragging");
    });

    $element.addEventListener("dragend", () => {
        $element.classList.remove("js-dragging");
        document.querySelectorAll(".column").forEach((c, i) => {
            updateLocalStorage(i, c);
        });
    });

    column.appendChild($element);
}














