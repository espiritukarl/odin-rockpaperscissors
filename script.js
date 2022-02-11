let computerWins = 0;
let playerWins = 0;

let rockPaperScissors = (choice) => {
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
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

while (computerWins < 5 || playerWins < 5) {
    let computerSelection = Math.floor(Math.random() * 3);
    let playerChoice = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'scissors' || playerChoice === 'paper') {

        //Just putting scripts here for fun
        const draw = [
            `Rats! A Draw, didn't think we'd both draw ${playerChoice}`,
            `Great minds think a like I guess, that's a ${playerChoice}.`,
            `Yo! Stop choosing ${playerChoice}, you knew I\'d use that too!`,
            `Dang, drew huh? Guess we both knew ${playerChoice} was the proper choice there`,
            `No way you choose ${playerChoice}! Damn draws!`
        ];

        const lost = [
            `Hah! Too easy! If you didn\'t know your ${playerChoice} loses to my ${rockPaperScissors(computerSelection)}.`,
            `2 stands for my wins and how easy this is. Don\'t use ${playerChoice} since that loses to my ${rockPaperScissors(computerSelection)}.`,
            `3 Down, 2 to go! I expected you to choose ${playerChoice}, that\'s why I went ${rockPaperScissors(computerSelection)}.`,
            `Uhoh I only need 1 more win, you scared? I easily read your ${playerChoice}! Easy counter with the ${rockPaperScissors(computerSelection)}.`,
            `Haha! Maybe in another 10,000 years you can beat me! Next time, don\'t use your ${playerChoice}, I will always play ${rockPaperScissors(computerSelection)}.`
        ];

        const won = [
            `Congrats on the 1 win! Who knew you would pull out the ${playerChoice} to beat out my ${rockPaperScissors(computerSelection)}`,
            `Sheesh! Congrats on the 2nd win! I guess ${playerChoice} really does beat my ${rockPaperScissors(computerSelection)}.`,
            `Woah there! We got ourselves a winner. You really used your ${playerChoice} to defeat my ${rockPaperScissors(computerSelection)}!`,
            `Look at you pulling out the ${playerChoice} to ruin my ${rockPaperScissors(computerSelection)}! 1 more and you win, I got to play seriously now!`,
            `NOOOOoooo I didn't think you'd use ${playerChoice}! I shouldn't have used ${rockPaperScissors(computerSelection)}!`
        ];

        if (playRound(playerChoice, computerSelection) == 0) {
            console.log(draw[Math.floor(Math.random() * 5)]);
        } else if (playRound(playerChoice, computerSelection) == 1) {
            console.log(lost[computerWins]);
            computerWins++;
        } else if (playRound(playerChoice, computerSelection) == 2) {
            console.log(won[playerWins]);
            playerWins++;
        } else {
            console.log("An Error occured!");
        }

        if (computerWins == 5) {
            console.log("Congrats to the Computer as he is the first to get to 5 wins!");
            computerWins = 0;
            playerWins = 0;
            continue;
        } else if (playerWins == 5) {
            console.log("Congrats to the Player as he is the first to get to 5 wins!")
            computerWins = 0;
            playerWins = 0;
            continue;
        }
    } else {
        console.log("Wrong input. Please input rock, paper, or scissors only.");
    }

}

