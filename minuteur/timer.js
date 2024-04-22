var timer;
var time = 0;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    time++;
    document.getElementById('timer').innerHTML = formatTime(time);
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return pad(minutes) + ":" + pad(remainingSeconds);
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}
