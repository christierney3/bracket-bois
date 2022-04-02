const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Round.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    round_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tournament_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'round',
  }
);

module.exports = Round;
