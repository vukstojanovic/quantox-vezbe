
const $myVideo = document.getElementById("myVid");
const $playBtn = document.querySelector(".play-btn");
const $playIcon = document.querySelector(".fa-play");
const $pauseIcon = document.querySelector(".fa-pause");
const $progress = document.querySelector(".progress-filled");
const $progressBar = document.querySelector(".progress-bar");
const $volumeProgress = document.querySelector(".volume-progress");
const $volumeProgressFilled = document.querySelector(".volume-progress-filled");
const $volumeIcon = document.querySelector(".fa-volume-up");
const $volumeMute = document.querySelector(".fa-volume-mute");
$pauseIcon.style.visibility = "hidden";

let mouseIsDown = false;

$playBtn.addEventListener("click", () => {
    if ($myVideo.paused) {
        $playIcon.style.visibility = "hidden";
        $pauseIcon.style.visibility = "visible";
        $myVideo.play();
    } else {
        $playIcon.style.visibility = "visible";
        $pauseIcon.style.visibility = "hidden";
        $myVideo.pause();
    }
});

$myVideo.addEventListener("timeupdate", () => {
    const currentWidth = ($myVideo.currentTime / $myVideo.duration) * 100;
    $progress.style.width = `${currentWidth}%`;
});

$progressBar.addEventListener("click", (e) => {
    const progressBarWidth = $progressBar.getBoundingClientRect().width;
    const progressWidth = e.offsetX;
    $myVideo.currentTime = (progressWidth / progressBarWidth) * $myVideo.duration;
});

$volumeProgress.addEventListener("mousedown", (e) => {
    mouseIsDown = true;
    unMute();
    adjustVolume(e);
});

$volumeProgress.addEventListener("mouseup", (e) => {
    mouseIsDown = false;
});

$volumeProgress.addEventListener("mouseout", (e) => {
    mouseIsDown = false;
});

$volumeProgress.addEventListener("mousemove", adjustVolume);

$volumeMute.addEventListener("click", unMute);

$volumeIcon.addEventListener("click", () => {
    $volumeIcon.style.visibility = "hidden";
    $volumeMute.style.visibility = "visible";
    $myVideo.muted = true;
});

function unMute() {
    $volumeIcon.style.visibility = "visible";
    $volumeMute.style.visibility = "hidden";
    $myVideo.muted = false;
}

function adjustVolume(e) {
    if (mouseIsDown) {
        const volumeProgressWidth = $volumeProgress.getBoundingClientRect().width;
        const volumeProgressFilledWidth = e.offsetX;
        console.log(e.offsetX, $myVideo.volume);
        $volumeProgressFilled.style.width = `${(volumeProgressFilledWidth / volumeProgressWidth) * 100}%`;
        $myVideo.volume = volumeProgressFilledWidth / volumeProgressWidth;
    }
}