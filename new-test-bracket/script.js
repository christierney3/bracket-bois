
//hardcoded for 8 teams & 3 rounds
let numberOfTeams = 8;
let numberOfRounds = 3;
let currentRound = 1;

var rnd1 = document.querySelector("#round-1");
var rnd2 = document.querySelector("#round-2");
var rnd3 = document.querySelector("#round-3");

var teams = [
  {
    "team": "Rockets",
    "score": 29,
    "is_winner": Boolean
  },
  {
    "team": "Pockets",
    "score": 28,
    "is_winner": Boolean
  },
  {
    "team": "Sockets",
    "score": 52,
    "is_winner": Boolean
  },
  {
    "team": "Nockits",
    "score": 40,
    "is_winner": Boolean
  },
  {
    "team": "Sprockits",
    "score": 24,
    "is_winner": Boolean
  },
  {
    "team": "Denokits",
    "score": 13,
    "is_winner": Boolean
  },
  {
    "team": "Jets",
    "score": 44,
    "is_winner": Boolean
  },
  {
    "team": "Mets",
    "score": 30,
    "is_winner": Boolean
  },
]

let advancingTeams = [];

function roundOne() {
  console.log(`number of teams left: ${numberOfTeams}`)
  for(let i = 0; i < numberOfTeams; i++) {
    var createdDiv = document.createElement("div");
    var teamName = document.createTextNode(`${teams[i].team} ${teams[i].score}`);
    createdDiv.appendChild(teamName);
    createdDiv.setAttribute('class', 'team col');
    

    var teamSpanDiv;
    teamSpanDiv = document.createElement("div");

    var matchSpanDiv;
    matchSpanDiv = document.createElement("div");

    //modulus operator to determine top and bottom team
    if(i % 2 === 0) {
      createdDiv.classList.add('top-team');

      //spanner to separate teams in a match + border right creates visual bracket
      var teamSpanner = document.createTextNode('');
      teamSpanDiv.appendChild(teamSpanner);
      teamSpanDiv.setAttribute('class', 'team-span col');

    } else {
      //if not top... you're bottom
      createdDiv.classList.add('bottom-team');
      var matchSpanner = document.createTextNode('');
      matchSpanDiv.appendChild(matchSpanner);
      matchSpanDiv.setAttribute('class', 'match-span col');
    }

    rnd1.appendChild(createdDiv);
    rnd1.appendChild(teamSpanDiv);
    rnd1.appendChild(matchSpanDiv);

    
  }
 
  checkWinner();

  if(currentRound < numberOfRounds) {
    currentRound++;
    numberOfTeams = numberOfTeams/2;
    renderRound();
  }
}

function roundTwo() {
  console.log(`number of teams left: ${numberOfTeams}`)
  for(let i = 0; i < numberOfTeams; i++) {
    var topSpan = document.createElement("div");
    var fillerTop = document.createTextNode('');
    topSpan.appendChild(fillerTop);
    topSpan.setAttribute('class', 'filler-top');

    
    var createdDiv = document.createElement("div");
    createdDiv.id = [i];
    var teamName = document.createTextNode(`${advancingTeams[i].team} ${advancingTeams[i].score}`);
    createdDiv.appendChild(teamName);
    createdDiv.setAttribute('class', 'team col');

    var bottomSpan = document.createElement("div");
    var fillerBottom = document.createTextNode('');
    bottomSpan.appendChild(fillerBottom);
    bottomSpan.setAttribute('class', 'filler-bottom');

    if(createdDiv.id % 2 === 0) {
      createdDiv.classList.add('top-team')
    }
    else {
      createdDiv.classList.add('bottom-team');
    }
    rnd2.appendChild(topSpan);
    rnd2.appendChild(createdDiv);
    rnd2.appendChild(bottomSpan);
  }
}

function roundThree() {

}

//has to be better logic for this...
function checkWinner() {
  //run a function that determines the winner of the game   
  const firstMatch = teams.slice(0,2);
  if(firstMatch[0].score > firstMatch[1].score) {
    firstMatch[0].is_winner = true;
    advancingTeams.push(firstMatch[0]);
  } else {
    firstMatch[1].is_winner = true;
    advancingTeams.push(firstMatch[1]);
  }

  const secondMatch = teams.slice(2,4);
  if(secondMatch[0].score > secondMatch[1].score) {
    secondMatch[0].is_winner = true;
    advancingTeams.push(secondMatch[0]);
  } else {
    secondMatch[1].is_winner = true;
    advancingTeams.push(secondMatch[1]);
  }

  const thirdMatch = teams.slice(4,6);
  if(thirdMatch[0].score > thirdMatch[1].score) {
    thirdMatch[0].is_winner = true;
    advancingTeams.push(thirdMatch[0]);
  } else {
    thirdMatch[1].is_winner = true;
    advancingTeams.push(thirdMatch[1]);
  }

  const fourthMatch = teams.slice(6,8);
  if(fourthMatch[0].score > fourthMatch[1].score) {
    fourthMatch[0].is_winner = true;
    advancingTeams.push(fourthMatch[0]);
  } else {
    fourthMatch[1].is_winner = true;
    advancingTeams.push(fourthMatch[1]);
  }
}

function renderRound() {
  switch (currentRound) {
    case 1:
      console.log("round 1");
      roundOne();
      break;
    case 2:
      console.log("round 2")
      roundTwo();
      break;
    case 3:
      console.log("round 3");
      roundThree();
      break;
    default:
      console.log("no more rounds remaining, we should have a winner");
  }
}

renderRound();