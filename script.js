// Add Event Listeners 

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});
// Create playRound() Function
let playerScore = 0; let computerScore = 0;




function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  document.getElementById("playerChoice").innerText = `You chose ${playerChoice}`;
  document.getElementById("computerChoice").innerText = `Computer chose ${computerChoice}`;

if (playerChoice === computerChoice) {
  result = "It's a tie!";
} else if (
  (playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")
) {
  result = "You win!";
  playerScore++;
} else {
  result = "Computer wins!";
  computerScore++;
}

document.getElementById("player-score").innerText = playerScore;
document.getElementById("computer-score").innerText = computerScore;
document.getElementById("result").innerText = result;

}

// Create getComputerChoice()

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


document.getElementById("restart").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("result").innerText = "";
  document.getElementById("playerChoice").innerText = "";
  document.getElementById("computerChoice").innerText = "";
});

