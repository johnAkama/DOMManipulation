const footballTeam = {
    team: 'John Mehner',
    year: 1967,
    headCoach: 'Kofie Desmel',
    players: [
        { name: 'John', position: 'midfielder', isCaptain: true },
        { name: 'Jane', position: 'defender', isCaptain: false },
        { name: 'Bob', position: 'forward', isCaptain: false },
        { name: 'Alice', position: 'goalkeeper', isCaptain: false },
    ],
};

// Display team info
document.getElementById('team').innerText = footballTeam.team;
document.getElementById('year').innerText = footballTeam.year;
document.getElementById('head-coach').innerText = footballTeam.headCoach;

const playersList = document.getElementById('player-cards');

// Function to display a player's info
function displayPlayer(player) {
    const listItem = document.createElement('div');
    listItem.classList.add('player-card');
    listItem.innerHTML = `
    <h2>${player.name} ${player.isCaptain ? '(Captain)' : ''}</h2>
    <p>Position: ${player.position}</p>
  `;
    playersList.append(listItem);
}

// Display all players initially
footballTeam.players.forEach(displayPlayer);

// Event listener for filtering players
document.getElementById('players').addEventListener('change', (e) => {
    playersList.innerHTML = ''; // Clear current list
    const selectedPosition = e.target.value;

    // Display players based on the selected position
    footballTeam.players.forEach((player) => {
        if (
            selectedPosition === 'all' ||
            player.position === selectedPosition
        ) {
            displayPlayer(player);
        }
    });
});
