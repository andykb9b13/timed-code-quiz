
var secondsLeft = 60;
var testKnowledge = document.getElementById('testKnowledge');
var startButton = document.getElementById('start-button');
var timerInterval = '';

function setTimer() {
    secondsLeft = 60;
    timerInterval = setInterval(function () {
        secondsLeft--;
        testKnowledge.innerText = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            testKnowledge.innerText = "Whoa, dude! Better Study More!"
        }
    }, 1000)
}



startButton.addEventListener("click", setTimer);


// TODO turn the start button into the stop button when it is pressed after initializing
