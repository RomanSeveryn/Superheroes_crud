const { Router } = require('express');
const SuperHeroesController = require('./controller/superheroes.controller');
const router = Router();

router.post('/', SuperHeroesController.createSuperHeroes);
router.get('/', SuperHeroesController.getAllSuperHeroes);
router.delete('/:id', SuperHeroesController.deleteSuperHeroes);

module.exports = router;
