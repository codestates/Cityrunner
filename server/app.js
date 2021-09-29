const express = require("express");
const app = express();

const cors = require("cors");
const http = require("http");
const WebSocket = require("ws");
const cookieParser = require("cookie-parser");

const port = 4000;

const userRouter = require("./Router/userRouter");
const chatRouter = require("./Router/chatRouter");
const mypageRouter = require("./Router/mypageRouter");
const mycrewRouter = require("./Router/mycrewRouter");
const postsRouter = require("./Router/postsRouter");
const imageRouter = require("./Router/imageRouter");

const socketChat = require("./Controller/Functions/chatFuntion");

const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello 4K!");
});
//http route
app.use("/user", userRouter);
app.use("/mypage", mypageRouter);
app.use("/chat", chatRouter);
app.use("/mycrew", mycrewRouter);
app.use("/posts", postsRouter);
app.use("/images", imageRouter);

//socket route
const ws = new WebSocket.Server({
  server,
});

ws.getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4();
};

ws.on("connection", (socket) => socketChat.enterChat(socket));

server.listen(port, () => {
  console.log(`listening at => http://localhost.com:${port}`);
});
