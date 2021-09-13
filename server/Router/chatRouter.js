const express = require('express');
const router = express.Router();
const{ createAndSendMessage, getMessage, deleteMessage, enterMessage, reportUser } = require('../Controller/chatController');

// router.post('/:postId/:chatroomId', createAndSendMessage);
// router.get('/:postId/:chatroomId', getMessage);
// router.delete('/:postId/:chatroomId', deleteMessage);
// router.get('/:postId/:chatroomId', enterMessage);
// router.post('/:chatroom/:userid', reportUser);

module.exports = router;