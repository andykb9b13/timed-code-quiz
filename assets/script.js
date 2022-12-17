
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


// TODO the choice chosen will change color depending on if it's right or wrong
// TODO The answer will show up on the bottom of the screen.
// TODO A next button will show up on the screen
// TODO There needs to be a counter on the screen for current wins and high score
// TODO make another JS file with the answers and questions in them to be referenced
let questions = [
    {
        question: "Which of the following is not a primitive type in JavaScript?",
        choice1: "String",
        choice2: "Boolean",
        choice3: "Script",
        choice4: "Null",
        answer: "Script"
    },
    {
        question: "Which of the following is the right syntax for CSS?",
        choice1: "color: 'blue';",
        choice2: "'background': white;",
        choice3: "font-family = serif;",
        choice4: "'line-height': '10px';",
        answer: "color: 'blue';"
    },
    {
        question: "Which of the following moves elements along the main axis in CSS?",
        choice1: "justify-items",
        choice2: "align-content",
        choice3: "center-content",
        choice4: "justify-content",
        answer: "justify-content"
    }
];

var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var guessForm = document.querySelector(".question-card")
var displayAnswer = document.createElement('p')
var realAnswer = questions[0].answer;
var nextButton = document.querySelector("#next-button")
var score = 0;
choice1.innerText = questions[0].choice1;
choice2.innerText = questions[0].choice2;
choice3.innerText = questions[0].choice3;
choice4.innerText = questions[0].choice4;

nextButton.style.display = "none"



function rightAnswer() {
    displayAnswer.innerText = "CORRECT!";
    guessForm.appendChild(displayAnswer);
    nextButton.style.display = "contents";
    score++;
}

function wrongAnswer() {
    displayAnswer.innerText = "WRONG!!!!";
    guessForm.appendChild(displayAnswer);
    nextButton.style.display = "contents"
}

function checkAnswer1() {
    if (questions[0].choice1 === realAnswer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer2() {
    if (questions[0].choice2 === realAnswer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer3() {
    if (questions[0].choice3 === realAnswer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer4() {
    if (questions[0].choice4 === realAnswer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

startButton.addEventListener("click", toggleButton);
choice1.addEventListener("click", checkAnswer1);
choice2.addEventListener("click", checkAnswer2);
choice3.addEventListener("click", checkAnswer3);
choice4.addEventListener("click", checkAnswer4);

function nextQuestion() {
    // need to add 1 to the array index each time the next button is pressed. 
    // maybe make a random selector if you have time.
}

// nextButton.addEventListener("click",)


