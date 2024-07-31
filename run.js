"use strict";

console.log("Test HTML to JS link: OK");

function getComputerChoice() {
    // Math.random() returns a random number equal to 0 and less than 1
    function getRandomFloat() {
        return Math.random();
    }

    // This value should not change within a run, so we can check that our 
    // main algorithm further below takes this exact float number and works 
    // as intended
    const randomFloat =  getRandomFloat(); 
    console.log("Computer random float: " + randomFloat); 
    // For example: returns 0.55

    // main algorithm:

    // Create 3 different sections between 0 and 1, each representing 
    // "rock", "paper" or "scissors" (0-1/3), (1/3 - 2/3), (2/3 - 3/3) 
    // (but excluding 3/3)
   
    // Create an if statement for each section and corresponding string
    // and return "rock", "paper" or "scissors"

    // Use the constant "randomFloat" number (e.g. 0.55) from above, and do not 
    // call the getRandomFloat() function again, otherwise a new, different number 
    // would be generated and we could not justify if the code works as intended
    
    if (randomFloat >= 0 && randomFloat < (1/3)) {
        return "rock";
    }
    else if (randomFloat >= 1/3 && randomFloat < (2/3)){
        return "paper";
    } else { // implicitly means >= 2/3 && < 3/3
        return "scissors";
    }

}

function getHumanChoice() {
    // write a function that takes the user choice and returns it

    // create a pop up window which prompts the user to input text and
    // return a valid choice
    const humanChoice = prompt("Rock, paper or scissors?");

    if (humanChoice.toLowerCase() === "rock"
        || humanChoice.toLowerCase() === "paper"
        || humanChoice.toLowerCase() === "scissors") {
        return humanChoice;
    } else {
        return "No valid input. Please try again.";
    }
}

console.log(playGame());

// The game will play 5 rounds. Write a function that calls playRound 
// to play 5 rounds, keeps track of the scores and declares a winner 
// at the end.

function playGame() {
    // Keep track of players score in global scope
    // Value to be reassigned over time, so we use "let":
    let humanScore = 0;
    let computerScore = 0;
    //max number of iterations in the loop
    let max = 5;

    console.log(roundLoop());
    console.log(printScores());

    function roundLoop() {
        for (let i = 0; i < max; i++) {
            const humanSelection = getHumanChoice();
            if (humanSelection === "No valid input. Please try again.") {
                console.log(humanSelection)
                max++; // add one iteration to the max number of iterations in the loop
                continue; // skip this iteration
            }
            const computerSelection = getComputerChoice();

            console.log(playRound(humanSelection, computerSelection));
        }
    }

    function printScores() {
        console.log("Human score: " + humanScore)
        console.log("Computer score: " + computerScore)

        if (humanScore > computerScore) {
            return "You won the game!"
        } else {
            return "You loose the game."
        }
    }

    // write a function that takes the human and computer player choices
    // as arguments, plays a single round, increments the round winner’s 
    // score and logs a winner announcement.
    function playRound(humanChoice, computerChoice) {
        const hChoice = humanChoice.toLowerCase();

        console.log("Human choice: " + hChoice);
        console.log("Computer choice: " + computerChoice);

        if (hChoice === computerChoice) {
            return "It's a tie. No one wins."
        }

        else if (hChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats Scissors."
        }

        else if (hChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats rock."
        }

        else if (hChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beats paper."
        }

        else if (hChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return "You loose! Paper beats rock."
        }

        else if (hChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return "You loose! Scissors beats paper."
        }

        else if (hChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return "You loose! Rock beats scissors."
        }
    }
}