const express = require("express");
const router = express.Router();
const {
  createAndSendMessage,
  getMessage,
  deleteMessage,
  enterMessage,
  reportUser,
} = require("../Controller/chatController");

router.post("/:postId", createAndSendMessage);
router.get("/", getMessage);
router.delete("/:postId", deleteMessage);
//router.get('/:postId', enterMessage);
router.post("/:postId/:userid", reportUser);

module.exports = router;
