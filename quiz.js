var quizForm = document.querySelector('.quiz-form');
var submitAnswer = document.querySelector("#scored");
var output = document.querySelector("#output");

var correctAns = ["Obtuse","Acute","Isoceles","30","Isoceles"];

function whatsScore(){
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAns[index]) {
            score = score+1;
        } 
        index++;
    }
    output.innerText = "Your Score is " + score; 
}


submitAnswer.addEventListener('click',whatsScore);