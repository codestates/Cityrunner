
const models = require("../models")
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  saveRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  decodeToken,
  destroyToken
} = require("./Functions/tokenFunction")


module.exports = {
  login: async (req, res) => {
    //POST

    try{
      let email = req.body.email
      let password = req.body.password

      const data = await models.user.findOne({
        where : {
        email : email,
        password : password

          }
    })
    
      if(!data) {

        return res.status(409).json({message:"잘못된 정보입니다"})

      } else {

        let refreshToken = await verifyRefreshToken(data.id)
        if(!refreshToken) {
          refreshToken = await generateRefreshToken(data.id)
          await saveRefreshToken(data.id,refreshToken)
        }

        let accessToken = await generateAccessToken(data.id)
        await sendAccessToken(res,accessToken)
        return res.status(200).json({data:data,message:"로그인 성공"})

      }
                      
    } catch(err) {

      if(err) {

        res.status(500).send("서버 에러")

      }
    }

  },

  logout: async (req, res) => {
    //Get


    let data = verifyAccessToken(req)
    if(!data) return  res.status(409).json({message:"로그아웃 실패"})
    
    return res.status(200).clearCookie('accessToken').json({message:"로그아웃 성공"}) 
  },

  signup: async (req, res) => {
    //Post


    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    if (!email && !password && !username)
      return res.status(409).json({ message: "입력 제대로 하세요" });

    let checkEmail = await models.user.findOne({ where: { email: email } });
    let checkUsername = await models.user.findOne({
      where: { username: username },
    });
    
    if (checkEmail || checkUsername)
      return res
        .status(409)
        .json({ message: "이미 존재하는 이메일,닉네임 입니다" });

    await models.user.create({

      email: email,
      password: password,
      username: username,
      
    });
    
    return res.status(200).json({ message: "회원 가입 성공" });
    
  },

  check: async (req, res) => {
    //Post
    try{

    let username = req.body.username;

    let data = await models.user.findOne({
      where: {
        username: username,
      },
    });

    return data ? res.status(409).json({message:"중복된 닉네임입니다"}) : res.status(200).json({message:"사용할 수 있는 닉네입니다"})

    } catch (err) {
      if (err) {
        res.status(500).send('서버 에러');
      }
    }
  },

  signout: async (req, res) => {
    //Delete
    // 쿠키에 token을 받아서 유저 정보 받아야 함

    try{
      let data =await verifyAccessToken(req)
      if(!data) return res.status(409).json({message:"토큰 없어요"})
      
      
      console.log(data.id)
      
      await destroyToken(res,data.id)
      await models.user.destroy({
        where:{
          id:data.id
        }
      })
    
      return res.status(200).json({message:"유저 삭제 성공"})    
    } catch(error) {
      console.log(error)
      return res.end("test")

    }
    
  },
}
