function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function getPlayerChoice() {
  return prompt("Rock, paper, scissors?");
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a draw!");
    return 0;
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log("Computer wins!");
    return "computer";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("Computer wins!");
    return "computer";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    console.log("Computer wins!");
    return "computer";
  } else console.log("Playerrock wins!");
  return "player";
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`Game ${i + 1}/5`);
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(`Player chose ${playerSelection.toLowerCase()}!`);
    console.log(`Computer chose ${computerSelection}!`);
    winner = playRound(playerSelection, computerSelection);
    if (winner == "computer") {
      computerScore++;
    } else if (winner == "player") {
      playerScore++;
    }
  }
  return `computer:${computerScore} - player:${playerScore}`;
}

console.log(game());
