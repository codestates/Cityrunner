const models = require("../models")

module.exports = {
  login : async (req, res) => {
    //POST
    let email = req.body.email
    let password = req.body.password

    const data = await models.user.findOne({
      where : {
      email : email,
      password : password
      }
    })
    return  !data ? res.status(409).json({message:"잘못된 정보입니다"}) :
                      res.status(200).json({data:data,message:"로그인 성공"})
    
  },

  logout : async (req, res) => {
    //Get
    // 헤더에 토큰이 있어야함
    return res.status(200).json({message:"로그아웃 성공"}) 
  },

  signup : async (req, res) => {
    //Post

    let email = req.body.email
    let password = req.body.password
    let username = req.body.username

    if(!email && !password && !username) return res.status(409).json({message:"입력 제대로 하세요"})

    let checkEmail = await models.user.findOne({where:{email:email}})
    let checkUsername = await models.user.findOne({where:{username:username}})
    let data = await models.user.findAll({where:{email:email,username:username}})
    
    console.log(data)

    if(checkEmail || checkUsername) return res.status(409).json({message:"이미 존재하는 이메일,닉네임 입니다"})

    await models.user.create({
      email:email,
      password:password,
      username:username
    })
    return res.status(200).json({message:"회원 가입 성공"})
  },
  check : async (req, res) => {
    //Post

    let username = req.body.username

    let data = await models.user.findOne({where:{
      username:username
    }})

    return data ? res.status(409).json({message:"중복된 닉네임입니다"})
                 : res.status(200).json({message:"사용할 수 있는 닉네입니다"})
  },
  signout : async (req, res) => {
    //Delete
    // 쿠키에 token을 받아서 유저 정보 받아야 함

    return res.status(200).json({message:"유저 삭제 성공"})    
  },
}