// const Tournament = require('../models/Tournament');
// const sequelize = require('../config/connection');


var rnd1 = document.querySelector("#round-1");
var rnd2 = document.querySelector("#round-2");
var rnd3 = document.querySelector("#round-3");
var rnd4 = document.querySelector("#round-4");

var numberOfTeams = 8;
var teams = [
  {
    "team": "Rockets",
    "score": 29,
    "is_winner": true
  },
  {
    "team": "Pockets",
    "score": 28,
    "is_winner": false
  },
  {
    "team": "Sockets",
    "score": 52,
    "is_winner": true
  },
  {
    "team": "Nockits",
    "score": 40,
    "is_winner": false
  },
  {
    "team": "Sprockits",
    "score": 24,
    "is_winner": true
  },
  {
    "team": "Denokits",
    "score": 13,
    "is_winner": false
  },
  {
    "team": "Jets",
    "score": 44,
    "is_winner": true
  },
  {
    "team": "Mets",
    "score": 30,
    "is_winner": false
  },
]

currentRound = 1;

var advancingTeams = [];
var advancingTeams2 = [];

function init() {
  renderTeams();
}



//TO DO
//team with higher score (is_winner) should be added to next round of brackets
//contain sections of brackets in specified divs so they won't interfere with other brackets
function renderTeams() {
  //for numberOfTeams create a new div with the name of the team described in the teams array
  // var newBracketSection = document.createElement('ul');
  for(let i = 0; i < numberOfTeams; i++) {
    var newDiv = document.createElement("div");
    //create p tag with span with padding
    const teamName = document.createTextNode(`${teams[i].team} ${teams[i].score}`);
    newDiv.appendChild(teamName);
    newDiv.setAttribute('class', 'team');
    newDiv.setAttribute('class', 'col');
    newDiv.setAttribute('id', [i]);


    var spanDiv;
    spanDiv = document.createElement("div");

    if(i % 2 === 0) {
      newDiv.setAttribute('class', 'top-team');

      //create spanner so that the right margin creates visual bracket
      var spanner = document.createTextNode('');
      spanDiv.appendChild(spanner);
      spanDiv.setAttribute('class', 'span');

    } else {
      //if not top... you're bottom
      newDiv.setAttribute('class', 'bottom-team');
    }

    if(teams[i].is_winner) {
      advancingTeams.push(teams[i]);
      
    }
    
    //add the team to the tournament page
    rnd1.appendChild(newDiv);
    rnd1.appendChild(spanDiv);
    
  }
  renderNextRound();
}

//TO DO 
//each advancing team needs to have is_winner reset each round
function renderNextRound() {
  currentRound++;
  var newDiv;
  var spanBottom;

  //halve the number of remaining teams
  numberOfTeams = numberOfTeams / 2;
  if(numberOfTeams > 1) {

  
  advancingTeams.forEach(team => {
    console.log(advancingTeams)
    newDiv = document.createElement('div');
    spanBottom = document.createElement('div');
    
    var teamName = document.createTextNode(`${team.team}`);
    var fillerBottom = document.createTextNode('');
    team.is_winner = false;

    newDiv.appendChild(teamName);
    newDiv.setAttribute('class', 'advancing-team');

    spanBottom.setAttribute('class', 'filler-bottom');
    spanBottom.appendChild(fillerBottom);
    
    if(currentRound === 2) {
      rnd2.appendChild(newDiv);
      rnd2.appendChild(spanBottom);
      advancingTeams[0].is_winner = true;
      advancingTeams[2].is_winner = true;
      advancingTeams2.push(advancingTeams[0], advancingTeams[2]);
      
      
      
    }
    
    if(currentRound === 3) {
      advancingTeams2 = advancingTeams;
      console.log('round3');
      for(i=0; i < numberOfTeams; i++) {
      rnd3.appendChild(newDiv);
      rnd3.appendChild(spanBottom);
      }
    } else {
      return;
    }
  //   switch (currentRound) {
  //     case 2:
  //       rnd2.appendChild(newDiv);
  //       rnd2.appendChild(spanBottom);
  //       advancingTeams[0].is_winner = true;
  //       advancingTeams[2].is_winner = true;
  //       console.log('round2 works');
  //       break;
  //     case 3:
  //       console.log('round3');
  //       rnd3.appendChild(newDiv);
  //       rnd3.appendChild(spanBottom);
  //       break;
  //     default: 
  //       console.log('no more rounds');
  //       break;
  // } 
  });
}
      
    checkWinner();

}
function checkWinner(){
  console.log(numberOfTeams);
  if(numberOfTeams > 1) {
    renderNextRound();
    advancingTeams2 = advancingTeams;
  }
}
// function checkWinner() {
//   if(currentRound === 2) {
//     console.log(currentRound)
  
//     if(advancingTeams[0].score > advancingTeams[1].score) {
//       teams[0].is_winner = true;
//       advancingTeams2.push(teams[i]);

//     } else {
//       teams[1].is_winner = true;
//       advancingTeams2.push(teams[1]);
//     }

//     if(teams[2].score > teams[3].score) {
//       teams[2].is_winner = true;
//       // console.log(teams[2]);
//       advancingTeams2.push(teams[2]);
//     } else {
//       teams[3].is_winner = true;
//       // console.log(teams[3]);
//       advancingTeams2.push(teams[3]);
//     }
//   }

//   if(currentRound === 3) {
//     if(advancingTeams[0].score > advancingTeams[1].score) {
//       teams[0].is_winner = true;
//       advancingTeams2.push(teams[i]);

//     } else {
//       teams[1].is_winner = true;
//       advancingTeams2.push(teams[1]);
//     }
//   }
  
//   advancingTeams = advancingTeams2.filter() => advancingTeams.is_winner;
//   console.log(advancingTeams)
//   renderNextRound();

// }

init();
