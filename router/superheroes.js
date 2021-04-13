const { Router } = require('express');
const SuperHeroesController = require('../controller/superheroes.controller');
const paginate = require('../middlewares/pagination.mw');

const heroRouter = Router();

heroRouter.post('/', SuperHeroesController.createSuperHeroes);
heroRouter.get('/', paginate, SuperHeroesController.getAllSuperHeroes);
heroRouter.delete('/:id', SuperHeroesController.deleteSuperHero);
heroRouter.put('/addSuperpowers/:superpowerId', SuperHeroesController.addSuperpowertoSuperheroes);

module.exports = heroRouter;