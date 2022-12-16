var timerDisplay = document.createElement('h2')
var secondsLeft = 60;

function setTime() {
    var timerInt = setInterval(function () {
        secondsLeft--;
        timerDisplay = secondsLeft;
    }, 1000)
}