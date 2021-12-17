const clock = document.querySelector(".container");
const endDate = document.querySelector(".c_date");
let timeInterval;
let timeStop = true;
debugger;
const saveValue = localStorage.getItem("countDown") || false;
if (saveValue) {


    startClock(Date.parse(saveValue));
    let inputValue = new Date(saveValue);
    endDate.valueAsDate = inputValue;

}


function fill() {
    debugger;
    let myDate = new Date(endDate.value);
    localStorage.setItem("countDown", myDate);
    // 
    myDate = Date.parse(myDate);
    clearInterval(timeInterval);
    startClock(myDate);
    timeStop = true;
}

function startClock(mt) {

    function updateTimer() {
        let currentDate = new Date();
        currentDate = Date.parse(currentDate);
        let tl = timeLeft(mt - currentDate);
        if (tl.total <= 0) {
            timeStop = false;
        }
        document.getElementById("i_1").innerHTML = tl.days;
        document.getElementById("i_2").innerHTML = tl.hours;
        document.getElementById("i_3").innerHTML = tl.minutes;
        document.getElementById("i_4").innerHTML = tl.seconds;

    }
    updateTimer();
    if (timeStop)
        timeInterval = setInterval(updateTimer, 1000);
    else
        clearInterval(timeInterval);
}

function timeLeft(t) {
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor(((t / 1000) / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };

}