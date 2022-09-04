const quizForm = document.querySelector(".questions-form");
const checkBtn = document.querySelector("#check-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°","right angled","one right angle","12, 16, 20","45°"];


function quizHandler(){
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);

    for (let value of formResults.values()){
        if (value === correctAnswers[index]){
            score +=1;
        }
        index +=1;
    }
    outputEl.innerText = "Your Score is " + String(score);
}


checkBtn.addEventListener("click",quizHandler);