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
    let humanChoice = prompt("Rock, paper or scissors?");

    if (humanChoice.toLowerCase() === "rock"
        || humanChoice.toLowerCase() === "paper"
        || humanChoice.toLowerCase() === "scissors") {
        return humanChoice.toLowerCase();
    } else {
        return "No valid input.";
    }
}

console.log("Computer choice: " + getComputerChoice());
console.log("Human choice: " + getHumanChoice());
