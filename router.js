const { Router } = require('express');
const SuperHeroesController = require('./controller/superheroes.controller');
const SuperpowersController = require('./controller/superpowers.controller');
const paginate = require('./middlewares/pagination.mw');

const router = Router();

router.post('/', SuperHeroesController.createSuperHeroes);
router.get('/', paginate, SuperHeroesController.getAllSuperHeroes);
router.delete('/:id', SuperHeroesController.deleteSuperHeroes);

router.post('/superpowers', SuperpowersController.createSuperpowers);

module.exports = router;
