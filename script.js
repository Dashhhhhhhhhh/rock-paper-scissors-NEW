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

  const capitalize = str => str[0].toUppercase() + str.slice(1);
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

if (playerScore === 5) {
   document.getElementById("finalResult").innerText = "🎉 You win the game!";
} else if (computerScore === 5) {
   document.getElementById("finalResult").innerText = "💻 Computer wins the game!";
}

if (playerScore === 5 || computerScore === 5) {
  document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
}
function playRound(playerChoice) {
  let result = ""; 
}

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

  document.querySelectorAll(".choice").forEach(btn => btn.disabled = false);



});

