const models = require("../../models");

let rooms = {};

let getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4();
};
let arr = [];

module.exports = {
  enterChat: (socket) => {
    arr.push(socket);
    console.log(arr.length);
    const uuid = getUniqueID();
    const leave = (roomId) => {
      if (!rooms[roomId][uuid]) return;
      if (Object.keys(rooms[roomId]).length === 1) delete rooms[roomId];
      else delete rooms[roomId][uuid];
    };
    socket.on("message", async (msg) => {
      console.log(msg);
      const jsonParseMsg = JSON.parse(msg);
      const { roomId, userId, chat, option } = jsonParseMsg;
      if (option === "Join") {
        if (!rooms[roomId]) rooms[roomId] = {};
        if (!rooms[roomId][uuid]) rooms[roomId][uuid] = socket;
      } else if (option === "leave") {
        leave(roomId);
      } else if (!option) {
        if (rooms[roomId][uuid]) {
          console.log(roomId, userId, chat);
          await models.chattingLog.create({
            comment: chat,
            memberId: userId,
            postId: roomId,
          });
          let userInfo = await models.user.findOne({
            where: { id: userId },
          });
          jsonParseMsg["username"] = userInfo.dataValues.username;
          jsonParseMsg["image"] = userInfo.dataValues.image;
          Object.entries(rooms[roomId]).forEach(([, sock]) =>
            sock.send(JSON.stringify(jsonParseMsg))
          );
        }
      }
    });

    socket.on("close", () => {
      Object.keys(rooms).forEach((room) => leave(room));
    });
  },
};
