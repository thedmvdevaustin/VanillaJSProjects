const timer = document.querySelector(".stopwatch__time")
const controls = document.querySelector(".stopwatch__controls");

let seconds = 55;
let minutes = 59;
let hours = 0;
let startTimer;
controls.addEventListener("click", function(e){
    if (e.target.classList.contains("fa-play")){
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        e.target.style.backgroundColor = "rgb(230, 177, 33)";
        Object.assign(e.target.nextElementSibling.style, {
            pointerEvent: "none",
            opacity: "50%"
        });
        startTimer = setInterval(start, 1000);
    } else if (e.target.classList.contains("fa-pause")){
        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play");
        e.target.style.backgroundColor = "rgb(73, 125, 32)";
        Object.assign(e.target.nextElementSibling.style, {
            pointerEvent: "initial",
            opacity: "initial"
        });
        if(!startTimer) return
        clearInterval(startTimer)
    };
    if (e.target.classList.contains("fa-rotate-left")){
        if (e.target.style.pointerEvent==="none") return
        timer.textContent = "00:00:00"
        hours = 0;
        seconds = 0;
        minutes = 0;
    }
});

function start(){
    seconds++;
    if (seconds===60){
        minutes++;
        seconds = 0;
    };
    if (minutes===60){
        hours++;
        minutes = 0;
    };
    timer.textContent = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
};
