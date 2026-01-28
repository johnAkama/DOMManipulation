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

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const roundResultsMsg = document.getElementById('results-msg');

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    if (playerScore === 3) {
        winnerMsgElement.innerText = "Player wins the game!";
        optionsContainer.style.display = "none";
    } else if (computerScore === 3) {
        winnerMsgElement.innerText = "Computer wins the game!";
        optionsContainer.style.display = "none";
    }
}

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener('click', function () {
    showResults('Rock');
});

paperBtn.addEventListener('click', function () {
    showResults('Paper');
});

scissorsBtn.addEventListener('click', function () {
    showResults('Scissors');
});

const winnerMsgElement = document.getElementById('winner-msg');

const optionsContainer = document.querySelector('.options-container');

const resetGameBtn = document.getElementById('reset-game-btn');
