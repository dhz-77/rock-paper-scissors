"use strict";

console.log("Test HTML to JS link: OK");

function getComputerChoice() {

    function getRandomFloat() {
        return Math.random();
    }

    const randomFloat =  getRandomFloat();
    console.log("Computer random float: " + randomFloat); 
    
    if (randomFloat >= 0 && randomFloat < (1/3)) {
        return "rock";
    }
    else if (randomFloat >= 1/3 && randomFloat < (2/3)){
        return "paper";
    } else { // implicitly >= 2/3 && < 3/3
        return "scissors";
    }

}

function getHumanChoice() {

    const humanChoice = prompt("Rock, paper or scissors?");

    if (   humanChoice === null // player clicks "cancel"
        || humanChoice.toLowerCase() === "rock"
        || humanChoice.toLowerCase() === "paper"
        || humanChoice.toLowerCase() === "scissors") {
        return humanChoice;
    } else {
        return "No valid input.";
    }
}

console.log(playGame());

function playGame() { // play 5 rounds, keep track of scores, declare winner
    
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;

    for (let i = 1; i <= 5; i++) {
        const message = "Round " + i;
        console.log(message);

        humanSelection = getHumanChoice();
        if (humanSelection === null) {
            console.log("Game cancelled by user.")
            break;
        }

        else if (humanSelection === "No valid input.") {
            console.log("? No valid input. Please try again. ?")
            i--; // reset iteration 
            continue; // skip this iteration
        }

        console.log("Human choice: " + humanSelection);

        const computerSelection = getComputerChoice();
        console.log("Computer choice: " + computerSelection);

        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanSelection !== null) {
        console.log(printScores());
    }

    function printScores() {
        console.log("** Game Over **")
        console.log("Human score: " + humanScore)
        console.log("Computer score: " + computerScore)

        if (humanScore > computerScore) {
            return "** You won the game! **"
        } else {
            return "** You loose the game. **"
        }
    }

    function playRound(humanChoice, computerChoice) {
        const hChoice = humanChoice.toLowerCase();

        if (hChoice === computerChoice) {
            return "--> It's a tie. No one wins."
        }

        else if (hChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "--> You win! Rock beats Scissors."
        }

        else if (hChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return "--> You win! Paper beats rock."
        }

        else if (hChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "--> You win! Scissors beats paper."
        }

        else if (hChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return "--> You loose! Paper beats rock."
        }

        else if (hChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return "--> You loose! Scissors beats paper."
        }

        else if (hChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return "--> You loose! Rock beats scissors."
        }
    }
}