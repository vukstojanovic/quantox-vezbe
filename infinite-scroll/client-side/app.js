
const $main = document.querySelector("main");
$main.style.marginTop = "300px";

let page = 1;
let limit = 65;

let more = true;
const defaultUrl = "http://localhost:3001/api/users";

displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);

window.addEventListener("scroll", throttled(20, handleScroll));





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

function handleScroll() {
    console.log(window.innerHeight + this.scrollY);
    // console.log(this.scrollY);
    let currentScrollPosition = window.innerHeight + this.scrollY;
    let totalHeight = document.documentElement.offsetHeight;
    console.log(currentScrollPosition, totalHeight);
    if ((currentScrollPosition >= totalHeight) && more) {
        page++;
        displayInfo(`${defaultUrl}?page=${page}&limit=${limit}`);
        
    }
}


function debounced(delay, fn) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    }
}

function throttled(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
}
