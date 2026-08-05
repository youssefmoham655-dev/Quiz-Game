## Quiz Game

Quiz Game is a website contains lots of questions in different categories like general knowledge, books, films, etc.Questions are based on multiple choice question generated from [Open trivia database](https://opentdb.com/) API, which contains lots of questions in much fields.

## Tech used
- HTML
- CSS
- JavaScript

### APIs
- [Open trivia database](https://opentdb.com/)
- [API Ninjas](https://api-ninjas.com/)


## Implementation(DEMO link)

Use DEMO link:
[Quiz game](https://quiz-game-phi-amber.vercel.app/)

## Features:

- Dark/light mode toggle
- Fetching APIs
- Navbar
- Semantic HTML5
- CSS variables
- Use of ARIA attributes
- Async functions
- Random info through [API Ninjas](https://api-ninjas.com/)

## Usage

These are some snippets of code and their explantion:

*Snippet 1*

```function showQuestion() {

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

    if (answers[i] === question.correct_answer) {
        button.dataset.correct = "true";
    }

    button.onclick = function () {
        nextBtn.style.display = "block";

        let buttons = document.getElementsByClassName("option-btn");

        for (let c = 0; c < buttons.length; c++) {
            buttons[c].disabled = true;

            if (buttons[c].dataset.correct === "true") {
                buttons[c].classList.add("correct-answer");
            }
        }

        this.classList.add("selected");

        if (this.dataset.correct === "true") {
            score++;
        } else {
            wronganswers++;
        }
    };
        optionsList.appendChild(button);
    } 
    
}
```

This code represents a function of showing questions and its order like `Question 6 / 10` and if the user clicks the right answer it displays this answer to be green and if the wrong answer to be red and displays the right answer to be green. This function also diplays the next question button after answering question.
<hr></hr>

*Snippet 2*

```
:root{
    --background-light:#4460EF;
    --container-and-navbar-color-light:white;
    --text-color-light:black;
    --Take-color-light:lightgrey;
    --nav-bar-text:#4460EF;
}
.darkmode{
    --background-light:#303030;
    --container-and-navbar-color-light:rgb(126, 125, 125);
    --text-color-light:white;
    --Take-color-light:#9c9c9c;
    --nav-bar-text:#fffff;
}
```

These lines are part of CSS, their role to define colors as variables to be easily changed to dark color when dark/light mode toggle is clicked. The variables are used through lines like this `background-color:var(--container-and-navbar-color-light);` and `color:var(--text-color-light);` in css code blocks like this(look at the last line)
```
.nav-links{
    list-style:none;
    display:flex;
    gap:20px;
    padding:15px;
    margin:0;
    justify-content:space-around;
    font-family:cursive;
    color:var(--text-color-light);
}
```
## Screenshots

![Screenshot](assets/Screenshot%20(1).png)
![Screenshot](assets/Screenshot%20(2).png)
![Screenshot](assets/Screenshot%20(3).png)
![Screenshot](assets/Screenshot%20(4).png)

## Made by

- [Youssef Mohammed](https://github.com/youssefmoham655-dev)
- [Mohammed Mouta](https://github.com/mohamedmouta)
