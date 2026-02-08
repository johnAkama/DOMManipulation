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

function displTeam(teatDis) {
    const listItem = document.createElement('div');
    listItem.classList.add('player-card');
    playersList.appendChild(listItem);
    listItem.innerHTML = `
        <h2 class="player-card">${teatDis.name}(${teatDis.isCaptain ? 'Captain' : ''})</h2>
        <p>Position: ${teatDis.position}</p>
    `;
    playersList.listItem;
}

footballTeam.players.forEach((player) => {
    displTeam(player);
});

document.getElementById('players').addEventListener('change', (e) => {
    footballTeam.players.filter((player) => {
        if (e.target.value === 'all') {
            displTeam(player);
        } else {
            if (player.position === e.target.value) {
                playersList.innerHTML = player.name;
            }
        }
    });
});
