

const $btnTheme = document.querySelector(".btn-theme");
const $main = document.querySelector("main");
const $header = document.querySelector("header");
const $switcher = document.querySelector(".switcher");
const $reasultArea = document.querySelector(".result-area");
const $buttons = document.querySelector(".buttons");
const $btnsRegular = document.querySelectorAll(".btn-regular");
const $btnDel = document.querySelector(".btn-del");
const $btnReset = document.querySelector(".btn-reset");
const $btnEquals = document.querySelector(".btn-equals");

let currentThemeIndex = 0;
let themesArray = ["none", "js-second", "js-third"];

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

$btnTheme.addEventListener("click", () => {

    currentThemeIndex++;

    if (currentThemeIndex >= themesArray.length) {
        currentThemeIndex = 0;
    }

    console.log($main);

    themesArray.forEach(theme => {
        $btnTheme.classList.remove(theme);
        $main.classList.remove(theme);
        $header.classList.remove(theme);
        $switcher.classList.remove(theme);
        $reasultArea.classList.remove(theme);
        $buttons.classList.remove(theme);
        $btnsRegular.forEach(btn => btn.classList.remove(theme));
        $btnDel.classList.remove(theme);
        $btnReset.classList.remove(theme);
        $btnEquals.classList.remove(theme);
    });

    $btnTheme.classList.add(themesArray[currentThemeIndex]);
    $main.classList.add(themesArray[currentThemeIndex]);
    $header.classList.add(themesArray[currentThemeIndex]);
    $switcher.classList.add(themesArray[currentThemeIndex]);
    $reasultArea.classList.add(themesArray[currentThemeIndex]);
    $buttons.classList.add(themesArray[currentThemeIndex]);
    $btnsRegular.forEach(btn => btn.classList.add(themesArray[currentThemeIndex]));
    $btnDel.classList.add(themesArray[currentThemeIndex]);
    $btnReset.classList.add(themesArray[currentThemeIndex]);
    $btnEquals.classList.add(themesArray[currentThemeIndex]);

    $btnTheme.style.transform = `translateX(${currentThemeIndex * 135}%)`

});

$resultText.textContent = currentValue;

function adding(num) {
    currentValue += num;
    console.log(currentValue);
    $resultText.textContent = currentValue;
    
}

function subtracting(num) {
    currentValue = currentValue - num;
    console.log(currentValue);
    $resultText.textContent = currentValue;
}

function multiply(num) {
    currentValue = currentValue * num;
    console.log(currentValue);
    $resultText.textContent = currentValue;
}

function divide(num) {
    currentValue = currentValue / num;
    console.log(currentValue);
    $resultText.textContent = currentValue;
}

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
        calculate(Number(currentNumber || previousNumber));
        currentOperation = operation.id;
        previousNumber = currentNumber;
        currentNumber = '';
        lastClicked = operation;
    });
});

$delBtn.addEventListener('click', () => {
    if (del) {
        currentNumber = currentNumber.substring(0, currentNumber.length - 1);
        currentNumber === "" ? $resultText.textContent = 0 : $resultText.textContent = currentNumber;
    }
});

$resetBtn.addEventListener('click', () => {
    currentValue = 0;
    currentOperation = '+';
    $resultText.textContent = currentValue;
});

$decimalBtn.addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        if (currentNumber === "") {
            currentNumber += '0.';
        } else {
            currentNumber += '.';
        }
        $resultText.textContent = currentNumber;
    }
});

function calculate(number) {

    console.log(number);

    if (currentOperation === "+") {
        console.log("adding is taking place");
        adding(number);
    } else if (currentOperation === "-") {
        console.log("subtracting is taking place");
        subtracting(number);
    } else if (currentOperation === "x") {
        console.log("multiplying is taking place");
        multiply(number);
    }  else if (currentOperation === "/") {
        console.log("dividing is taking place");
        divide(number);
    } else {
        $resultText.textContent = currentValue;
    }

}






