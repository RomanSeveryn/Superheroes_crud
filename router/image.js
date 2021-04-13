const path = require('path');
const { Router } = require('express');
const multer = require('multer');
const ImagesController = require('../controller/images.controller');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} ${file.originalname}`);
  },
});
const upload = multer({ storage });

const imageRouter = Router();

imageRouter.post('/', upload.single('image'), ImagesController.createImage);

module.exports = imageRouter;
