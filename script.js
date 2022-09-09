//THE ODIN PROJECT JAVASCRIPT FOUNDATIONS
//PROJECT 1
"use strict";
let playerScore = 0;
let computerScore = 0;

// computer randomly selects one of three option Math.floor(Math.random()* 3)

function getComputerChoice (){
  const computerNumber = Math.round(Math.random() * 2);
  
  switch (computerNumber) {
   case 0:
    return "rock";
    break;
   case 1:
    return "paper";
    break;
   case 2: 
   return "scissors";
   break;
  }
  
}


// ask for player selection (case-insensitive)

function getPlayerChoice (){
const playerChoice = prompt("Choose your weapon: Rock, Paper or Scissors?").toLocaleLowerCase();
return playerChoice;
}



// play a round comparing computer vs player selection and return who is the winner.

function playRound (playerSelection, computerSelection){


if (playerSelection === computerSelection){
console.log("Tie");
} else if (playerSelection == "rock" && computerSelection == "scissors"){
console.log("You Win! Rock beats Scissor");
playerScore++;

}else if (playerSelection == "paper" && computerSelection == "rock"){
console.log("You Win! Paper beats Rock");
playerScore++;
} else if (playerSelection == "scissors" && computerSelection == "paper"){
console.log("You Win! Scissors beats Paper");
playerScore++;
} else {
console.log(`You Lose! ${computerSelection} beats ${playerSelection} `);
computerScore++;
}
}


// play 5 rounds where the score are kept and reports the winner or loser at the end.

function game (){

let endGameMessage = "";
//loop for 5 games, track round and wins
for(let i=0; i<5; i++){
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice ();
  
//Play Round
  playRound(playerSelection, computerSelection);
  console.log(`Player win totals: ${playerScore}`);
  console.log(`Computer win totals: ${computerScore}`);
  
}
// determine who won the five round set
if(playerScore > computerScore){
  endGameMessage = " YOU WIN!";
} else if (playerScore === computerScore){
  endGameMessage = "TIE!";
} else {
  endGameMessage = "COMPUTER WINS!";
}

console.log(`End of the game: ${endGameMessage}`);

  


}
game();