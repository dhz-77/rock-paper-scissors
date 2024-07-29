"use strict";

console.log("test");

function getComputerChoice() {
    // Math.random() returns a random number equal to 0 and less than 1
    function getRandomFloat() {
        return Math.random();
    }

    // This value should not change within a run, so we can check that our 
    // main algorithm further below takes this exact float number and works 
    // as intended
    const randomFloat =  getRandomFloat(); 
    console.log(randomFloat); 
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

console.log(getComputerChoice());
