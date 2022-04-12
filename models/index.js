const Match = require('./Match');
const Score = require('./Score');
const Round = require('./Round');
const Team = require('./Team');
const Tournament = require('./Tournament');
const User = require('./User');

User.hasMany(Tournament, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tournament.belongsTo(User, {
  foreignKey: 'user_id'
});

Tournament.hasMany(Round, {
  foreignKey: 'tournament_id',
  onDelete: 'CASCADE'
});

Round.belongsTo(Tournament, {
  foreignKey: 'tournament_id'
});

Round.hasMany(Match, {
  foreignKey: 'round_id',
  onDelete: 'CASCADE'
});

Match.belongsTo(Round, {
  foreignKey: 'round_id'
});

Match.hasMany(Score, {
  foreignKey: 'match_id',
  onDelete: 'CASCADE'
});

Score.belongsTo(Match, {
  foreignKey: 'match_id'
});

Match.belongsToMany(Team, { through: Score });

Team.belongsToMany(Match, { through: Score });



module.exports = { Match, Score, Round, Team, Tournament, User };
