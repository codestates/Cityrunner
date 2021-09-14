const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const port = 4000;

const userRouter = require('./Router/userRouter');
const chatRouter = require('./Router/chatRouter');
const mypageRouter = require('./Router/mypageRouter');
const mycrewRouter = require('./Router/mycrewRouter');
const postsRouter = require('./Router/postsRouter');

app.use(cors({
  origin : ['http://localhost:3000'],
  credentials : true
}));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello 4K!')
});
app.use('/user', userRouter);
app.use('/mypage', mypageRouter);
app.use('/chat', chatRouter);
app.use('/mycrew', mycrewRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`listening at => http://localhost.com/${port}`)
})