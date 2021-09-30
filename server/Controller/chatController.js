// createAndSendMessage, getMessage, deleteMessage, enterMessage, reportUser

const models = require("../models");

module.exports = {
  createAndSendMessage: async (req, res) => {
    const { comment, memberId, postId } = req.body;
    console.log(req.body);
    await models.chattingLog.create({
      comment: comment,
      memberId: memberId,
      postId: postId,
    });
    return res.status(200).send("ok");
  },
  getMessage: async (req, res) => {
    // GET end point : /chat/:postId
    const postId = req.params.postId;
    const chatroomId = req.params.chatroomId;

    // 이전에 있는 대화 내용 불러오기
    const chattingLogs = await models.chattingLog.findAll({
      include: [
        {
          model: models.user,
          required: true,
          attributes: {
            exclude: [
              "createdAt",
              "updatedAt",
              "id",
              "email",
              "password",
              "refreshToken",
            ],
          },
        },
      ],
      where: { postId: postId },
    });
    // 대화방에 가는 유저가 맞는지 판단하기위해서
    const chattingRoom = await models.chattingRoom.findOne({
      where: { memberId: 1 },
    });

    return res.json({ data: chattingLogs });
  },
  deleteMessage: async (req, res) => {
    // DELETE end point : /chat/:postId/:chatroomId
  },
  enterMessage: async (req, res) => {},
  reportUser: async (req, res) => {
    // POST end point : /chat/:chatroom/:userid
  },
};
