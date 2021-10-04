

const $day = document.getElementById("js-day");
const $night = document.getElementById("js-night");
// const lightDark = document.querySelectorAll(".modes div img");
const $inputContainer = document.querySelector(".input-container");
const $input = document.querySelector(".input-container input");
const $section = document.querySelector("section");
const $body = document.body;
const $btn = document.getElementById("js-btn");

const $name = document.querySelector(".info h1");
const $profileImage = document.querySelector(".general img");
const $username = document.querySelector(".info h3");
const $joined = document.querySelector(".info p");
const $desc = document.querySelector(".desc");
const $repos = document.getElementById("js-repos");
const $followers = document.getElementById("js-followers");
const $following = document.getElementById("js-following");
const $location = document.querySelectorAll(".link:nth-child(1) p")[0];
const $blog = document.querySelectorAll(".link:nth-child(2) p")[0];
const $twitter = document.querySelectorAll(".link:nth-child(3) p")[0];
const $company = document.querySelectorAll(".link:nth-child(4) p")[0];


const defaultUrl = "https://api.github.com/users/:username";

// event listeners

displayProfile("octocat");

$btn.addEventListener("click", () => {
    displayProfile("vukstojanovic");
});

$day.addEventListener("click", switchModes);

$night.addEventListener("click", switchModes);

// functions

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function displayProfile(name) {


    const newUrl = defaultUrl.replace(":username", name);
    console.log(newUrl);

    const promise = fetchData(newUrl);
    promise.then(result => {
        console.log(result);
        $name.textContent = result.name ? result.name : result.login;
        $profileImage.src = result.avatar_url;
        $username.textContent = "@" + result.login;
        $joined.textContent = displayTimeText(result.created_at);
        $desc.textContent = result.bio ? result.bio : "This profile has no bio";
        $repos.textContent = result.public_repos;
        $followers.textContent = result.followers;
        $following.textContent = result.following;
        $location.textContent = result.location ? result.location : "Not available";
        $blog.textContent = result.blog ? result.blog : "Not available";
        $twitter.textContent = result.twitter_username ? result.twitter_username : "Not available";
        $company.textContent = result.company ? result.company : "Not available";
    })
    .catch(err => {
        console.log(err);
    });
}

function switchModes() {
    $day.parentElement.classList.toggle("js-invisible");
    $night.parentElement.classList.toggle("js-invisible");
    $body.classList.toggle("js-night");
    $inputContainer.classList.toggle("js-night");
    $input.classList.toggle("js-night");
    $section.classList.toggle("js-night");
}

function displayTimeText(info) {

    let year = "";
    let day = "";
    let month = "";
    let lines = 0;
    const stringArr = Array.from(info);
    stringArr.slice(0, stringArr.indexOf("T")).forEach(letter => {
        if (letter !== "-" && lines === 0) {
            year += letter;
        } else if (letter !== "-" && lines === 1) {
            month += letter;
        } else if (letter !== "-" && lines === 2) {
            day += letter;
        } else if (letter === "-") {
            lines++;
        } else if (letter === "T") {
            
        }
    });

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Nov", "Dec"];
    const currentMonth = months[Number(month) - 1];

    console.log(`Joined ${day} ${currentMonth} ${year}`);

    return `Joined ${day} ${currentMonth} ${year}`;

}



