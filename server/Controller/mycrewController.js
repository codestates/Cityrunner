const models = require("../models")
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  saveRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  decodeToken,
  destroyToken,
} = require("./Functions/tokenFunction")

module.exports= {
    getMycrew: async (req,res)=>{
        
        let accessToken = verifyAccessToken(req)
        if(!accessToken) {
            accessToken = req.cookies.accessToken;
            const userId = decodeToken(accessToken).payload.id    
            const refreshToken = verifyRefreshToken(userId)
            if(!refreshToken) return res.status(401).json({message: "다시 로그인 해주세요"})            
            accessToken = generateAccessToken(userId)
        }
        
        
        sendAccessToken(res,accessToken)

        return res.status(200).json({message:"크루페이지로~"})
    },
}