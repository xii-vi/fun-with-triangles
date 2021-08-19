var side = document.querySelectorAll('.side-length');
var calBtn = document.querySelector("#calculate-a");
var outputBox = document.querySelector("#output");


function calArea() {
    outputBox.innerText = "The Area is " + 0.5*(Number(side[0].value) + Number(side[1].value)).toFixed(2);
}

calBtn.addEventListener('click', calArea);