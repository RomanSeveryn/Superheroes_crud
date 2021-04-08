const { Router } = require('express');
const SuperHeroesController = require('./controller/superheroes.controller');
const paginate = require('./middlewares/pagination.mw')
const router = Router();

router.post('/', SuperHeroesController.createSuperHeroes);
router.get('/', paginate, SuperHeroesController.getAllSuperHeroes);
router.delete('/:id', SuperHeroesController.deleteSuperHeroes);

module.exports = router;
