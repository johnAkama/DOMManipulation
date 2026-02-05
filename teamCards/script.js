const footballTeam = {
    team: '',
    year: '',
    headCoach: '',
    players: [
        {
            name: 'John',
            position: 'midfielder',
            isCaptain: true,
        },
        {
            name: 'Jane',
            position: 'defender',
            isCaptain: false,
        },
        {
            name: 'Bob',
            position: 'forward',
            isCaptain: false,
        },
        {
            name: 'Alice',
            position: 'goalkeeper',
            isCaptain: false,
        },
    ],
};

document.getElementById('team').innerText = footballTeam.team;

document.getElementById('year').innerText = footballTeam.year;

document.getElementById('head-coach').innerText = footballTeam.headCoach;
const playersList = document.getElementById('player-cards');

footballTeam.players.forEach((player) => {
    const listItem = document.createElement('div');
    listItem.classList.add('player-card');
    playersList.appendChild(listItem);
    listItem.innerHTML = `
        <h2 class="player-card">${player.name}(${player.isCaptain ? 'Captain' : ''})</h2>
        <p>Position: ${player.position}</p>
    `;
    playersList.listItem;
});

document.getElementById('players').addEventListener('change', (e) => {
    footballTeam.players.filter((player) => {
        console.log(player.position === e.target.value);
    });
});
