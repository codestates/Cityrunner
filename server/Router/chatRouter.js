const express = require("express");
const router = express.Router();
const { getMessage } = require("../Controller/chatController");

router.get("/", getMessage);

module.exports = router;
