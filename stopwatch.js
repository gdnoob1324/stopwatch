let timerId;
let time = 0;
let  min, sec;

var screen = document.getElementById("screen")
screen.innerText = "00:00"

function getTimeFormatString() {
    min = parseInt(String((time) / 60));
    sec = time % 60;

    return String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}

function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 1000);
}

function printTime() {
    time++;
    screen.innerText = getTimeFormatString();
}

function resetClock() {
    stopClock()
    screen.innerText = "00:00";
    time = 0;
}

function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}