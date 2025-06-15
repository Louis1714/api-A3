const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Tutor = require('./Tutor');

const Pet = sequelize.define('Pet', {
  nome: { type: DataTypes.STRING, allowNull: false },
  especie: { type: DataTypes.STRING, allowNull: false },
  raca: { type: DataTypes.STRING },
  nascimento: { type: DataTypes.DATE },
  observacoes: { type: DataTypes.TEXT }
});

Tutor.hasMany(Pet);
Pet.belongsTo(Tutor);

module.exports = Pet;
