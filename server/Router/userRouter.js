const express = require('express');
const router = express.Router();
const{ login, logout, signup,check, signout, oauth } = require('../Controller/userController');


router.get('/logout', logout);

router.post('/login', login);
router.post('/check', check);
router.post('/signup', signup);

router.delete('/signout', signout);

router.post('/oauth', oauth);

module.exports = router;