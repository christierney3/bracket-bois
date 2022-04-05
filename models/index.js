const { Match, Score, Player, Round, Team, Tournament, User }  = require('../models');


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

Match.hasMany(Outcome, {
  foreignKey: 'match_id',
  onDelete: 'CASCADE'
});

Outcome.belongsTo(Match, {
  foreignKey: 'match_id'
});

module.exports = { Match, Score, Player, Round, Team, Tournament, User };
