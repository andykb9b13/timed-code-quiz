
var secondsLeft = 60;
var testKnowledge = document.getElementById('testKnowledge');
var startButton = document.getElementById('start-button');
var timerInterval = '';
startButton.setAttribute("data-state", "stopped")

function toggleButton() {
    if (startButton.dataset.state === "stopped") {
        console.log("checking it's running")
        startButton.setAttribute("data-state", "running");
        startButton.style.backgroundColor = "red";
        startButton.innerText = "Stop"
    } else if (startButton.dataset.state === "running") {
        console.log("checking it's stopping")
        startButton.setAttribute("data-state", "stopped");
        startButton.style.backgroundColor = "#61E786";
        startButton.innerText = "Start";

    }
}
function setTimer() {
    secondsLeft = 60;
    timerInterval = setInterval(function () {
        secondsLeft--;
        testKnowledge.innerText = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            testKnowledge.innerText = "Whoa, dude! Better study more!"
        }
    }, 1000)
}

startButton.addEventListener("click", toggleButton);


// TODO turn the start button into the stop button when it is pressed after initializing
// TODO make another JS file with the answers and questions in them to be referenced