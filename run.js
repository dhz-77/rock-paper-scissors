"use strict";

console.log("Test HTML to JS link: OK");

playGame();

function playGame() { // play 5 rounds, keep track of scores, declare winner
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const message = "Round " + i;
        console.log(message);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === null) {
            console.log("Game cancelled by user.")
            break;
        }

        else if (humanSelection === false) {
            console.log("? No valid input. Please try again. ?")
            i--; // reset iteration 
            continue;
        }

        console.log("Human choice: " + humanSelection);
        console.log("Computer choice: " + computerSelection);

        playRound(humanSelection, computerSelection);

        if (i === 5) {
            printScores();
        }
    }

    function playRound(humanChoice, computerChoice) {
        const hChoice = humanChoice.toLowerCase();

        if (hChoice === computerChoice) {
            console.log("--> It's a tie.")
        }

        else if (hChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("--> You win! Rock beats Scissors.")
        }

        else if (hChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("--> You win! Paper beats rock.")
        }

        else if (hChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("--> You win! Scissors beats paper.")
        }

        else if (hChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("--> You loose! Paper beats rock.")
        }

        else if (hChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("--> You loose! Scissors beats paper.")
        }

        else if (hChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("--> You loose! Rock beats scissors.")
        }
    }

    function printScores() {
        console.log("** Game Over **")
        console.log("Human score: " + humanScore)
        console.log("Computer score: " + computerScore)

        if (humanScore > computerScore) {
            console.log("** You won the game! **")
        } else if (humanScore == computerScore) {
            console.log("** It's a tie. No one wins! **")
        } else {
            console.log("** You loose the game! **")
        }
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

function getHumanChoice() {

    const humanChoice = prompt("Rock, paper or scissors?");

    if (   humanChoice === null // player clicks "cancel"
        || humanChoice.toLowerCase() === "rock"
        || humanChoice.toLowerCase() === "paper"
        || humanChoice.toLowerCase() === "scissors") {
        return humanChoice;
    } else {
        return false;
    }
}