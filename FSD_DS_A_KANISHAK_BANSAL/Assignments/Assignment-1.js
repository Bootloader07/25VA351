const questions = [
    {
        question: "What is HTML?",
        options: ["Language", "Browser", "Computer", "Game"],
        answer: "Language"
    },
    {
        question: "What is CSS used for?",
        options: ["Styling", "Gaming", "Typing", "Calling"],
        answer: "Styling"
    },
    {
        question: "What is JavaScript?",
        options: ["Language", "Browser", "Website", "Computer"],
        answer: "Language"
    },
    {
        question: "Which tag is used for heading?",
        options: ["h1", "p", "br", "img"],
        answer: "h1"
    },
    {
        question: "Which tag is used for paragraph?",
        options: ["p", "h1", "br", "div"],
        answer: "p"
    },
    {
        question: "Which language gives style to a webpage?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Which symbol is used for an ID in CSS?",
        options: ["#", ".", "*", "&"],
        answer: "#"
    },
    {
        question: "Which symbol is used for a class in CSS?",
        options: [".", "#", "*", "&"],
        answer: "."
    },
    {
        question: "Which language makes a webpage interactive?",
        options: ["JavaScript", "HTML", "CSS", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which tag is used to add an image?",
        options: ["img", "p", "h1", "br"],
        answer: "img"
    }
];
let current = 0;
let score = 0;
let time = 30;
let timer;
function startQuiz() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;
    if (name == "" || roll == "" || section == "") {
        alert("Please enter all details");
        return;
    }
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    showQuestion();
}
function showQuestion() {
    let q = questions[current];
    document.getElementById("questionNumber").innerText =
        "Question " + (current + 1);
    document.getElementById("question").innerText =
        q.question;
    let options = "";
    for (let i = 0; i < q.options.length; i++) {
        options +=
            "<button onclick=\"checkAnswer('" +
            q.options[i] +
            "')\">" +
            q.options[i] +
            "</button><br>";
    }
    document.getElementById("options").innerHTML = options;
    startTimer();
}
function startTimer() {
    time = 30;
    clearInterval(timer);
    document.getElementById("timer").innerText =
        "Time: " + time;
    timer = setInterval(function() {
        time--;
        document.getElementById("timer").innerText =
            "Time: " + time;
        if (time == 0) {
            clearInterval(timer);
            current++;
            if (current < questions.length) {
                showQuestion();
            }
            else {
                showResult();
            }
        }
    }, 1000);
}
function checkAnswer(answer) {
    clearInterval(timer);
    if (answer == questions[current].answer) {
        score++;
    }
    nextQuestion();
}
function nextQuestion() {
    current++;
    if (current < questions.length) {
        showQuestion();
    }
    else {
        showResult();
    }
}
function showResult() {

    clearInterval(timer);

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;

    document.getElementById("quizPage").style.display = "none";

    document.getElementById("resultPage").style.display = "block";

    document.getElementById("studentInfo").innerText =
        "Name: " + name +
        " | Roll No: " + roll +
        " | Section: " + section;

    document.getElementById("score").innerText =
        "Your Marks: " + score + " / 10";
}
