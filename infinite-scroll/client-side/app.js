
const $main = document.querySelector("main");
$main.style.marginTop = "300px";

const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('page'));
let page = urlParams.get('page') ?? 1;
let limit = urlParams.get('limit') ?? 45;

let more = true;
const defaultUrl = "http://localhost:3001/api/users";

displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);

window.addEventListener("scroll", (e) => {
    console.log(window.innerHeight + this.scrollY);
    // console.log(this.scrollY);
    let currentScrollPosition = window.innerHeight + this.scrollY;
    let totalHeight = document.documentElement.offsetHeight;
    console.log(currentScrollPosition, totalHeight);
    if ((currentScrollPosition >= totalHeight) && more) {
        page++;
        displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);
        
    }
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
        $main.innerHTML += `${divList.join("")}`;
        // updateUrl();
        console.log(document.documentElement.offsetHeight);
    })
    .catch(err => {
        console.log(err);
    })
}

function updateUrl() {
    // window.location.search = ``;
    location.search = `?page=${page}&limit=${limit}`;
}



