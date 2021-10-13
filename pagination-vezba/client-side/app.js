

const main = document.querySelector("main");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const current = document.getElementById("current");
const total = document.getElementById("total");

let page = 1;
let limit = 10;
const defaultUrl = "http://localhost:3001/api/users";

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function displayInfo(url) {
    fetchData(url)
    .then(result => {
        console.log(result);
        if (!result.hasMore) {
            // total.textContent = page;
            page--;
        }
        const divList = result.results.map(obj => {
            console.log(obj.name);
            return `<div>${obj.id}, ${obj.name}, ${obj.email}, ${obj.address}, ${obj.country}, ${obj.company}</div>`
        });
        console.log(divList);
        main.innerHTML = `${divList.join("")}`;
    })
    .catch(err => {
        console.log(err);
    })

    current.textContent = page;
}

displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);


btnNext.addEventListener("click", () => {
    page++;
    displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);
    current.textContent = page;
});

btnPrev.addEventListener("click", () => {
    if (page > 1) {
        page--;
    }
    displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);
    current.textContent = page;
});























