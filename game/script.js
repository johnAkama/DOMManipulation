const options = ['Rock', 'Paper', 'Scissors'];

function getRandomComputerResult() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
    return (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (computerResult === userOption) {
        playerScore += 0;
        computerScore += 0;
        return `It's a tie! Both chose ${userOption}.`;
    }
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore += 1;
        return `You won! ${userOption} beats ${computerResult}.`;
    }
    computerScore += 1;
    return `You lost! ${computerResult} beats ${userOption}.`;
}
