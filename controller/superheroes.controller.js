const createError = require('http-errors');
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

module.exports.deleteSuperHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Superheroes.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Hero not found'));
    }

    res.send({data: result});
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

    const superheroesWithSuperpower = await Superpowers.findAll({
      where: { id: superpowerId },
      include: [
        {
          model: Superheroes,
          attributes: {
            exclude: ['createdAt','updatedAt'],
          },
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


module.exports.createImage = async (req, res, next) => {
  try {
    const {
      file: { filename },
      params: { superheroesId },
    } = req;

    const [count, [updatedHero]] = await Superheroes.update(
      { images: filename },
      {
        where: { id: superheroesId },
        returning: true,
      }
    );

    res.send(updatedHero);
  } catch (err) {
    next(err);
  }
};