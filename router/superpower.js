const { Router } = require('express');
const SuperpowersController = require('../controller/superpowers.controller');

const powerRouter = Router();

powerRouter.post('/', SuperpowersController.createSuperpowers);
powerRouter.delete('/:id', SuperpowersController.deleteSuperpower);

module.exports = powerRouter;
