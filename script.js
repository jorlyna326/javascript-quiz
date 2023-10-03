// script.js

document.getElementById('Start Quiz').addEventListener('click', function () {
    toggleSections('section-1', 'section-2');
});

document.getElementById('View High Scores').addEventListener('click', function () {
    toggleSections('section-4', 'section-2');
});

document.getElementById('Go-Back-Button').addEventListener('click', function () {
    toggleSections('section-2', 'section-4');
});

document.getElementById('Clear-Scores-Button').addEventListener('click', function () {
    document.getElementById('scoresCleared').style.display = 'block';
});

function toggleSections(showId, hideId) {
    document.getElementById(showId).style.display = 'block';
    document.getElementById(hideId).style.display = "none";
}
h1 = document.queryselector("section-2 h1");
h1.textcontent = javascriptQuestions[0].question;

const javascriptQuestions = [
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

If(timer === 0)
{
    EndQuiz();
}