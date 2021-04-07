'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Superpowers extends Model {
    static associate (models) {
      Superpowers.belongsToMany(models.Superheroes, {
        through: 'superheroes_to_superpowers',
        foreignKey: 'superpowerId'
      })
    }
  }
  Superpowers.init(
    {
      superpower: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: 'Superpowers',
      tableName: 'superheroes',
      underscored: true
    }
  )
  return Superpowers
}
