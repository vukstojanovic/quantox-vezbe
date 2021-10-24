
// variables

const $player = document.querySelector(".player");
const $myVideo = document.getElementById("myVid");
const $playBtn = document.querySelector(".play-btn");
const $volumeBtn = document.querySelector(".volume-btn");
const $fullScreenBtn = document.querySelector(".full-screen-btn");
const $progress = document.querySelector(".progress-filled");
const $progressBar = document.querySelector(".progress-bar");
const $volumeProgress = document.querySelector(".volume-progress");
const $volumeProgressFilled = document.querySelector(".volume-progress-filled");
const $playback = document.querySelector(".playback-btn select");
let mouseIsDown = false;

// event listeners

$playBtn.addEventListener("click", playOrPause);
$myVideo.addEventListener("click", playOrPause);

$myVideo.addEventListener("timeupdate", () => {
    const currentWidth = ($myVideo.currentTime / $myVideo.duration) * 100;
    $progress.style.width = `${currentWidth}%`;
    if ($myVideo.currentTime === $myVideo.duration) {
        $playBtn.classList.toggle("toggle-visibility");
    }
});

$progressBar.addEventListener("click", (e) => {
    const progressBarWidth = $progressBar.getBoundingClientRect().width;
    const progressWidth = e.offsetX;
    $myVideo.currentTime = (progressWidth / progressBarWidth) * $myVideo.duration;
});

$volumeProgress.addEventListener("mousedown", (e) => {
    mouseIsDown = true;
    $myVideo.muted = false;
    $volumeBtn.classList.remove("toggle-visibility");
    adjustVolume(e);
});

$volumeProgress.addEventListener("mouseup", (e) => {
    mouseIsDown = false;
});

$volumeProgress.addEventListener("mouseout", (e) => {
    mouseIsDown = false;
});

$volumeProgress.addEventListener("mousemove", adjustVolume);

$volumeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("fas")) {
        console.log(e.target.classList);
        $volumeBtn.classList.toggle("toggle-visibility");
        $myVideo.muted = !$myVideo.muted;
    }
});

$fullScreenBtn.addEventListener("click", () => {
    $fullScreenBtn.classList.toggle("toggle-visibility");
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        $player.requestFullscreen();
    }
});

$playback.addEventListener("change", () => {
    $myVideo.playbackRate = $playback.value;
});

// functions

function adjustVolume(e) {
    if (mouseIsDown) {
        const volumeProgressWidth = $volumeProgress.getBoundingClientRect().width;
        const volumeProgressFilledWidth = e.offsetX;
        console.log(e.offsetX, $myVideo.volume);
        $volumeProgressFilled.style.width = `${(volumeProgressFilledWidth / volumeProgressWidth) * 100}%`;
        $myVideo.volume = volumeProgressFilledWidth / volumeProgressWidth;
    }
}

function playOrPause() {
    $playBtn.classList.toggle("toggle-visibility");
    if ($myVideo.paused) {
        $myVideo.play();
    } else {
        $myVideo.pause();
    }
}