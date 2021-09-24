const express = require('express');
const router = express.Router();
const{ posts, filterPage, getPost, updatePost, deletePost, joinCrew, exitCrew } = require('../Controller/postsController');

router.post('/', posts);
router.get('/', filterPage);
router.get('/:postId', getPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);
router.put('/join/:postId', joinCrew);
router.delete('/exit/:postId', exitCrew);



module.exports = router;