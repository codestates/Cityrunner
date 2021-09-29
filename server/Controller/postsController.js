const { user, post, chattingRoom, Sequelize } = require("../models");
const Op = Sequelize.Op;
const {

	verifyAccessToken,
	decodeToken,
	verifyRefreshToken,
	generateAccessToken,
	sendAccessToken,
	autoManageAccessToken,
} = require("./Functions/tokenFunction");

module.exports = {

  posts: async (req, res) => {
    // router.post('/', posts);
    // 글쓰기
    try {
      const decode = verifyAccessToken(req);
      if(!decode) {
        const forced = decodeToken(req.cookies.accessToken);
        if (!forced) {
          return res.status(400).json({message : '잘못된 요청 입니다'});
        }
        const refreshData = await verifyRefreshToken(forced.payload.id);
        if (!refreshData) {
          return res.status(401).json({message : '권한이 없는 유저입니다'});
        } else {
          const accessToken = generateAccessToken(refreshData.id);
          sendAccessToken(res, accessToken);
        }
      }
      const { level, time, location, max, distance, title, comment } = req.body;
      const postData = { level, time, location, max, distance, title, comment, postManager: decode.id };
      await post.create(postData);
      res.status(200).json({ message : '글이 생성 되었습니다' });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  filterPage: async (req, res) => {
    // router.get('/', filterPage);
    // 글 목록 가져오기
    try {
      const { page } = req.query;
      if (!page) {
        return res.status(400).json('잘못된 요청입니다');
      }
      let offset = (page > 1) ? 12 * (page - 1): 0;
      const filter = {}
      for (let key in req.query) {
        if (!!req.query[key]) {
          filter[key] = req.query[key];
        }
      }
      delete filter.page;
      const postList = await post.findAll({
        where : filter, //! 조건과 일치하는 경우만 출력. 범위를 지정하려면 [Op.gte] 작성필요
        offset: offset,
        limit : 12
      });
      res.status(200).json({
        data : postList,
        message : '성공적으로 글목록을 가져왔습니다'
      })
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getPost: async (req, res) => {
    // router.get('/:postId', getPost);
    // 글 하나 가져오기
    try {
      console.log('getPost')
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json('잘못된 요청입니다');
      }
      const postData = await post.findOne({
        where : {
          id : postId
        }
      });
      if (!postData) {
        return res.status(404).json('해당하는 글을 찾을 수 없습니다')
      }
      res.status(200).json({
        data : postData.dataValues,
        message : '성공적으로 글을 가져왔습니다'
      })
    } catch (err) {
      res.status(500).send(err);
    }
  },
  updatePost: async (req, res) => {
    // router.put('/:postId', updatePost);
    // 글 내용 수정하기
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json({message: '잘못된 요청입니다'})
      }
      const decode = await autoManageAccessToken(req, res);
      if (!decode) {
        return res.status(401).json({message : '권한이 없는 유저입니다'});
      }
      // body에 있는 값들로 update
      const { level, time, location, max, distance, title, comment } = req.body;
      const postData = { level, time, location, max, distance, title, comment };
      await post.update(postData, {
        where : {
          id : postId
        }
      });
      res.status(200).json({message : '글을 수정했습니다'});
    } catch (err) {
      res.status(500).send(err);
    }
  },
  deletePost: async (req, res) => {
    // router.delete('/:postId', deletePost);
    // 글 삭제하기
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json({message: '잘못된 요청입니다'})
      }
      const decode = await autoManageAccessToken(req, res);
      if (!decode) {
        return res.status(401).json({message : '권한이 없는 유저입니다'});
      }
      await post.destroy({
        where : {
          id : postId
        }
      });
      res.status(200).json({message : '성공적으로 글이 삭제되었습니다'})
    } catch (err) {
      res.status(500).send(err);
    }
  },
  joinCrew : async (req, res) => {
    // router.put('/join/:postId', joinCrew);
    // 크루 참여하기
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json({message: '잘못된 요청입니다'})
      }
      const decode = await autoManageAccessToken(req, res);
      if (!decode) {
        return res.status(401).json({message : '권한이 없는 유저입니다'})
      }
      const checkPost = await post.findOne({
        where : {
          id : postId
        }
      });
      if (!checkPost) {
        return res.status(404).json({message : '해당하는 글을 찾을 수 없습니다'});
      }
      const [result, created] = await chattingRoom.findOrCreate({
        where : {
          memberId : decode.id,
          postId : postId
        }
      });
      if (!created) {
        return res.status(409).json({message : '이미 참여한 크루입니다'});
      } else {
        return res.status(200).json({message : '크루에 참여하였습니다'});
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  exitCrew : async (req, res) => {
    // router.delete('/exit/:postId', exitCrew);
    // 크루 나가기
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json({message: '잘못된 요청입니다'})
      }
      const decode = await autoManageAccessToken(req, res);
      if (!decode) {
        return res.status(401).json({message : '권한이 없는 유저입니다'})
      }
      await chattingRoom.destroy({
        where : {
          memberId: decode.id,
          postId : postId
        }
      });
      res.status(200).json({message : '크루에서 나갔습니다'});
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

