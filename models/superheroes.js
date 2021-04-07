'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Superheroes extends Model {
    static associate (models) {
      Superheroes.hasMany(models.Image, {
        foreignKey: 'superheroesId'
      });
      Superheroes.belongsToMany(models.Superpowers, {
        through: 'superheroes_to_superpowers',
        foreignKey: 'superheroesId'
      })
    }
  }
  Superheroes.init(
    {
      nickname: {
        type: DataTypes.STRING
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      originDescription: {
        field: 'origin_description',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      catchPhrase: {
        field: 'catch_phrase',
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
      modelName: 'Superheroes',
      tableName: 'superheroes',
      underscored: true
    }
  )
  return Superheroes
}
