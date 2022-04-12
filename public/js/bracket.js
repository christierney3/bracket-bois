let round = 1;
var numberOfRounds = 0;

const pageURL = window.location.href;
console.log(pageURL);
const apiURL = pageURL.replace('tournaments/', 'api/tournaments/');
console.log(apiURL);
//sequelize query to the database

const getTournamentInfo = async () => {
    await fetch(apiURL)
      .then(function (response) {
        if (response.ok) {
          return response.json()
        }
      }).then(function (data) {
        console.log(data)
      })
};

let teams = [
  {
    "id": 1,
    "team": "Rockets",
    "score": 29,
    "is_winner": false
  },
  {
    "id": 2,
    "team": "Pockets",
    "score": 28,
    "is_winner": false
  },
  {
    "id": 3,
    "team": "Sockets",
    "score": 52,
    "is_winner": false
  },
  {
    "id": 4,
    "team": "Nockits",
    "score": 40,
    "is_winner": false
  },
  {
    "id": 5,
    "team": "Sprockits",
    "score": 24,
    "is_winner": false
  },
  {
    "id": 6,
    "team": "Denokits",
    "score": 13,
    "is_winner": false
  },
  {
    "id": 7,
    "team": "Jets",
    "score": 44,
    "is_winner": false
  },
  {
    "id": 8,
    "team": "Mets",
    "score": 30,
    "is_winner": false
  },
  // {
  //   "id" : 9,
  //   "team": "Fingers",
  //   "score": 33,
  //   "is_winner": false
  // },
  // {
  //   "id" : 10,
  //   "team": "Jetsons",
  //   "score": 58,
  //   "is_winner": false
  // },
  // {
  //   "id" : 11,
  //   "team": "Ogres",
  //   "score": 69,
  //   "is_winner": false
  // },
  // {
  //   "id" : 12,
  //   "team": "Beaver Boys",
  //   "score": 42,
  //   "is_winner": false
  // },
  // {
  //   "id" : 13,
  //   "team": "Napalm",
  //   "score": 13,
  //   "is_winner": false
  // },
  // {
  //   "id" : 14,
  //   "team": "Meesas",
  //   "score": 22,
  //   "is_winner": false
  // },
  // {
  //   "id" : 15,
  //   "team": "Kidney Beans",
  //   "score": 54,
  //   "is_winner": false
  // },
  // {
  //   "id" : 16,
  //   "team": "Bees",
  //   "score": 19,
  //   "is_winner": false
  // }
]

//create a new bracket section for 16, 32 teams

//if logic 8 teams, 16, 32
//16 teams - need 2 brackets, etc
//split arrays based on brackets
//array1 = bracket1, array2 = bracket2

//row -> col -> row row ->


//determines how many rounds will be rendered based on the number of teams
function howManyRounds() {
  console.log(teams);
  var teamsLeft = teams.length;
  while (teamsLeft >= 1) {
    teamsLeft = teamsLeft / 2;
    numberOfRounds++;
  }
}

howManyRounds();

if (teams.length === 16) {
  // var bracket1Teams = teams.slice(0, 8);
  var bracket2Teams = teams.slice(8, 16);
  console.log(bracket2Teams);
}

function renderRound(round) {
  console.log(`round ${round}`);
  console.log(`number of teams left: ${teams.length}`);

  var container = document.getElementById(`round-${round}`);


  for (let i = 0; i < teams.length; i++) {
    let upperClassName = 'filler-top';
    let middleClassName;
    let lowerClassName = 'filler-bottom';
    console.log(teams[i].id);

    if (i % 2 === 0) {
      middleClassName = 'top-team';

      if (round < numberOfRounds) {
        lowerClassName = 'col team-span';
      }
    } else {
      middleClassName = 'bottom-team';

      if (round === 1) {
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

function renderBracket(iteration) {

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
    if (teams.length > 1) checkWinners();
  }
}

render();
getTournamentInfo();