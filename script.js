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

let endGameMessage = document.querySelector(".end-message");
let message = document.querySelector("#message");
let restartBtn = document.querySelector(".btn-restart");

// Event Listener

rockBtn.addEventListener("click", function () {
  let playerSelection = "rock";
  //console.log(playerSelection);
  playRound(playerSelection, getComputerChoice());
  //console.log(getComputerChoice());
});
paperBtn.addEventListener("click", function () {
  let playerSelection = "paper";

  playRound(playerSelection, getComputerChoice());
  //console.log(playerSelection, getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
  let playerSelection = "scissors";

  playRound(playerSelection, getComputerChoice());
  //console.log(playerSelection, getComputerChoice());
});

restartBtn.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  playerPoints.innerText = playerScore;
  computerPoints.innerText = computerScore;
  rockBtn.style.display = "initial";
  paperBtn.style.display = "initial";
  scissorsBtn.style.display = "initial";
  playerPoints.style.backgroundColor = "white";
  playerPoints.style.color = "black";
  computerPoints.style.backgroundColor = "white";
  computerPoints.style.color = "black";
  restartBtn.style.display = "none";
  message.style.display = "none";
  endGameMessage.style.display = "none";
});

// computer randomly selects one of three option Math.floor(Math.random()* 3)

function getComputerChoice() {
  const RandomComputerChoice =
    choices[Math.round(Math.random() * choices.length)];
  console.log(RandomComputerChoice);
  return RandomComputerChoice;
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

// play a round comparing computer vs player selection and return who is the winner.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie");
    endGameMessage.style.display = "block";
    message.innerText = "TIE!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You Win! Rock beats Scissor");
    endGameMessage.style.display = "block";
    message.innerText = "YOU WIN THIS ROUND!";

    playerScorePts();
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You Win! Paper beats Rock");
    endGameMessage.style.display = "block";
    message.innerText = "YOU WIN THIS ROUND!";
    playerScorePts();
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You Win! Scissors beats Paper");
    endGameMessage.style.display = "block";
    message.innerText = "YOU WIN THIS ROUND!";
    playerScorePts();
  } else {
    endGameMessage.style.display = "block";
    message.innerText = "YOU LOSE THIS ROUND!";
    console.log(`You Lose! ${computerSelection} beats ${playerSelection} `);
    computerScorePts();
  }
  // Add rounds limit
  if (playerScore === 5) {
    restartBtn.style.display = "block";
    message.innerText = "You WIN!";

    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    playerPoints.style.backgroundColor = "green";
    playerPoints.style.color = "white";
    computerPoints.style.backgroundColor = "red";
    computerPoints.style.color = "white";
  } else if (computerScore === 5) {
    restartBtn.style.display = "block";
    message.innerText = "YOU LOSE!";

    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    playerPoints.style.backgroundColor = "red";
    playerPoints.style.color = "white";
    computerPoints.style.backgroundColor = "green";
    computerPoints.style.color = "white";
  } else {
    rockBtn.style.display = "initial";
    paperBtn.style.display = "initial";
    scissorsBtn.style.display = "initial";
    playerPoints.style.backgroundColor = "white";
    playerPoints.style.color = "black";
    computerPoints.style.backgroundColor = "white";
    computerPoints.style.color = "black";
  }
}
