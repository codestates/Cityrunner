const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
//파일 업로드
const multer =require("multer")
const upload = multer({ dest: 'upload/'})
const {uploadFile,getFileStream} = require('./s3')
const fs = require('fs')
const util = require('util')
// 비동기로 돌리려는 함수를 promise로 감싸주지 않고 사용할 수 있다 util.promisify
const unlinkFile = util.promisify(fs.unlink)
const port = 4000;

const userRouter = require('./Router/userRouter');
const chatRouter = require('./Router/chatRouter');
const mypageRouter = require('./Router/mypageRouter');
const mycrewRouter = require('./Router/mycrewRouter');
const postsRouter = require('./Router/postsRouter');

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors({
  origin : ['http://localhost:3000'],
  credentials : true
}));


app.get('/images/:key',(req,res)=>{

  const key = req.params.key
  const readStream = getFileStream(key)
  
  readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req,res) =>{
  const file = req.file
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  
  res.send({imagePath:`images/${result.Key}`})
})

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