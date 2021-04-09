const { Router } = require('express');
const path = require('path');
const multer = require('multer');
const SuperHeroesController = require('./controller/superheroes.controller');
const SuperpowersController = require('./controller/superpowers.controller');
const paginate = require('./middlewares/pagination.mw');

const upload = multer({dest: path.resolve(__dirname, '../public/images')});

const router = Router();

router.post('/', SuperHeroesController.createSuperHeroes);
router.get('/', paginate, SuperHeroesController.getAllSuperHeroes);
router.delete('/:id', SuperHeroesController.deleteSuperHeroes);
router.put('/addSuperpowers/:superpowerId', SuperHeroesController.addSuperpowertoSuperheroes);

router.post('/superpowers', SuperpowersController.createSuperpowers);
router.post('/:superheroesId/image', upload.single('image'), SuperHeroesController.createImage);

module.exports = router;
