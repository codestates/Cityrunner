const models = require("../models")

module.exports = {
    // 토큰 받아서 해당 유저의 인데스을 받아서 채팅룸에 있는지 체크한다.
  getMycrew: async (req, res) => {
    try{
        let data = await models.user.findAll({
           where:{
               memberId:12
           },
            limit : 3,
            order: [['updatedAt','DESC']]
        })
        console.log(data)
    } catch (error) {
        console.log(error)
        return
    }
  },
}