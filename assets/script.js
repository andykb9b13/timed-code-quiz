
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var guessForm = document.querySelector(".question-card");
var startHiddenBox = document.querySelector(".start-hidden");
var displayAnswer = document.querySelector('.answer');
var score = 0;
var currentScore = document.getElementById("current-score");
var question = document.getElementById("question");
var i = -1;
var secondsLeft = 60;
var testKnowledge = document.getElementById('testKnowledge');
var startButton = document.getElementById('start-button');
var timerInterval = '';
var highScore = localStorage.getItem("highScore");
var highScoreDisplay = document.getElementById("high-score");
var gameArea = document.querySelector(".game-area");
var endGameArea = document.querySelector(".end-game-area");
var finalScore = document.querySelector(".final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector(".submit");
var championsArea = document.querySelector(".champions-area");
var championsList = document.querySelector(".champions-list");
var playAgainButton = document.querySelector(".play-again");
var myHighScore = [];

startButton.setAttribute("data-state", "stopped");
currentScore.innerText = "Current Score: " + score;
endGameArea.style.display = "none";
championsArea.style.display = "none";
startHiddenBox.style.display = "none";
highScoreDisplay.innerText = "High Score: " + highScore;

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
        question: "Which of the following is NOT one of the 3 basic types of Javascript Objects?",
        choice1: "Host Objects",
        choice2: "Core-Language Objects",
        choice3: "Independent Objects",
        choice4: "User-Defined Objects",
        answer: "Independent Objects"
    },
    {
        question: "What does DOM stand for?",
        choice1: "Document Obliterating Model",
        choice2: "Detail Oriented Mark",
        choice3: "Document Object Mode",
        choice4: "Document Object Model",
        answer: "Document Object Model"
    },
    // {
    //     question: "Which is the most efficient algorithm using 'Big O' notation?",
    //     choice1: "O(N)",
    //     choice2: "O(1)",
    //     choice3: "O(LogN)",
    //     choice4: "O(2N)",
    //     answer: "O(1)"
    // },
    // {
    //     question: "Which is the correct way to identify 'orange' in the following array: var fruits = ['apple', 'orange', 'pear];",
    //     choice1: "fruits[1]",
    //     choice2: "fruits[0]",
    //     choice3: "fruits[2]",
    //     choice4: "fruits[orange]",
    //     answer: "fruits[1]"
    // },
    // {
    //     question: "Which of the following is the right syntax for calling an element with the class name 'first",
    //     choice1: "document.querySelector(.first)",
    //     choice2: "document.querySelector('.first')",
    //     choice3: "document.getClassName(.first)",
    //     choice4: "document.getClassName('.first')",
    //     answer: "document.querySelector('.first')"
    // },
    // {
    //     question: "Which best describes JavaScript?",
    //     choice1: "double-threaded",
    //     choice2: "triple-threaded",
    //     choice3: "non-threaded",
    //     choice4: "single-threaded",
    //     answer: "single-threaded"
    // },
    // {
    //     question: "Which variable's value cannot be changed once declared?",
    //     choice1: "const",
    //     choice2: "let",
    //     choice3: "var",
    //     choice4: "span",
    //     answer: "const"
    // },
    // {
    //     question: "Which method extracts a portion of a string without altering the original and returns it as a new string?",
    //     choice1: "trim()",
    //     choice2: "replace()",
    //     choice3: "slice()",
    //     choice4: "splice()",
    //     answer: "slice()"
    // },
    // {
    //     question: "Which method removes the decimal from a number?",
    //     choice1: "Math.random()",
    //     choice2: "console.log()",
    //     choice3: "Math.floor()",
    //     choice4: "indexOf()",
    //     answer: "Math.floor()"
    // },
    // {
    //     question: "How many times will this loop run? for (let i = 0; i < 5; i++)",
    //     choice1: "3",
    //     choice2: "10",
    //     choice3: "15",
    //     choice4: "5",
    //     answer: "5"
    // },
    // {
    //     question: "Which of the following will create an infinite loop?",
    //     choice1: "for (let i = 0; i < 6; i++)",
    //     choice2: "for (let i = 0; i > 5; i++)",
    //     choice3: "for (let i = 6; i > 5; i++)",
    //     choice4: "for (let i = 4; i > 0; i--)",
    //     answer: "for (let i = 6; i > 5; i++)"
    // },
    // {
    //     question: "Which of the following is the conditon for the loop? for (let i = 0; i < 5; i++)",
    //     choice1: "i < 5",
    //     choice2: "let i = 0",
    //     choice3: "i++",
    //     choice4: "for",
    //     answer: "i < 5"
    // },
    // {
    //     question: "Which of the following is true?",
    //     choice1: "5 === '5'",
    //     choice2: "2 != '2'",
    //     choice3: "true !== false",
    //     choice4: "5 == 'five'",
    //     answer: "2 != '2'"
    // },
    // {
    //     question: "Which of the following is NOT correct syntax for writing a function?",
    //     choice1: "function newFunc() { console.log('hello!) }",
    //     choice2: "var newFunc = function() { console.log('hello!) }",
    //     choice3: "var function() = newFunc { console.log('hello') }",
    //     choice4: "var newFunc = () => { console.log('hello') }",
    //     answer: "var function() = newFunc { console.log('hello') }"
    // },
    // {
    //     question: "For the variable 'let x=5', which of the following will satisfy the conditions?",
    //     choice1: "if (x > 1 && x < 4)",
    //     choice2: "if (x > 1 || x < 4)",
    //     choice3: "if (x < 1 || x < 4)",
    //     choice4: "if (x > 5 && x < 10)",
    //     answer: "if (x > 1 || x < 4)"
    // },
    // {
    //     question: "Which of the following means 'Not A Number'?",
    //     choice1: "undefined",
    //     choice2: "NaN",
    //     choice3: "null",
    //     choice4: "false",
    //     answer: "NaN"
    // },
    // {
    //     question: "Which of the following will return NaN when called?",
    //     choice1: "var num = 5 + '5'",
    //     choice2: "var num = 'fifty' + '5'",
    //     choice3: "var num = null + 5",
    //     choice4: "var num = 5 + undefined",
    //     answer: "var num = 5 + undefined"
    // },
    // {
    //     question: "Which of the following means 'strict equality'?",
    //     choice1: "===",
    //     choice2: "==",
    //     choice3: "!==",
    //     choice4: "=",
    //     answer: "==="
    // },
    // {
    //     question: "What will be returned when the following is logged in the console: [22, 24] === [22, 24]?",
    //     choice1: "false",
    //     choice2: "true",
    //     choice3: "undefined",
    //     choice4: "NaN",
    //     answer: "false"
    // },
    // {
    //     question: "Which of the following array method will add a value to the BEGINING of an array?",
    //     choice1: ".shift()",
    //     choice2: ".unshift()",
    //     choice3: ".pop()",
    //     choice4: ".push()",
    //     answer: ".unshift()"
    // }
];

function playGame() {
    championsList.innerHTML = "";
    championsArea.style.display = "none";
    startHiddenBox.style.display = "none";
    gameArea.style.display = "contents";
    highScore = localStorage.getItem("highScore");
    highScoreDisplay.innerText = "High Score: " + highScore;
    if (startButton.dataset.state === "running") {
        console.log("checking it's stopping")
        startButton.setAttribute("data-state", "stopped");
        startButton.style.backgroundColor = "#61E786";
        startButton.innerText = "Start";
        clearInterval(timerInterval);
        score = 0;
        currentScore.innerText = "Current Score: " + score;
        secondsLeft = 60;
        i = -1;
        testKnowledge.innerText = "Time Left: " + secondsLeft;

    } else {
        startHiddenBox.style.display = "contents";
        nextQuestion()
        displayAnswer.innerText = "";
        timerInterval = setInterval(function () {
            if (startButton.dataset.state === "stopped") {
                console.log("checking it's running");
                startButton.setAttribute("data-state", "running");
                startButton.style.backgroundColor = "red";
                startButton.innerText = "Reset";
            }
            secondsLeft--;
            testKnowledge.innerText = "Time Left: " + secondsLeft;
            if (secondsLeft <= 0) {
                finalScoreDisplay();
                clearInterval(timerInterval);
                localStorage.getItem("highScore")
                if (score > highScore) {
                    localStorage.setItem("highScore", score);
                }
            }

        }, 1000)
    }
}



function rightAnswer() {
    displayAnswer.innerText = "CORRECT!";
    score += 45;
    currentScore.innerText = "Current Score: " + score;
    nextQuestion();
}

function wrongAnswer() {
    displayAnswer.innerText = "WRONG! The correct answer is: " + questions[i].answer;
    secondsLeft -= 5
    nextQuestion();
}

function checkAnswer1() {
    checkQuestions()
    if (questions[i].choice1 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()

    }
}

function checkAnswer2() {
    checkQuestions()
    if (questions[i].choice2 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer3() {
    checkQuestions()
    if (questions[i].choice3 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()

    }
}

function checkAnswer4() {
    checkQuestions()
    if (questions[i].choice4 === questions[i].answer) {
        rightAnswer()

    } else {
        wrongAnswer()
    }
}

function checkQuestions() {
    if (i === questions.length) {
        finalScoreDisplay();
    }
}

function nextQuestion() {
    choice1.style.backgroundColor = "#9792E3"
    choice2.style.backgroundColor = "#9792E3"
    choice3.style.backgroundColor = "#9792E3"
    choice4.style.backgroundColor = "#9792E3"
    i++;
    if (i === questions.length) {
        checkQuestions()
    } else {
        question.innerText = questions[i].question;
        choice1.innerText = questions[i].choice1;
        choice2.innerText = questions[i].choice2;
        choice3.innerText = questions[i].choice3;
        choice4.innerText = questions[i].choice4;
        console.log(questions[i]);
        return i;
    }
}

function finalScoreDisplay() {
    gameArea.style.display = "none";
    endGameArea.style.display = "contents";
    finalScore.innerText = "Your final score was: " + score;
    localStorage.setItem("highScore", score);
}

function setHighScore() {
    myHighScore = JSON.parse(localStorage.getItem("playerScore"));
    var myInitials = initials.value;
    var nameScore = {
        name: myInitials,
        score: score
    }
    function createChampionsList() {
        myHighScore.push(nameScore);
        localStorage.setItem("playerScore", JSON.stringify(myHighScore))
        for (let i = 0; i < myHighScore.length; i++) {
            newChampion = document.createElement('li');
            newChampion.innerText = "Player: " + myHighScore[i].name + " " + "Score: " + myHighScore[i].score;
            championsList.appendChild(newChampion);
        }
    }
    if (myHighScore === null) {
        myHighScore = [];
        createChampionsList()
    } else {
        createChampionsList()
    }
    endGameArea.style.display = "none";
    championsArea.style.display = "contents";
}

startButton.addEventListener("click", playGame);
choice1.addEventListener("click", checkAnswer1);
choice2.addEventListener("click", checkAnswer2);
choice3.addEventListener("click", checkAnswer3);
choice4.addEventListener("click", checkAnswer4);
submitButton.addEventListener("click", setHighScore)
playAgainButton.addEventListener("click", playGame)