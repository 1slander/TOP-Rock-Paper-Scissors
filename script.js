//THE ODIN PROJECT JAVASCRIPT FOUNDATIONS
//PROJECT 1
"use strict";

//Variables
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

let playerPoints = document.getElementById("playerScorePoints");
let computerPoints = document.getElementById("computerScorePoints");

let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");

let engGameMessage = document.getElementsByClassName("end-message");
let message = document.getElementById("message");
let restartBtn = document.getElementsByClassName("btn-restart");

// Event Listener

rockBtn.addEventListener("click", function () {
  let playerSelection = "rock";

  playRound(playerSelection, getComputerChoice());
  console.log(playerSelection, getComputerChoice());
});
paperBtn.addEventListener("click", function () {
  let playerSelection = "paper";

  playRound(playerSelection, getComputerChoice());
  console.log(playerSelection, getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
  let playerSelection = "scissors";

  playRound(playerSelection, getComputerChoice());
  console.log(playerSelection, getComputerChoice());
});
// computer randomly selects one of three option Math.floor(Math.random()* 3)

function getComputerChoice() {
  const RandomComputerChoice =
    choices[Math.round(Math.random() * choices.length)];
  return RandomComputerChoice;
}

// ask for player selection (case-insensitive)

// function getPlayerChoice() {
//   const playerChoice = prompt(
//     "Choose your weapon: Rock, Paper or Scissors?"
//   ).toLocaleLowerCase();
//   return playerChoice;
// }

// play a round comparing computer vs player selection and return who is the winner.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You Win! Rock beats Scissor");

    playerScorePts();
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You Win! Paper beats Rock");
    playerScorePts();
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You Win! Scissors beats Paper");
    playerScorePts();
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection} `);
    computerScorePts();
  }
}
// Scoreboard Update Function
function playerScorePts() {
  playerScore += 1;
  playerPoints.innerText = playerScore;
}

function computerScorePts() {
  computerScore += 1;
  computerPoints.innerText = computerScore;
}
// play 5 rounds where the score are kept and reports the winner or loser at the end.

// function game (){

// let endGameMessage = "";
// //loop for 5 games, track round and wins
// for(let i=0; i<5; i++){
//   const playerSelection = getPlayerChoice();
//   const computerSelection = getComputerChoice ();

// //Play Round
//   playRound(playerSelection, computerSelection);
//   console.log(`Player win totals: ${playerScore}`);
//   console.log(`Computer win totals: ${computerScore}`);

// }
// // determine who won the five round set
// if(playerScore > computerScore){
//   endGameMessage = " YOU WIN!";
// } else if (playerScore === computerScore){
//   endGameMessage = "TIE!";
// } else {
//   endGameMessage = "COMPUTER WINS!";
// }

// console.log(`End of the game: ${endGameMessage}`);

// }
// game();
