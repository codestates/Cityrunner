const express = require('express');

const multer =require("multer")
const upload = multer({ dest: 'upload/'})

const router = express.Router();
const{ getImage, uploadImage} = require('../Controller/imageController');

router.get('/:key', getImage);
router.post('/', upload.single('image'), uploadImage);


module.exports = router;