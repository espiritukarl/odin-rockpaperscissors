let computerWins = 0;
let playerWins = 0;

const buttonPressed = document.querySelectorAll(".player-button");

const computerButton = document.querySelectorAll(".computer-button");
const computerRock = document.querySelector(".rock");
const computerScissors = document.querySelector(".scissors");
const computerPaper = document.querySelector(".paper");

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
        return "draw";
    } else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'rock')) {
        return "lost";
    }
    else {
        return "win";
    }
};

let roundResults = (playerChoice, computerSelection) => {

    if (playRound(playerChoice, computerSelection) == "draw") {
        playerDialogue.textContent = `Draw! You both chose ${playerChoice}`;
        computerDialogue.textContent = `Draw! You both chose ${playerChoice}`;
    } else if (playRound(playerChoice, computerSelection) == "lost") {
        computerWins++;
        playerDialogue.textContent = `You lost! Your oppenent chose ${rockPaperScissors(computerSelection)}!`;
        computerDialogue.textContent = `Computer win! His ${rockPaperScissors(computerSelection)} beat your ${playerChoice}.`;
    } else if (playRound(playerChoice, computerSelection) == "win") {
        playerWins++;
        computerDialogue.textContent = `Computer lost! His ${rockPaperScissors(computerSelection)} lost to your ${playerChoice}.`;
        playerDialogue.textContent = `Player Win! Your ${playerChoice} beat the computer's ${rockPaperScissors(computerSelection)}!`;
    } else {
        console.log("An Error occured!");
    }

    if (computerWins == 5) {
        computerWins = 0;
        playerWins = 0;
        computerResults.textContent = "Congrats to the Computer as he is the first to get to 5 wins!";
    } else if (playerWins == 5) {
        computerWins = 0;
        playerWins = 0;
        playerResults.textContent = "Congrats to the Player as he is the first to get to 5 wins!";
    } else {
        playerResults.textContent = `Wins: ${playerWins}`;
        computerResults.textContent = `Wins: ${computerWins}`;
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

        computerButton.forEach((button) => {
            button.classList.remove("hovered");
        });

        let playerChoice = (e.target.textContent).toLowerCase();
        roundResults(playerChoice, computerSelection);
    });
});
