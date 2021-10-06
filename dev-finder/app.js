

const $day = document.getElementById("js-day");
const $night = document.getElementById("js-night");
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
const $error = document.querySelector(".input-container span");


const defaultUrl = "https://api.github.com/users/:username";

// event listeners


displayProfile("octocat");

$btn.addEventListener("click", () => {
    if (!$input.value) {
        return
    }

    displayProfile($input.value);
});

$day.addEventListener("click", switchModes);

$night.addEventListener("click", switchModes);

$input.addEventListener("keydown", () => {
    $error.textContent = "";
    $input.placeholder = "Search GitHub username";
});

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
        if (!result.login) {
            $error.textContent = "No results";
            $input.placeholder = "";
            return
        }

        $name.textContent = result.name ? result.name : result.login;
        $profileImage.src = result.avatar_url;
        $username.textContent = "@" + result.login;
        $joined.textContent = displayTimeText(result.created_at);
        $desc.textContent = result.bio ? result.bio : "This profile has no bio";
        $repos.textContent = result.public_repos;
        $followers.textContent = result.followers;
        $following.textContent = result.following;
        $error.textContent = "";
        $input.placeholder = "Search GitHub username";

        console.log(result.location);

        if (result.location) {
            $location.textContent = result.location;
            $location.parentElement.parentElement.classList.remove("js-not-available");
        } else {
            $location.textContent = "Not available";
            $location.parentElement.parentElement.classList.add("js-not-available");
        }

        if (result.blog) {
            $blog.textContent = result.blog;
            $blog.parentElement.href = result.blog.includes('https://') || result.blog.includes('http://') ? result.blog : `https://${result.blog}`;
            $blog.parentElement.parentElement.classList.remove("js-not-available");
        } else {
            $blog.textContent = "Not available";
            $blog.parentElement.parentElement.classList.add("js-not-available");
        }

        if (result.twitter_username) {
            $twitter.textContent = result.twitter_username;
            $twitter.parentElement.href = `https://twitter.com/${result.twitter_username}`;
            $twitter.parentElement.parentElement.classList.remove("js-not-available");
        } else {
            $twitter.textContent = "Not available";
            $twitter.parentElement.href = "#";
            $twitter.parentElement.parentElement.classList.add("js-not-available");
        }

        if (result.company) {
            $company.textContent = result.company;
            const withoutPrefix = result.company[0] === "@" ? result.company.slice(1) : result.company;
            console.log(withoutPrefix, "https://github.com/" + withoutPrefix);
            $company.parentElement.href = `https://github.com/${withoutPrefix}`;
            $company.parentElement.parentElement.classList.remove("js-not-available");
        } else {
            $company.textContent = "Not available";
            $company.parentElement.href = "#";
            $company.parentElement.parentElement.classList.add("js-not-available");
        }
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
        }
    });

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentMonth = months[Number(month) - 1];

    console.log(`Joined ${day} ${currentMonth} ${year}`);

    return `Joined ${day} ${currentMonth} ${year}`;

}


