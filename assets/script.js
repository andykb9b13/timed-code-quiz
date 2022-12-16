
var secondsLeft = 60;
var testKnowledge = document.getElementById('testKnowledge');
var startButton = document.getElementById('start-button');
var timerInterval = '';
startButton.setAttribute("data-state", "stopped")

function toggleButton() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        testKnowledge.innerText = "Time Left: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            testKnowledge.innerText = "Whoa, dude! Better study more!"
        }
    }, 1000)
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

startButton.addEventListener("click", toggleButton);


// TODO make another JS file with the answers and questions in them to be referenced

var question1 = {
    question: "Which of the following is not a primitive type in JavaScript?",
    choice1: "String",
    choice2: "Boolean",
    choice3: "Script",
    choice4: "Null",
    answer: "Script"
}

var question2 = {
    question: "Which of the following is the right syntax for CSS?",
    choice1: "color: 'blue';",
    choice2: "'background': white;",
    choice3: "font-family = serif;",
    choice4: "'line-height': '10px';",
    answer: "color: 'blue';"
}

var question3 = {
    question: "Which of the following moves elements along the main axis in CSS?",
    choice1: "justify-items",
    choice2: "align-content",
    choice3: "center-content",
    choice4: "justify-content",
    answer: "justify-content"
}