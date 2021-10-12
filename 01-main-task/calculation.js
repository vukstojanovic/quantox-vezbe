
// variables

const $resultText = document.getElementById("result")
const $numbers = document.querySelectorAll(".num");
const $operations = document.querySelectorAll(".op");
const $equalBtn = document.getElementById("=");
const $delBtn = document.getElementById("del");
const $resetBtn = document.getElementById("reset");
const $decimalBtn = document.getElementById(".");

let currentResult = 0;
let currentNumber = '';
let currentValue = 0;
let currentOperation = "+";
let lastClicked;
let previousNumber;
let del = false;
let firstValue = 0;

$resultText.textContent = currentValue;

// event listeners

$numbers.forEach(number => {
    number.addEventListener("click", () => {
        del = true;

        if (lastClicked && (lastClicked.id === "=")) {
            currentValue = 0;
            currentOperation = "+";
        }

        currentNumber += number.id;
        $resultText.textContent = currentNumber.substring(0, 12);
        lastClicked = number;
    });
});

$operations.forEach(operation => {
    operation.addEventListener("click", () => {
        console.log(operation.id);
        del = false;
        // calculate(Number(currentNumber || previousNumber));
        if (currentNumber) {
            calculate(Number(currentNumber));
        }
        currentOperation = operation.id;
        // previousNumber = currentNumber;
        currentNumber = '';
        lastClicked = operation;
    });
});

$delBtn.addEventListener('click', () => {
    if (del) {
        currentNumber = currentNumber.substring(0, currentNumber.length - 1);
        currentNumber === "" ? $resultText.textContent = 0 : $resultText.textContent = currentNumber.substring(0, 12);
    }
});

$resetBtn.addEventListener('click', () => {
    currentValue = 0;
    currentOperation = '+';
    currentNumber = '';
    $resultText.textContent = currentValue.toString().substring(0, 12);
});

$decimalBtn.addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        if (currentNumber === "") {
            currentNumber += '0.';
        } else {
            currentNumber += '.';
        }
        $resultText.textContent = currentNumber.substring(0, 12);
    }
});

// functions

function adding(num) {
    currentValue += num;
    $resultText.textContent = currentValue.toString().substring(0, 12);
    
}

function subtracting(num) {
    currentValue = currentValue - num;
    $resultText.textContent = currentValue.toString().substring(0, 12);
}

function multiply(num) {
    currentValue = currentValue * num;
    $resultText.textContent = currentValue.toString().substring(0, 12);
}

function divide(num) {
    currentValue = currentValue / num;
    $resultText.textContent = currentValue.toString().substring(0, 12);
}

function calculate(number) {

    switch (currentOperation) {
        case "+":
            adding(number);
            break;
        case "-":
            subtracting(number);
            break;
        case "x":
            multiply(number);
            break;
        case "/":
            divide(number);
            break;
        default:
            $resultText.textContent = currentValue.toString().substring(0, 12); 
    }

}




