const models = require("../models");
const {
  generateAccessToken,
  sendAccessToken,
  verifyAccessToken,
  verifyRefreshToken,
  decodeToken,
} = require("./Functions/tokenFunction");

module.exports = {
  getMycrew: async (req, res) => {
    try {
      let accessToken = req.cookies.accessToken;
      let data = verifyAccessToken(req);

      if (!data) {
        const userId = decodeToken(accessToken).payload.id;
        const refreshToken = verifyRefreshToken(userId);
        if (!refreshToken)
          return res.status(401).json({ message: "다시 로그인 해주세요" });
        accessToken = generateAccessToken(userId);
      }

      let today = new Date();
      const todayMonth = ("0" + (today.getMonth() + 1)).slice(-2);
      const todayDay = ("0" + today.getDate()).slice(-2);

      let todayData = todayMonth + todayDay;

      let chattingRoom = await models.chattingRoom.findAll({
        where: { memberId: data.id },
        order: [["id", "DESC"]],
        limit: 1,
        raw: true,
      });

      if (chattingRoom.length === 0)
        return res.status(204).json({ message: "한번도 참가하지 않았군요" });

      let userToday = chattingRoom[0].updatedAt;
      const userMonth = ("0" + (userToday.getMonth() + 1)).slice(-2);
      const userDay = ("0" + userToday.getDate()).slice(-2);

      let userTodayData = userMonth + userDay;
      let postLog = await models.post.findOne({
        where: { id: chattingRoom[0].postId },
      });
      postLog = postLog.dataValues;

      sendAccessToken(res, accessToken);

      if (userTodayData !== todayData)
        return res.status(205).json({ message: "아직 참가중인 방 없습니다" });

      return res
        .status(200)
        .json({ data: postLog, userid: data.id, message: "참가중인 방입니다" });
    } catch (error) {
      console.log(error);
      return res.status(500).send("서버에러 입니다");
    }
  },
};
