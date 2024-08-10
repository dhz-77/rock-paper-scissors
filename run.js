"use strict";

console.log("Test HTML to JS link: OK");

const wrapper = document.querySelector("#wrapper");

let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

const results = document.querySelector("#results");
const scores = document.querySelector("#scores");
scores.setAttribute("style", "white-space: pre-line;"); // enable line breaks 

const final = document.querySelector("#final");
final.setAttribute("style", "white-space: pre-line;"); 

const buttonEnd = document.querySelector("#buttonEnd");

const h2 = document.createElement("h2");
const para = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

wrapper.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return; // prevent event from firing if div element is clicked
    }

        //console.dir(event.target.id);

    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();

        /*para.textContent = "Your choice: " + humanSelection;
        para.textContent = "Computer choice: " + computerSelection;
        results.appendChild(para);*/
    
    h2.textContent = "Round " + roundCounter;
    results.appendChild(h2);

    playRound(humanSelection, computerSelection);

    para2.textContent= "Your score: " + humanScore + '\n' 
                 + "Computer score: " + computerScore;
    scores.appendChild(para2);

    roundCounter++;
    
    if (humanScore === 5 || computerScore === 5) {

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        printScores();
        final.appendChild(para3);

        humanScore = 0;
        computerScore = 0;
        roundCounter = 1;

        const restartButton = document.createElement("button");
        restartButton.setAttribute("id", "restartBtn");
        restartButton.textContent = "Restart game";
        buttonEnd.appendChild(restartButton);
    }

    buttonEnd.addEventListener("click", (event) => {
        const isButton = event.target.nodeName === 'BUTTON';

        if (!isButton) {
        return; // prevent event from firing if div element is clicked
        }

        h2.remove();
        para.remove();
        para2.remove();
        para3.remove();
        document.querySelector("#restartBtn").remove();

        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    })

});





//playGame();

//function playGame() { // play 5 rounds, keep track of scores, declare winner
    
    /*for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);*/

        //const humanSelection = getHumanChoice();
        //const computerSelection = getComputerChoice();

        /*if (humanSelection === null) {
            console.log("Game cancelled by user.")
            //break;
        }

        else if (humanSelection === false) {
            console.log("? No valid input. Please try again. ?")
            //i--; // reset iteration 
            //continue;
        }*/

        //console.log("Human choice: " + humanSelection);
        //console.log("Computer choice: " + computerSelection);

        //playRound(humanSelection, computerSelection);

        /*if (i === 5) {
            printScores();
        }*/
    //}

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {           
            para.textContent = "--> It's a tie.";
        }

        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            para.textContent = "--> You win! Rock beats Scissors.";
        }

        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            para.textContent = "--> You win! Paper beats rock.";
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            para.textContent = "--> You win! Scissors beats paper.";
        }

        else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            para.textContent = "--> You loose! Paper beats rock.";
        }

        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            para.textContent = "--> You loose! Scissors beats paper.";
        }

        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            para.textContent = "--> You loose! Rock beats scissors.";
        }

        results.appendChild(para);
    }

    function printScores() {
  
        if (humanScore > computerScore) {
            para3.textContent = "** Game Over **" + "\n" + "** You won the game! **";
        } else if (humanScore == computerScore) {
            para3.textContent = "** Game Over **" + "\n" + "** It's a tie. No one wins! **";
        } else {
            para3.textContent = "** Game Over **" + "\n" + "** You loose the game! **";
        }
    }
//}

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

/*function getHumanChoice() {

    const humanChoice = prompt("Rock, paper or scissors?");

    if (   humanChoice === null // player clicks "cancel"
        || humanChoice.toLowerCase() === "rock"
        || humanChoice.toLowerCase() === "paper"
        || humanChoice.toLowerCase() === "scissors") {
        return humanChoice;
    } else {
        return false;
    }
}*/