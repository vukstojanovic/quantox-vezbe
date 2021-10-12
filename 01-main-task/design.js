
// variables

const $btnsTheme = document.querySelectorAll(".btn-theme");
const $body = document.body;
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

// event listeners

$btnsTheme.forEach(btn => btn.addEventListener("click", () => {

    currentThemeIndex++;

    if (currentThemeIndex >= themesArray.length) {
        currentThemeIndex = 0;
    }

    console.log($main);

    themesArray.forEach(theme => {
        $body.classList.remove(theme);
        $btnsTheme.forEach(btn => btn.classList.remove(theme));
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

    $body.classList.add(themesArray[currentThemeIndex]);
    $btnsTheme.forEach(btn => btn.classList.add(themesArray[currentThemeIndex]));
    $main.classList.add(themesArray[currentThemeIndex]);
    $header.classList.add(themesArray[currentThemeIndex]);
    $switcher.classList.add(themesArray[currentThemeIndex]);
    $reasultArea.classList.add(themesArray[currentThemeIndex]);
    $buttons.classList.add(themesArray[currentThemeIndex]);
    $btnsRegular.forEach(btn => btn.classList.add(themesArray[currentThemeIndex]));
    $btnDel.classList.add(themesArray[currentThemeIndex]);
    $btnReset.classList.add(themesArray[currentThemeIndex]);
    $btnEquals.classList.add(themesArray[currentThemeIndex]);

}));






