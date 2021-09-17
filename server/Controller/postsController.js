const { user, post } = require('../models');
const { verifyAccessToken, decodeToken, verifyRefreshToken, generateAccessToken, sendAccessToken, autoManageAccessToken } = require('./Functions/tokenFunction');

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
    // router.get('/:page?time=&level=&location=', filterPage);
    // 글 목록 가져오기
    try {
      const page = req.params.page;
      if (!page) {
        return res.status(400).json('잘못된 요청입니다');
      }
      const decode = await autoManageAccessToken(req, res);
      console.log(decode)
      if (!decode) {
        return res.status(401).json('권한이 없는 유저입니다');
      }
      let offset = (page > 1) ? 10 * (page - 1): 1;
      const postList = await post.findAll({
        offset: offset,
        limit : 10
      });
      res.status(200).json({
        data : postList,
        message : '성공적으로 글목록을 가져왔습니다'
      })
    } catch (err) {
      res.status(500).send(err);
    }
    //필터는 일단 나중에...

    // ! 페이지네이션
    // 쿼리문이 비어있으면 필터 없이 전체 글(하나의 페이지)목록을 보내준다.
    // 조건이 비어있을 때 빈 조건으로 검색하면 전체가 나오는지 확인 필요!

  },
  getPost: async (req, res) => {
    // router.get('/:postId', getPost);
    // 글 하나 가져오기
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json('잘못된 요청입니다');
      }
      const decode = await autoManageAccessToken(req, res);
      console.log(decode)
      if (!decode) {
        return res.status(401).json('권한이 없는 유저입니다');
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
    // const postId = req.params.postId;
    // token 제대로인지 먼저 판별
    // params에 제대로 담겨있는지 판별
    // 일치하는거 찾아서 내용 수정하기 
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
    // const postId = req.params.postId;
    // token 제대로인지 먼저 판별
    // params에 제대로 담겨있는지 판별
    // 하나 찾아서 지우기
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
}