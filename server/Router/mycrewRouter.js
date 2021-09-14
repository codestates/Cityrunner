const express = require('express');
const router = express.Router();
const{ getMycrew, exitMycrew, deleteMycrew } = require('../Controller/mycrewController');

router.get('/', getMycrew);
router.patch('/', exitMycrew);
router.delete('/', deleteMycrew);

module.exports = router;