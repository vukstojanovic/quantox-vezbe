
// 1. globalni parametri

const select = document.getElementById("difficulty");
const btn = document.getElementById("btn");
const grid = document.querySelector(".memory-container");
const numberOfMoves = document.querySelector(".moves span");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");
const starRating = document.querySelector(".star-rating span");
let score = 0;
let movesVar = 0;
let numberOfClicks = 0;
let prviPokrivac;
let prvaSlika;
let drugiPokrivac;
let drugaSlika;
let otkucavanje;

// 2. event listeneri

btn.addEventListener("click", () => {

    // kreiranje grida

    grid.innerHTML = "";
    movesVar = 0;
    numberOfMoves.textContent = movesVar;

    let secs = 0;

    if (otkucavanje) {
        clearInterval(otkucavanje);
    }

    otkucavanje = setInterval(() => {
        secs++;
        let mins = Math.floor(secs / 60);
        let remainderSecs = secs % 60;
        secondsText.textContent = remainderSecs;
        minutesText.textContent = mins;
    }, 1000);

    score = 0;

    starRating.textContent = 0;

    // podesavanje broja kartica u gridu

    difficultySetting(select.value);

});

grid.addEventListener("click", (e) => {

    if (e.target.className == "cover") {
        const pokrivac = e.target;
        const slika = e.target.nextElementSibling;
        numberOfClicks++;
        console.log(slika.src);
        if (numberOfClicks == 1) {
            pokrivac.classList.toggle("hidden");
            slika.classList.toggle("hidden");
            prviPokrivac = pokrivac;
            prvaSlika = slika;
        } else if (numberOfClicks == 2) {

            movesVar++;
            numberOfMoves.textContent = movesVar;

            pokrivac.classList.toggle("hidden");
            slika.classList.toggle("hidden");
            if (slika.src === prvaSlika.src) {
                setTimeout(() => alert("Bravo, pogodili ste"), 100);
                score++;
                if (score == Number(select.value)) {
                    let starVar = Number(select.value) * 3 / movesVar;
                    if (starVar < 1) {
                        starVar = 1;
                    }
                    starRating.textContent = String(starVar).slice(0, 4);
                    setTimeout(() => {
                        grid.innerHTML = `<h1 class="uvodnaPoruka">Congratulations, you won! It took you exactly ${minutesText.innerHTML} minutes and ${secondsText.innerHTML} seconds to finish the game. Your star rating is: ${starRating.innerHTML}. Press Start if you want to play again.</h1>`;
                        grid.classList = "memory-container";
                    }, 200);
                    clearInterval(otkucavanje);
                }
            } else {
                setTimeout(() => {
                    alert("Greska, pokusajte ponovo");
                    prvaSlika.classList.toggle("hidden");
                    prviPokrivac.classList.toggle("hidden");
                    slika.classList.toggle("hidden");
                    pokrivac.classList.toggle("hidden");
                }, 100);
            }
            numberOfClicks = 0;
        }
    }

});


// 3. funkcije

// 1) povlacenje slika iz jsona

async function getImages(link) {

    const data = await fetch(link);

    const promise = await data.json();

    return promise;

}

// 2) mesanje niza

function randomize(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * array.length);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;

}


// 3) odredjivanje tezine

function difficultySetting(numberString) {

    const obj = {
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten"
    }

    const number = Number(numberString);

    getImages("image-paths.json")
        .then(result => {
            let imgList = result["images"];
            let x = 0;
            let newList = [];
            while (x < number) {
                let randomImgIndex = Math.floor(Math.random() * imgList.length);
                if (!newList.includes(imgList[randomImgIndex])) {
                    newList.push(imgList[randomImgIndex]);
                    x++;
                }
            }
            let doubleImgslist = newList.concat(newList);
            randomize(doubleImgslist);
    
            // grid.classList.remove("five", "six", "seven", "eight", "nine", "ten");
            grid.classList = "memory-container";
            grid.classList.add(obj[numberString]);
            for (let i = 0; i < (number * 2); i++) {
                const currImg = doubleImgslist[i];
                console.log(currImg);
                const card = 
                `<div class="card">
                    <div class="cover"></div>
                    <img src="${currImg}" alt="" class="hidden">
                </div>`;
                grid.innerHTML += card;
            }
    
        })

}














