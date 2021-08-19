var side = document.querySelectorAll('.side-length');
var calBtn = document.querySelector("#calculate-h");
var outputBox = document.querySelector("#output");

function sumOfSides(a, b) {
    var sumOfSqr = a * a + b * b;
    return sumOfSqr;
}

function calHypo() {
    var sumOfSqrs = sumOfSides(Number(side[0].value), Number(side[1].value));
    
    outputBox.innerText = "The hypotenuse is " + Math.sqrt(sumOfSqrs).toFixed(2);
}

calBtn.addEventListener('click', calHypo);