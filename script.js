// script.js
var footerEl = document.getElementById("footer");
var ulEl = document.getElementById("ul-element");
var startBtn = document.getElementById("start");
var h1El = document.querySelector(".h1")
var currentIndex = 0;
let time = 60;
var javascriptQuestions = [
    {
        question: "What does the 'DOM' stand for in JavaScript?",
        correctAnswer: "Document Object Model",
        allAnswers: ["Document Object Model", "Data Object Model", "Dynamic Object Manipulation", "Document Order Model"],
    },
    {
        question: "How can you define a variable with block scope in JavaScript?",
        correctAnswer: "by using the `let` or `const` keywords",
        allAnswers: ["by using the `var` keyword", "by using the `let` or `const` keywords", "by using the `function` keyword", "by using the `block` keyword"],
    },
    {
        question: "What is the purpose of the `JSON.parse()` method in JavaScript?",
        correctAnswer: "It parses a JSON string and converts it into a JavaScript object.",
        allAnswers: ["It formats JSON data for display.", "It validates JSON data.", "It parses a JSON string and converts it into a JavaScript object.", "It creates a JSON string from a JavaScript object."],
    },
    {
        question: "In JavaScript, what does the `===` operator do?",
        correctAnswer: "It checks for strict equality, comparing both value and data type.",
        allAnswers: ["It assigns a value to a variable.", "It checks for strict equality, comparing both value and data type.", "It performs a bitwise operation.", "It checks for loose equality, comparing only values."],
    },
    {
        question: "What is the purpose of the `forEach` method in JavaScript?",
        correctAnswer: "It iterates over the elements of an array and executes a provided function for each element.",
        allAnswers: ["It sorts the elements of an array.", "It filters the elements of an array based on a condition.", "It iterates over the elements of an array and executes a provided function for each element.", "It reverses the elements of an array."],
    },

];
function startquiz() {
    console.log("i am clicking the start button")
    toggleSections("section-2", "section-1");
    time = 60;
    // start the timer
    const element = document.getElementById("timer");
    var setTimer = setInterval(function () {
        element.innerHTML = "Timer : " + time;
        time--;
        if (time <= 0) {
            element.innerHTML = "Timer : " + 0;
            clearInterval(setTimer)
        }
    }, 1000);
    displayQuestions();
}
function displayQuestions() {

    ulEl.innerHTML = "";
    var question = javascriptQuestions[currentIndex].question;
    var answers = javascriptQuestions[currentIndex].allAnswers;
    h1El.textContent = question;
    for (let i = 0; i < answers.length; i++) {
        var liEl = document.createElement("li");
        liEl.className = "button";
        liEl.innerHTML = answers[i];
        liEl.onclick = displayAnswers;
        ulEl.appendChild(liEl)
    }

};

function displayAnswers(event) {
    console.log(event.target.textContent);
    if (event.target.textContent == javascriptQuestions[currentIndex].correctAnswer) {
        console.log("correct");
    } else {
        console.log("incorrect");
        time -= 10;

    }

    currentIndex++;
    if (currentIndex > 4) {
        toggleSections("section-3", "section-2");
        document.getElementById("score").textContent = `your final score is ${time}`;
        
    } else {
        displayQuestions();
    }

}

document.getElementById("Go-Back-Button").addEventListener("click", function () {
    toggleSections("section-2", "section-4");
});

document.getElementById("Clear-Scores-Button").addEventListener("click", function () {
    document.getElementById('scoresCleared').style.display = "block";
});
// hide and show page sections
function toggleSections(showId, hideId) {
    document.getElementById(showId).style.display = "block";
    document.getElementById(hideId).style.display = "none";
}

startBtn.addEventListener('click', startquiz)

if (timer === 0) {
    EndQuiz();
}