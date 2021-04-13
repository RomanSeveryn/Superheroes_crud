const { Router } = require('express');
const heroRouter = require('./superheroes')
const powerRouter = require('./superpower');
const imageRouter = require('./image');

const router = Router();

router.use('/superheroes', heroRouter);
router.use('/superpowers', powerRouter);
router.use('/images', imageRouter);

module.exports = router;