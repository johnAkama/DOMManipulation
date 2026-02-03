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
const playersList = document.getElementById('players-list');

footballTeam.players.forEach((player) => {});
