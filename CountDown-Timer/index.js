const newyear = "1 Jan 2024"

const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secondsel = document.getElementById("seconds");

function countdown(){
    const newyearDate = new Date(newyear);
    const currentyear = new Date();

    const totalSeconds = Math.floor(newyearDate-currentyear) / 1000;
    
    const days = Math.floor(totalSeconds/(3600*24));
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysel.innerHTML = formatTime(days)
    hoursel.innerHTML = formatTime(hours)
    minsel.innerHTML = formatTime(mins)
    secondsel.innerHTML = formatTime(seconds)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown,1000);