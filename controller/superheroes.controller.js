const { Superheroes, Superpowers } = require('../models');

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
    const { pagination = {} } = req;
    const SuperHeroes = await Superheroes.findAll({ ...pagination });

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
    await Superheroes.destroy({ where: { id } });

    res.status(201).send({});
  } catch (err) {
    next(err);
  }
};

module.exports.addSuperpowertoSuperheroes = async (req, res, next) => {
  try {
    const {
      params: { superpowerId },
      body: { superheroesId },
    } = req;

    const superheroes = await Superheroes.findByPk(superheroesId);
    const superpowers = await Superpowers.findByPk(superpowerId);

    await superpowers.addSuperheroes(superheroes);

    const superheroesWithSuperpower = await Group.findAll({
      where: { id: superpowerId },
      include: [
        {
          model: Superheroes,
          through: {
            attributes: [],
          },
        },
      ],
    });

    res.send(superheroesWithSuperpower);
  } catch (err) {
    next(err);
  }
};
