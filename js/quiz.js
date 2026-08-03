let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem("darkmode", null)
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});
const fact = document.getElementById("fact");
const factButton = document.getElementById('nw-fact');

const categories = [
    {id:9,name:"General Knowledge"},
    {id:10,name:"Books"},
    {id:11,name:"Film"},
    {id:12,name:"Music"},
    {id:15,name:"Video Games"},
    {id:17,name:"Science & Nature"},
    {id:18,name:"Computer Science"},
    {id:19,name:"Mathematics"},
    {id:21,name:"Sports"},
    {id:22,name:"Geography"},
    {id:23,name:"History"},
    {id:27,name:"Animals"}
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
let ques = 0;

for(let i=0;i<categories.length;i++){

    const card=document.createElement("div");
    card.className="category-card";
    card.innerHTML="<h3>"+categories[i].name+"</h3>";
    card.onclick=function(){
        category=categories[i].id;
        categoryName.textContent=categories[i].name;
        categoryScreen.classList.add("hidden");
        difficultyScreen.classList.remove("hidden");
    };
    categoryGrid.appendChild(card);
}

document.getElementById("back-btn").onclick=function(){
    difficultyScreen.classList.add("hidden");
    categoryScreen.classList.remove("hidden");

};

const difficultyButtons=document.querySelectorAll(".difficulty-btn");
difficultyButtons.forEach(function(button){
    button.onclick=function(){
        difficulty=this.dataset.difficulty;
        getQuestions();
    };

});

async function getQuestions(){
    try{
        const response=await fetch(
            "https://opentdb.com/api.php?amount=10&category="+category+"&difficulty="+difficulty+"&type=multiple"
        );
        const data=await response.json();
        questions=data.results;
        ques=0;
        difficultyScreen.classList.add("hidden");
        quizScreen.classList.remove("hidden");
        showQuestion();}

    catch(error){
        alert("Couldn't load quiz.");
        console.log(error);}
}

function showQuestion() {

    let question = questions[ques];

    progress.innerHTML = "Question " + (ques + 1) + " / " + questions.length;

    difficultyTag.innerHTML = difficulty;

    questionText.innerHTML = question.question;

    optionsList.innerHTML = "";

    nextBtn.style.display = "none";

    let answers = question.incorrect_answers;

    answers.push(question.correct_answer);

    answers.sort(function () {
        return Math.random() - 0.5;
    });

for (let i = 0; i < answers.length; i++) {

    let button = document.createElement("button");
    button.className = "option-btn";
    button.innerHTML = answers[i];

    button.onclick = function () {
    nextBtn.style.display = "block";

    let buttons = document.getElementsByClassName("option-btn");

    for (let c = 0; c< buttons.length; c++) {
        buttons[c].disabled = true;}
    };
        optionsList.appendChild(button);
    }    
    
} 

nextBtn.onclick=function(){
    ques++;
    showQuestion();    };