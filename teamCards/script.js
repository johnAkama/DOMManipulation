const footballTeam = {
  team: 'JoHN mEHNER',
  year: 1967,
  headCoach: 'Kofie Desmel',
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
  playersList.append(listItem);
  listItem.innerHTML = `
        <h2>${teatDis.name} ${teatDis.isCaptain ? '( Captain )' : ''}</h2>
        <p>Position: ${teatDis.position}</p>
    `;
}

footballTeam.players.forEach((player) => {
  displTeam(player);
});

document.getElementById('players').addEventListener('change', (e) => {
playersList.innerHTML = "";
  footballTeam.players.filter((player) => {
    if (e.target.value === 'all')
    {
      displTeam(player);
    } else {

      if (player.position === e.target.value) {
        
        const listItem2 = document.createElement('div'); listItem2.classList.add('player-card');
        playersList.appendChild(listItem2);

        listItem2.innerHTML = `
        <h2>${player.name} ${player.isCaptain ? '(Captain)' : ''}</h2>
        <p>Position: ${player.position}</p>
    `;
      }
    }
  });
});
