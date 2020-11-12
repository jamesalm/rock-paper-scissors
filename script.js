
function computerPlay() {
   const playChoice = ["Rock", "Paper", "Scissors"];
   var random = playChoice[Math.floor(Math.random() * playChoice.length)];
   return random;
};

function playRound(playerSelection, computerSelection) {
   let winCount = 0;
if (playerSelection == "ROCK" && computerSelection == "Rock") {
   return "You tied";
} else if (playerSelection == "ROCK" && computerSelection == "Scissors") {
   winCount++;
   return "You win! Rock crushes scissors" + winCount;
} else if (playerSelection == "ROCK" && computerSelection == "Paper") {
   return "You lose! Paper covers rock" + winCount;
} else if (playerSelection == "PAPER" && computerSelection == "Rock") {
   return "You win! Paper covers rock";
} else if (playerSelection == "PAPER" && computerSelection == "Paper") {
   return "You tied";
} else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
   return "You lose! Scissors cuts paper";
} else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
   return "You lose! Rock crushes Scissors";
} else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
   return "You win! Scissors cuts paper";
} else if (playerSelection == "SCISSORS" && computerSelection == "Scissors") {
   return "You tied";
}
else {
   return "Hmm, lets try that again";
}


};

const playerSelection = prompt("Rock, Paper, Scissors?").toUpperCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);



