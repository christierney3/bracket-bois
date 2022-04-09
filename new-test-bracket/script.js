let round = 1;
var numberOfRounds = 4;

let teams = [
  {
    "team": "Rockets",
    "score": 29,
    "is_winner": false
  },
  {
    "team": "Pockets",
    "score": 28,
    "is_winner": false
  },
  {
    "team": "Sockets",
    "score": 52,
    "is_winner": false
  },
  {
    "team": "Nockits",
    "score": 40,
    "is_winner": false
  },
  {
    "team": "Sprockits",
    "score": 24,
    "is_winner": false
  },
  {
    "team": "Denokits",
    "score": 13,
    "is_winner": false
  },
  {
    "team": "Jets",
    "score": 44,
    "is_winner": false
  },
  {
    "team": "Mets",
    "score": 30,
    "is_winner": false
  }
]

function renderRound(round) {
  console.log(`round ${round}`);
  console.log(`number of teams left: ${teams.length}`);

  var container = document.getElementById(`round-${round}`);

  for(let i = 0; i < teams.length; i++) {
    let upperClassName = 'filler-top';
    let middleClassName;
    let lowerClassName = 'filler-bottom';

    if(i % 2 === 0) {
      middleClassName = 'top-team';
      
      if(round < numberOfRounds) {
        lowerClassName = 'col team-span';
      }
    } else {
      middleClassName = 'bottom-team';

      if(round === 1) {
        lowerClassName = 'col match-span';
      }
    }

    container.innerHTML += `
      <div class="${upperClassName}">
      <div class="team col ${middleClassName}">
        <span>${teams[i].team} ${teams[i].score}</span>
      </div>
      <div class="${lowerClassName}"></div>
    `;
  }
}

function checkWinners() {
  const advancingTeams = [];

  let index = 0;

  while (index < teams.length) {
    var match = teams.slice(index, index + 2);
    if (match[0].score > match[1].score) {
      advancingTeams.push(match[0]);
    } else {
      advancingTeams.push(match[1]);
    }

    index += 2;
  }

  teams = advancingTeams;
}

function render() {
  

  while (round <= numberOfRounds) {
    renderRound(round++);
    checkWinners();
  }
}

render();