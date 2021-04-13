const path = require('path');
const { Router } = require('express');
const multer = require('multer');
const SuperHeroesController = require('../controller/superheroes.controller');
const SuperpowersController = require('../controller/superpowers.controller');
const paginate = require('../middlewares/pagination.mw');

const upload = multer({
  dest: path.resolve(__dirname, './public/images')
});

const router = Router();




router.post('/:superheroesId/image', upload.single('image'), SuperHeroesController.createImage);

module.exports = router;
