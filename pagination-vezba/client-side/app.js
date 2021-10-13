

const main = document.querySelector("main");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const current = document.getElementById("current");
const total = document.getElementById("total");

let page = 1;
let limit = 10;
let more = true;
const defaultUrl = "http://localhost:3001/api/users";

// btnNext.href = `?page=${page}&limit=${limit}`;

displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);

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
});

// function

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

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  }

// console.log(updateQueryStringParameter(window.location.search, page, limit));











