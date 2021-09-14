const express = require('express');
const router = express.Router();
const{ login, logout, signup, signout } = require('../Controller/userController');

// router.post('/login', login);
// router.get('/logout', logout);
// router.post('/signup', signup);
// router.delete('/signout', signout);

module.exports = router;