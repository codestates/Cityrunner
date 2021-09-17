const express = require('express');
const router = express.Router();
const{ posts, filterPage, getPost, updatePost, deletePost } = require('../Controller/postsController');

router.post('/', posts);
// router.get('/:page?time=&level=&location=', filterPage);
router.get('/:postId', getPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);


module.exports = router;