const { user, post, userMedal, medal, chattingRoom } = require('../models');
const { autoManageAccessToken } = require('./Functions/tokenFunction');

module.exports = {
  getUserInfo: async (req, res) => {
    // router.get('/', getUserInfo);
    try {
      const decode = await autoManageAccessToken(req,res);
      if (!decode) {
        return res.status(401).json({message : '권한이 없는 유저입니다'});
      }
      const userInfo = await user.findOne({
        include : [
          {
            model : userMedal,
            required : true,
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'id']
            },
            include : {
              model : medal,
              required : true,
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            }
          },
          {
            model : chattingRoom,
            required : true,
            include : {
              model : post,
              required : true,
            }
          }
        ],
        where : {
          id : decode.id
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'refreshToken']
        }
      });
      const userData = {
        email : userInfo.email,
        username : userInfo.username,
        image : userInfo.image,
        oauth: (((userInfo.password === 'google') || (userInfo.password === 'kakao'))? true : false),
        medal : userInfo.userMedals.map((el) => {
          return {
            id : el.medal.id,
            medalName : el.medal.medalName,
            medalDesc : el.medal.medalDesc
          }
        }),
        runningDays : userInfo.chattingRooms.map((el) => {
          return {
            createdAt : el.createdAt,
            distance : el.post.distance
          }
        }),
        participation : userInfo.chattingRooms.map((el) => {
          return {
            level : el.post.level,
            distance : el.post.distance,
            location : el.post.location
          }
        })
      };
      // medal, runningDays, participant
      res.status(200).json({
        message : "성공적으로 유저정보를 가져왔습니다",
        data: userData
      })
    } catch (err) {
      res.status(500).send(err);
    }
  },

  updateUserInfo: async (req, res) => {
    // router.patch('/', updateUserInfo);
    try {
      const decode = await autoManageAccessToken(req,res);
      if (!decode) {
        return res.status(401).json({message : '권한이 없는 유저입니다'});
      }
      const { username, password } = req.body;
      if (!!username) {
        const newUsername = await user.findOne({
          where : {
            username : username
          }
        });
        if (!!newUsername) {
          return res.status(409).json({message : '이미 존재하는 닉네임입니다'});
        }
        await user.update({username : username}, {
          where : {
            id : decode.id
          }
        });
      }
      if (!!password) {
        user.update({password : password}, {
          where : {
            id : decode.id
          }
        });
      };
      res.status(200).json({message : '변경되었습니다'});
    } catch (err) {
      res.status(500).send(err);
    }
  }
}