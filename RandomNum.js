let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum)

function checkGuess() {
    let inputNum = parseInt(userInput.value);
    if (inputNum > randomNum){
        gameResult.textContent = " Too high! Try again.";
        gameResult.style.backgroundColor = "#193479";
    }
     else if (inputNum < randomNum){
        gameResult.textContent = " Too low! Try again.";
        gameResult.style.backgroundColor = "#193479";
    }
    else if (inputNum === randomNum){
        gameResult.textContent = "Congratulations, You got it right.";
        gameResult.style.backgroundColor = "#33d456";
    }
    else{
        gameResult.textContent = "Provide a valid Input.";
        gameResult.style.backgroundColor = "#e74032";
    }

}