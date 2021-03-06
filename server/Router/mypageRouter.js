const express = require('express');
const router = express.Router();
const{ getUserInfo, updateUserInfo } = require('../Controller/mypageController');

router.get('/', getUserInfo);
router.patch('/', updateUserInfo);

module.exports = router;