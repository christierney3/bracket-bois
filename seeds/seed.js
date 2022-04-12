const sequelize = require('../config/connection');
const { Match, Score, Round, Team, Tournament, User } = require('../models');

const matchData = require('./matchData.json');
const scoreData = require('./scoreData.json');
const roundData = require('./roundData.json');
const teamData = require('./teamData.json');
const tournamentData = require('./tournamentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, { returning: true });
  
  await Tournament.bulkCreate(tournamentData, { returning: true });

  await Round.bulkCreate(roundData, { returning: true });

  await Match.bulkCreate(matchData, { returning: true });

  await Team.bulkCreate(teamData, { returning: true });

  await Score.bulkCreate(scoreData, { returning: true });

  process.exit(0);
};

seedDatabase();
