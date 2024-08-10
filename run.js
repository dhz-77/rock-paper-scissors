"use strict";

console.log("Test HTML to JS link: OK");

let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

const wrapper = document.querySelector("#wrapper");
const results = document.querySelector("#results");
const scores = document.querySelector("#scores");
const final = document.querySelector("#final");
const restart = document.querySelector("#restart");
scores.setAttribute("style", "white-space: pre-line;"); // enable line breaks 
final.setAttribute("style", "white-space: pre-line;"); 

const roundTitle = document.createElement("h2");
const resultTitle = document.createElement("p");
const scoreTitle = document.createElement("p");
const winnerTitle = document.createElement("p");
const restartButton = document.createElement("button");

resultTitle.setAttribute("style", "width: 250px; font-weight: bold; border: solid black; border-radius: 2px; padding: 20px 5px;");
scoreTitle.setAttribute("style", "width: 120px; border: solid black; border-radius: 2px; padding: 20px 5px;");
restartButton.setAttribute("id", "restartBtn");
restartButton.textContent = "Restart game";
restart.appendChild(restartButton);
restartButton.style.display = "none";

let buttons = document.querySelectorAll("#wrapper button");

buttons.forEach((item) => {
    item.addEventListener('click', (event) => {
    
        console.dir(event.target.id);
        const humanSelection = event.target.id;
        const computerSelection = getComputerChoice();
        
        roundTitle.textContent = "Round " + roundCounter;
        results.appendChild(roundTitle);
    
        playRound(humanSelection, computerSelection);
    
        scoreTitle.textContent= "Your score: " + humanScore + '\n' 
                              + "Computer score: " + computerScore;
        scores.appendChild(scoreTitle);
    
        roundCounter++;
        
        if (humanScore === 5 || computerScore === 5) {

            buttons.forEach((item) => {
                    item.disabled = true;
            })
    
            printScores();
            final.appendChild(winnerTitle);
    
            restartButton.style.display = "unset"

            humanScore = 0;
            computerScore = 0;
            roundCounter = 1;
        }
    
        restartButton.addEventListener("click", (event) => {
    
            roundTitle.remove();
            resultTitle.remove();
            scoreTitle.remove();
            winnerTitle.remove();
            restartButton.style.display = "none"
    
            buttons.forEach((item) => {
                item.disabled = false;
            })
        })
    })
});

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {           
        resultTitle.textContent = "--> It's a tie.";
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        resultTitle.textContent = "--> You win! Rock beats Scissors.";
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultTitle.textContent = "--> You win! Paper beats rock.";
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultTitle.textContent = "--> You win! Scissors beats paper.";
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultTitle.textContent = "--> You loose! Paper beats rock.";
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultTitle.textContent = "--> You loose! Scissors beats paper.";
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultTitle.textContent = "--> You loose! Rock beats scissors.";
    }

    results.appendChild(resultTitle);
}

function printScores() {
  
    if (humanScore > computerScore) {
        winnerTitle.textContent = "** Game Over **" + "\n" + "** You won the game! **";
    } else if (humanScore == computerScore) {
        winnerTitle.textContent = "** Game Over **" + "\n" + "** It's a tie. No one wins! **";
    } else {
        winnerTitle.textContent = "** Game Over **" + "\n" + "** You loose the game! **";
    }
}


function getComputerChoice() {

    function getRandomFloat() {
        return Math.random();
    }

    const randomFloat =  getRandomFloat();
    // console.log("Computer random float: " + randomFloat); 
    
    if (randomFloat >= 0 && randomFloat < (1/3)) {
        return "rock";
    }
    else if (randomFloat >= 1/3 && randomFloat < (2/3)){
        return "paper";
    } else { // implicitly >= 2/3 && < 3/3
        return "scissors";
    }
}