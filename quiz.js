
const categories = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Books" },
    { id: 11, name: "Film" },
    { id: 12, name: "Music" },
    { id: 15, name: "Video Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Computer Science" },
    { id: 19, name: "Mathematics" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 27, name: "Animals" }
];
const categoryGrid = document.getElementById("category-grid");
const categoryScreen = document.getElementById("category-screen");
const difficultyScreen = document.getElementById("difficulty-screen");
const quizScreen = document.getElementById("quiz-screen");

const categoryName = document.getElementById("category-name");
const progress = document.getElementById("quiz-progress");
const difficultyTag = document.getElementById("quiz-difficulty-tag");

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
let category = "";
let difficulty = "";
let questions = [];
let current = 0;

// Show Categories 
categories.forEach(cat => {

    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `<h3>${cat.name}</h3>`;
    card.onclick = function () {
        category = cat.id;
        categoryName.textContent = cat.name;
        categoryScreen.classList.add("hidden");
        difficultyScreen.classList.remove("hidden");
    };
    categoryGrid.appendChild(card);
});

//Back
document.getElementById("back-btn").onclick = function () {

    difficultyScreen.classList.add("hidden");
    categoryScreen.classList.remove("hidden");
};

//Difficulty 

document.querySelectorAll(".difficulty-btn").forEach(button => {

    button.onclick = function () {

        difficulty = this.dataset.difficulty;
        getQuestions();
    };
});

// API
async function getQuestions() {

    try {
        const response = await fetch(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        questions = data.results;
       current = 0;
        difficultyScreen.classList.add("hidden");
        quizScreen.classList.remove("hidden");
        showQuestion();
    }
    catch(error){
        alert("Couldn't load quiz.");
        console.log(error);
    }
}
//  Show Question 
function showQuestion() {

    const q = questions[current];
    progress.textContent = `Question ${current + 1} / ${questions.length}`;
    difficultyTag.textContent = difficulty;
    questionText.innerHTML = q.question;
    optionsList.innerHTML = "";
    // Hide the next button
    nextBtn.style.display = "none";
    let answers = [
        q.correct_answer,
        ...q.incorrect_answers
    ];
    answers.sort(() => Math.random() - 0.5);
    answers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.innerHTML = answer;
        button.onclick = function () {
            document.querySelectorAll(".option-btn").forEach(btn => {
                btn.disabled = true;
            });
            // Show the next button
            nextBtn.style.display = "block";
        };
        optionsList.appendChild(button);
    });
}
