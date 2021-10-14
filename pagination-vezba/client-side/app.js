
// variables

const main = document.querySelector("main");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const current = document.getElementById("current");
const total = document.getElementById("total");

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('page'));
let page = urlParams.get('page') ?? 1;
let limit = urlParams.get('limit') ?? 10;
// let page = 1;
// let limit = 10;
let more = true;
const defaultUrl = "http://localhost:3001/api/users";

displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);
// displayInfo(updateQueryStringParameter(defaultUrl, page, limit));

// event listeners

btnNext.addEventListener("click", () => {
    if (more) {
        page++;
    }
    
    displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);
    current.textContent = page;
    updateUrl();
    
});

btnPrev.addEventListener("click", () => {
    if (page > 1) {
        page--;
    }
    displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);
    current.textContent = page;
    updateUrl();
});

// functions

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function displayInfo(url) {
    fetchData(url)
    .then(result => {
        more = result.hasMore;
        const divList = result.results.map(obj => {
            return `<div>${obj.id}, ${obj.name}, ${obj.email}, ${obj.address}, ${obj.country}, ${obj.company}</div>`
        });
        main.innerHTML = `${divList.join("")}`;
        // updateUrl();
    })
    .catch(err => {
        console.log(err);
    })

    current.textContent = page;
}

// function updateUrl() {
//     console.log(window.location.search);
//     const url = window.location.href + `?page=${page}&limit=${limit}`;
//     window.history.pushState({path: url}, "", url);
// }


function updateUrl() {
    // window.location.search = ``;
    location.search = `?page=${page}&limit=${limit}`;
}









