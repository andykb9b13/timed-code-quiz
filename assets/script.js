/*****************************************************************************************
 * Timed-code-quiz
 * created by: Andy Kleindienst 12/15/22
 * 
 * This is a game where a user is prompted to answer questions about JavaScript
 * The user clicks on choices given to them and the score is incremented for right answers
 * There is a timer and the player loses time for every wrong answer
 * High scores are recorded, saved, and displayed 
 *****************************************************************************************/

// *********** The question, choice, and answer elements that will display ********
var question = document.getElementById("question");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var displayAnswer = document.querySelector('.answer');

// *********** Name input at the end *****************
var nameInput = document.querySelector("#nameInput");

// *********** The timer element *********************
var timerDisplay = document.getElementById('timerDisplay');

// *********** Scores **********************
var highScore = localStorage.getItem("highScore");
var finalScore = document.querySelector(".final-score");
var currentScore = document.getElementById("current-score");

// *********** Sections and areas in html to be hidden and displayed ***************
var guessForm = document.querySelector(".question-card");
var startHiddenBox = document.querySelector(".start-hidden");
var gameArea = document.querySelector(".game-area");
var endGameArea = document.querySelector(".end-game-area");
var championsArea = document.querySelector(".champions-area");
var championsList = document.querySelector(".champions-list");
var highScoreDisplay = document.getElementById("high-score");

// *********** Buttons ****************
var startButton = document.getElementById('start-button');
var submitButton = document.querySelector(".submit");
var playAgainButton = document.querySelector(".play-again");

// ************ Initial settings **************
var timerInterval = '';
var score = 0;
var myHighScore = [];
var i = -1;
var secondsLeft = 60;
startButton.setAttribute("data-state", "stopped");
currentScore.innerText = "Current Score: " + score;
endGameArea.style.display = "none";
championsArea.style.display = "none";
startHiddenBox.style.display = "none";
highScoreDisplay.innerText = "High Score: " + highScore;

// *********** The Questions ************************
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
    {
        question: "Which is the most efficient algorithm using 'Big O' notation?",
        choice1: "O(N)",
        choice2: "O(1)",
        choice3: "O(LogN)",
        choice4: "O(2N)",
        answer: "O(1)"
    },
    {
        question: "Which is the correct way to identify 'orange' in the following array: var fruits = ['apple', 'orange', 'pear];",
        choice1: "fruits[1]",
        choice2: "fruits[0]",
        choice3: "fruits[2]",
        choice4: "fruits[orange]",
        answer: "fruits[1]"
    },
    {
        question: "Which best describes JavaScript?",
        choice1: "double-threaded",
        choice2: "triple-threaded",
        choice3: "non-threaded",
        choice4: "single-threaded",
        answer: "single-threaded"
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
    },
    {
        question: "How many times will this loop run? for (let i = 0; i < 5; i++)",
        choice1: "3",
        choice2: "10",
        choice3: "15",
        choice4: "5",
        answer: "5"
    },
    {
        question: "Which of the following will create an infinite loop?",
        choice1: "for (let i = 0; i < 6; i++)",
        choice2: "for (let i = 0; i > 5; i++)",
        choice3: "for (let i = 6; i > 5; i++)",
        choice4: "for (let i = 4; i > 0; i--)",
        answer: "for (let i = 6; i > 5; i++)"
    },
    {
        question: "Which of the following is the conditon for the loop? for (let i = 0; i < 5; i++)",
        choice1: "i < 5",
        choice2: "let i = 0",
        choice3: "i++",
        choice4: "for",
        answer: "i < 5"
    },
    {
        question: "Which of the following is true?",
        choice1: "5 === '5'",
        choice2: "2 != '2'",
        choice3: "true !== false",
        choice4: "5 == 'five'",
        answer: "2 != '2'"
    },
    {
        question: "Which of the following is NOT correct syntax for writing a function?",
        choice1: "function newFunc() { console.log('hello!) }",
        choice2: "var newFunc = function() { console.log('hello!) }",
        choice3: "var function() = newFunc { console.log('hello') }",
        choice4: "var newFunc = () => { console.log('hello') }",
        answer: "var function() = newFunc { console.log('hello') }"
    },
    {
        question: "For the variable 'let x=5', which of the following will satisfy the conditions?",
        choice1: "if (x > 1 && x < 4)",
        choice2: "if (x > 1 || x < 4)",
        choice3: "if (x < 1 || x < 4)",
        choice4: "if (x > 5 && x < 10)",
        answer: "if (x > 1 || x < 4)"
    },
    {
        question: "Which of the following means 'Not A Number'?",
        choice1: "undefined",
        choice2: "NaN",
        choice3: "null",
        choice4: "false",
        answer: "NaN"
    },
    {
        question: "Which of the following will return NaN when called?",
        choice1: "var num = 5 + '5'",
        choice2: "var num = 'fifty' + '5'",
        choice3: "var num = null + 5",
        choice4: "var num = 5 + undefined",
        answer: "var num = 5 + undefined"
    },
    {
        question: "Which of the following means 'strict equality'?",
        choice1: "===",
        choice2: "==",
        choice3: "!==",
        choice4: "=",
        answer: "==="
    },
    {
        question: "What will be returned when the following is logged in the console: [22, 24] === [22, 24]?",
        choice1: "false",
        choice2: "true",
        choice3: "undefined",
        choice4: "NaN",
        answer: "false"
    },
    {
        question: "Which of the following array method will add a value to the BEGINING of an array?",
        choice1: ".shift()",
        choice2: ".unshift()",
        choice3: ".pop()",
        choice4: ".push()",
        answer: ".unshift()"
    }
];

// ***************** The Functions *******************************
/* PlayGame() fires after the start button is pressed. 
It resets the initial settings for variables and area displays. 
It toggles between "start" and "reset" by setting the data-state to "running" or "stopped". 
If the button is pressed while the state is "running", it will clear the timer and score and  timerInterval and no score will be saved. 
If it is pressed while the state is "stopped", it will initialize a timer and display the questions. 
If the timer runs out it will run finalScoreDisplay() and move the user to a new screen. 
The score of the current game will be checked against the high score and saved in the highScore variable if it is larger */

function playGame() {
    championsList.innerHTML = "";
    championsArea.style.display = "none";
    startHiddenBox.style.display = "none";
    gameArea.style.display = "contents";
    highScore = localStorage.getItem("highScore");
    highScoreDisplay.innerText = "High Score: " + highScore;
    if (startButton.dataset.state === "running") {
        console.log("stopped the game")
        startButton.setAttribute("data-state", "stopped");
        startButton.style.backgroundColor = "#61E786";
        startButton.innerText = "Start";
        clearInterval(timerInterval);
        score = 0;
        currentScore.innerText = "Current Score: " + score;
        secondsLeft = 60;
        i = -1;
        timerDisplay.innerText = "Time Left: " + secondsLeft;

    } else {
        startHiddenBox.style.display = "contents";
        nextQuestion()
        displayAnswer.innerText = "";
        timerInterval = setInterval(function () {
            if (startButton.dataset.state === "stopped") {
                console.log("starting the game");
                startButton.setAttribute("data-state", "running");
                startButton.style.backgroundColor = "red";
                startButton.innerText = "Reset";
            }
            secondsLeft--;
            timerDisplay.innerText = "Time Left: " + secondsLeft;
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

/* rightAnswer() and wrongAnswer() fire when one of the conditions is fulfilled in the checkAnswer() functions.
They will either increment the score by 45 or decrement the time left by 5 seconds.
Then they will fire nextQuestion(), which will take you to the next quesion
*/

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

/* The isLastQuestion() function checks to see if the current value of i is equal to the length of the array of questions
If it returns true, it fires finalScoreDisplay(), which will take you to a new screen */
function isLastQuestion() {
    if (i === questions.length) {
        finalScoreDisplay();
    }
}
/* The checkAnswer() function checks the value of the choice selected against the value of the answer
It fires isLastQuestion() before checking the values.
If it returns true, it fires rightAnswer() and if it is false it fires wrongAnswer()
*/

function checkAnswer1() {
    isLastQuestion()
    if (questions[i].choice1 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()

    }
}

function checkAnswer2() {
    isLastQuestion()
    if (questions[i].choice2 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
}

function checkAnswer3() {
    isLastQuestion()
    if (questions[i].choice3 === questions[i].answer) {
        rightAnswer()
    } else {
        wrongAnswer()

    }
}

function checkAnswer4() {
    isLastQuestion()
    if (questions[i].choice4 === questions[i].answer) {
        rightAnswer()

    } else {
        wrongAnswer()
    }
}

/* nextQuestion() increments the global value of i by one.
It checks to see if it will be greater than the number of questions that exist in the questions array. 
It dislays the values of question[i] for the user on the screen.
*/
function nextQuestion() {
    i++;
    if (i === questions.length) {
        isLastQuestion()
    } else {
        question.innerText = questions[i].question;
        choice1.innerText = questions[i].choice1;
        choice2.innerText = questions[i].choice2;
        choice3.innerText = questions[i].choice3;
        choice4.innerText = questions[i].choice4;
        return i;
    }
}

/* finalScoreDisplay() moves the user to a new display.
The questions are no longer visible and gameplay is over. */
function finalScoreDisplay() {
    gameArea.style.display = "none";
    endGameArea.style.display = "contents";
    finalScore.innerText = "Your final score was: " + score;
    localStorage.setItem("highScore", score);
}

/* setHighScore() sets the current score of the game to localStorage.
It captures the users name input and score and stores it as JSON.
createChampionsList() creates the HTML elements on the page and sets the values from localStorage to them */
function setHighScore() {
    myHighScore = JSON.parse(localStorage.getItem("playerScore"));
    var myInitials = nameInput.value;
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

// Event Listeners for buttons and choices 
startButton.addEventListener("click", playGame);
choice1.addEventListener("click", checkAnswer1);
choice2.addEventListener("click", checkAnswer2);
choice3.addEventListener("click", checkAnswer3);
choice4.addEventListener("click", checkAnswer4);
submitButton.addEventListener("click", setHighScore)
playAgainButton.addEventListener("click", playGame)