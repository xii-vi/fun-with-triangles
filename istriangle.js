var sides = document.querySelectorAll(".input-angle");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector("#output");

function sumOfSides(a1, a2, a3) {
    var sum = a1 + a2 + a3;
    return sum;
}

function isTriangle() {
    var sum = sumOfSides(Number(sides[0].value), Number(sides[1].value), Number(sides[2].value));

    if (sum === 0) {
        output.innerText = "Please Input valid numbers";
    } else if (sum === 180) {
        output.innerText = "YAY!! The angles form a triangle";
    } else {
        output.innerText = "Uh, Not this time, they don't form a triangle";
    }
}

checkBtn.addEventListener('click', isTriangle);