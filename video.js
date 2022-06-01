const video = document.getElementById('videoplay');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');

play.addEventListener('click',()=>{
    video.play();
    play.hidden = true;
    pause.hidden = false;
})
pause.addEventListener('click',()=>{
    video.pause();
    play.hidden = false;
    pause.hidden = true;
})
backward.addEventListener('click',handlerbackward )

function handlerbackward() {
    video.currentTime -= 10; 
    console.log(video.currentTime)
}

forward.addEventListener('click',handlerforward)

function handlerforward () {
    video.currentTime += 10; 
    console.log(video.currentTime)
}

const progress = document.getElementById("progress");

progress.addEventListener('input', () => {
    video.currentTime = progress.value;
})

video.addEventListener("loadedmetadata", () => {
    progress.max = video.duration;
})
video.addEventListener("timeupdate", () => {
    progress.value = video.currentTime;
})



