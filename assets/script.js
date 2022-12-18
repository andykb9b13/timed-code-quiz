
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var guessForm = document.querySelector(".question-card");
var displayAnswer = document.createElement('p');
var nextButton = document.querySelector("#next-button");
var score = 0;
var currentScore = document.getElementById("current-score")
var question = document.getElementById("question");
var i = 0;
var secondsLeft = 60;
var testKnowledge = document.getElementById('testKnowledge');
var startButton = document.getElementById('start-button');
var timerInterval = '';
startButton.setAttribute("data-state", "stopped")
currentScore.innerText = "Current Score: " + score;


// TODO disable the question display and eventListeners when the time runs out or the reset button is pressed.
// TODO if the reset button is pressed, the current score goes down to 0.

function toggleButton() {
    if (startButton.dataset.state === "running") {
        console.log("checking it's stopping")
        startButton.setAttribute("data-state", "stopped");
        startButton.style.backgroundColor = "#61E786";
        startButton.innerText = "Start";
        clearInterval(timerInterval);
        score = 0;
        currentScore.innerText = "Current Score: " + score;
        secondsLeft = 60;
        testKnowledge.innerText = "Time Left: " + secondsLeft;
    } else {
        nextQuestion(i)
        timerInterval = setInterval(function () {
            if (startButton.dataset.state === "stopped") {
                console.log("checking it's running")
                startButton.setAttribute("data-state", "running");
                startButton.style.backgroundColor = "red";
                startButton.innerText = "Reset"
            }
            secondsLeft--;
            testKnowledge.innerText = "Time Left: " + secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                testKnowledge.innerText = "Whoa, dude! Better study more!"
            }

        }, 1000)
    }
}


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
    },
    {
        question: "Which is NOT a relative unit of measurement?",
        choice1: "4em",
        choice2: "2.5rem",
        choice3: "75px",
        choice4: "40%",
        answer: "75px"
    },
    {
        question: "Which is the adjacent selector?",
        choice1: "+",
        choice2: "<",
        choice3: ">",
        choice4: "=",
        answer: "+"
    },
    {
        question: "Which of the following moves elements along the main axis in CSS?",
        choice1: "justify-items",
        choice2: "align-content",
        choice3: "center-content",
        choice4: "justify-content",
        answer: "justify-content"
    },
    {
        question: "Which of the following has the highest specificity?",
        choice1: "#chrome",
        choice2: ".chrome",
        choice3: "chrome",
        choice4: ".chrome p",
        answer: "#chrome"
    },
    {
        question: "Which property adjusts the space between elements?",
        choice1: "border",
        choice2: "margin",
        choice3: "padding",
        choice4: "transparency",
        answer: "margin"
    },
    {
        question: "Which variable's value cannot be changed once declared?",
        choice1: "const",
        choice2: "let",
        choice3: "var",
        choice4: "span",
        answer: "const"
    },
    {
        question: "Which method extracts a portion of a string without altering the original and returns it as a new string?",
        choice1: "trim()",
        choice2: "replace()",
        choice3: "slice()",
        choice4: "splice()",
        answer: "slice()"
    },
    {
        question: "Which method removes the decimal from a number?",
        choice1: "Math.random()",
        choice2: "console.log()",
        choice3: "Math.floor()",
        choice4: "indexOf()",
        answer: "Math.floor()"
    }
];



nextButton.style.display = "none"

function rightAnswer() {
    displayAnswer.innerText = "CORRECT!";
    guessForm.appendChild(displayAnswer);
    nextButton.style.display = "contents";
    score++;
    currentScore.innerText = "Current Score: " + score;
}

function wrongAnswer() {
    displayAnswer.innerText = "WRONG! The correct answer is: " + questions[i].answer;
    guessForm.appendChild(displayAnswer);
    nextButton.style.display = "contents"
    secondsLeft -= 5
}

function checkAnswer1() {
    // var i = nextQuestion;
    choice1.style.backgroundColor = "#61E786"
    if (questions[i].choice1 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer2() {
    choice2.style.backgroundColor = "#61E786"
    if (questions[i].choice2 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer3() {
    choice3.style.backgroundColor = "#61E786"
    if (questions[i].choice3 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer4() {
    choice4.style.backgroundColor = "#61E786"
    if (questions[i].choice4 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function nextQuestion() {
    // var i = Math.floor(Math.random() * questions.length);
    choice1.style.backgroundColor = "#9792E3"
    choice2.style.backgroundColor = "#9792E3"
    choice3.style.backgroundColor = "#9792E3"
    choice4.style.backgroundColor = "#9792E3"
    nextButton.style.display = "none"
    displayAnswer.innerText = "";
    i++;
    question.innerText = questions[i].question;
    choice1.innerText = questions[i].choice1;
    choice2.innerText = questions[i].choice2;
    choice3.innerText = questions[i].choice3;
    choice4.innerText = questions[i].choice4;
    console.log(questions[i]);
    return i;
}



startButton.addEventListener("click", toggleButton);
choice1.addEventListener("click", checkAnswer1);
choice2.addEventListener("click", checkAnswer2);
choice3.addEventListener("click", checkAnswer3);
choice4.addEventListener("click", checkAnswer4);
nextButton.addEventListener("click", nextQuestion)





