const { Superheroes } = require('../models');

module.exports.createSuperHeroes = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuperHeroes = await Superheroes.create(body);

    res.status(201).send({
      data: createdSuperHeroes,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllSuperHeroes = async (req, res, next) => {
  try {
    const SuperHeroes = await Superheroes.findAll();

    res.status(201).send({
      data: SuperHeroes,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperHeroes = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const createdSuperHeroes = await Superheroes.destroy({ where: { id } });

    res.status(201).send({
    });
  } catch (err) {
    next(err);
  }
};
