const sequelize = require('../config/connection');
const { Match, Score, Player, Round, Team, Tournament, User } = require('../models');

const matchData = require('./matchData.json');
const scoreData = require('./scoreData.json');
const playerData = require('./playerData.json');
const roundData = require('./roundData.json');
const teamData = require('./teamData.json');
const tournamentData = require('./tournamentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, { returning: true });
  
  const tournament = await Tournament.bulkCreate(tournamentData, { returning: true });

  const round = await Round.bulkCreate(roundData, { returning: true });

  const match = await Match.bulkCreate(matchData, { returning: true });

  const team = await Team.bulkCreate(teamData, { returning: true });

  const player = await Player.bulkCreate(playerData, { returning: true });

  const score = await Score.bulkCreate(scoreData, { returning: true });

  process.exit(0);
};

seedDatabase();
