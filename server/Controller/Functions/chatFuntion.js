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

module.exports = {
  enterChat: (socket) => {
    const uuid = getUniqueID();
    const leave = (roomId) => {
      if (!rooms[roomId][uuid]) return;
      if (Object.keys(rooms[roomId]).length === 1) delete rooms[roomId];
      else delete rooms[roomId][uuid];
    };
    socket.on("message", async (msg) => {
      const { roomId, userId, chat, option } = JSON.parse(msg);
      if (option === "Join") {
        if (!rooms[roomId]) rooms[roomId] = {};
        if (!rooms[roomId][uuid]) rooms[roomId][uuid] = socket;
      } else if (option === "leave") {
        leave(roomId);
      } else if (!option) {
        if (rooms[roomId][uuid]) {
          await models.chattingLog.create({
            comment: chat,
            memberId: userId,
            postId: roomId,
          });
          Object.entries(rooms[roomId]).forEach(([, sock]) => sock.send(msg));
        }
      }
    });

    socket.on("close", () => {
      Object.keys(rooms).forEach((room) => leave(room));
    });
  },
};
