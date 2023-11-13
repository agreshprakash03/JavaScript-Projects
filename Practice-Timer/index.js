const Independence = "15 Aug 2024";

const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secsel = document.getElementById("secs");


function countdown(){
    const IndependenceDay = new Date(Independence);
    const CurrentDay = new Date();
    
    const totalSeconds = Math.floor((IndependenceDay-CurrentDay)/1000);
    let day = Math.floor(totalSeconds/(3600*24));
    const hour = Math.floor(totalSeconds/3600) % 24;
    const min = Math.floor(totalSeconds/60) % 60;
    const sec = Math.floor(totalSeconds%60);

    const year = IndependenceDay.getFullYear();
    if(year%4==0){day=day+1;}     //Leap year

    daysel.innerHTML = formatTime(day);
    hoursel.innerHTML = formatTime(hour);
    minsel.innerHTML = formatTime(min);
    secsel.innerHTML = formatTime(sec);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(countdown,1000)
