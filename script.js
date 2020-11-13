
function computerPlay() {
   const playChoice = ["Rock", "Paper", "Scissors"];
   var random = playChoice[Math.floor(Math.random() * playChoice.length)];
   return random;
};

function playRound(playerSelection, computerSelection) {
   let winCount = 0;
   let gameConclusion = "First";
   document.getElementById("gameUpdate").innerHTML = gameConclusion;
if (playerSelection == "Rock" && computerSelection == "Rock") {
   console.log("YOUR ARE HERE");
   gameConclusion = "First Heres";
   return "Hey";
} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
   console.log("Here Scissors");
   gameConclusion = "Rock ties Rock";
   return "You win! Rock crushes scissors" + winCount;
} else if (playerSelection == "Rock" && computerSelection == "Paper") {
   console.log("Here Paper");
   gameConclusion = "Rock ties Rock";
   return "You lose! Paper covers rock" + winCount;
} else if (playerSelection == "Paper" && computerSelection == "Rock") {
   return "You win! Paper covers rock";
} else if (playerSelection == "Paper" && computerSelection == "Paper") {
   return "You tied";
} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
   return "You lose! Scissors cuts paper";
} else if (playerSelection == "Scissors" && computerSelection == "Rock") {
   return "You lose! Rock crushes Scissors";
} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
   return "You win! Scissors cuts paper";
} else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
   return "You tied";
}
else {
   return "Hmm, lets try that again";
}


};

// const playerSelection = prompt("Rock, Paper, Scissors?").toUpperCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);



