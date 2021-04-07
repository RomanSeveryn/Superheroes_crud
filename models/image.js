'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate (models) {
      Image.belongsTo(models.Superheroes, {
        foreignKey: 'superheroesId'
      })
    }
  }
  Image.init(
    {
      images: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Image',
      tableName: 'images',
      underscored: true
    }
  )
  return Image
}
