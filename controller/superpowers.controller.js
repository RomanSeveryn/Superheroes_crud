const createError = require('http-errors');
const { Superpowers } = require('../models');

module.exports.createSuperpowers = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuperpowers = await Superpowers.create(body);

    res.status(201).send({
      data: createdSuperpowers,
    });
  } catch (err) {
    next(err);
  }
};


module.exports.deleteSuperpower = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const rowsCount = await Superpowers.destroy({ where: { id } });

    if(rowsCount !== 1) {
      return next(createError(404, 'Power not found'))
    }
    res.send({data: 'Deleted'});
  } catch (err) {
    next(err);
  }
};