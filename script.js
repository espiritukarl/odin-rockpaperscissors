let computerWins = 0;
let playerWins = 0;
let playerChoice;

const buttonPressed = document.querySelectorAll(".player-button");
const playerRock = document.getElementsByClassName("player-button rock");
const playerPaper = document.getElementsByClassName("player-button paper");
const playerScissors = document.getElementsByClassName("player-button scissors");

const computerButton = document.querySelectorAll(".computer-button");
const computerRock = document.querySelector(".crock");
const computerScissors = document.querySelector(".cscissors");
const computerPaper = document.querySelector(".cpaper");

const playerResults = document.querySelector("#player-results");
const computerResults = document.querySelector("#computer-results");
const playerDialogue = document.querySelector(".player-dialogue");
const computerDialogue = document.querySelector(".computer-dialogue");

playerResults.classList.add("resulsts-text");
computerResults.classList.add("results-text");

let rockPaperScissors = (choice) => {
    switch (choice) {
        case 0:
            computerRock.classList.add('hovered');
            return 'rock';
        case 1:
            computerPaper.classList.add('hovered');
            return 'paper';
        case 2:
            computerScissors.classList.add('hovered');
            return 'scissors';
        default:
            alert("An Error occured!");
    }
};

let playRound = (playerChoice, computerSelection) => {
    computerChoice = rockPaperScissors(computerSelection);
    if (playerChoice == computerChoice) {
        return 0; //draw
    } else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'rock')) {
        return 1; //lost
    }
    else {
        return 2; //win
    }
};

computerButton.forEach((button) => {
    button.addEventListener('click', () => {
        playerDialogue.textContent = "LOL! That isn't your button dummy.";
        computerDialogue.textContent = "Hey! Stop touching me uwu";
    });
});


buttonPressed.forEach((button) => {
    button.addEventListener('click', e => {
        let computerSelection = Math.floor(Math.random() * 3);
        computerRock.classList.remove("hovered");
        computerPaper.classList.remove("hovered");
        computerScissors.classList.remove("hovered");

        if (playerWins == 0 || computerWins == 0) {
            playerResults.textContent = "Wins: 0";
            computerResults.textContent = "Wins: 0";
        }


        if (e.path[0] == playerRock[0]) {
            playerChoice = "rock";
        } else if (e.path[0] == playerPaper[0]) {
            playerChoice = "paper";
        } else if (e.path[0] == playerScissors[0]) {
            playerChoice = "scissors";
        }

        if (playRound(playerChoice, computerSelection) == 0) {
            playerDialogue.textContent = `Draw! You both chose ${playerChoice}`;
            computerDialogue.textContent = `Draw! You both chose ${playerChoice}`;
        } else if (playRound(playerChoice, computerSelection) == 1) {
            computerWins++;
            playerDialogue.textContent = `You lost! Your oppenent chose ${rockPaperScissors(computerSelection)}!`;
            computerDialogue.textContent = `Computer win! His ${rockPaperScissors(computerSelection)} beat your ${playerChoice}.`;
            computerResults.textContent = `Wins: ${computerWins}`;
        } else if (playRound(playerChoice, computerSelection) == 2) {
            playerWins++;
            computerDialogue.textContent = `Computer lost! His ${rockPaperScissors(computerSelection)} lost to your ${playerChoice}.`;
            playerDialogue.textContent = `Player Win! Your ${playerChoice} beat the computer's ${rockPaperScissors(computerSelection)}!`;
            playerResults.textContent = `Wins: ${playerWins}`;
        } else {
            console.log("An Error occured!");
        }

        if (computerWins == 5) {
            computerWins = 0;
            playerWins = 0;

            computerResults.textContent = "Congrats to the Computer as he is the first to get to 5 wins!";
            computerContainer.appendChild(computerResults);

            playerResults.textContent = `Wins: ${playerWins}`;
            playerContainer.appendChild(playerWins)

        } else if (playerWins == 5) {
            computerWins = 0;
            playerWins = 0;

            playerResults.textContent = "Congrats to the Player as he is the first to get to 5 wins!";
            computerResults.textContent = `Wins: ${computerWins}`;
        }
    });
});
