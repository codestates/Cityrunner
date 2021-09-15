const { user, post } = require('../models');
const { verifyAccessToken } = require('./Functions/tokenFunction');

module.exports = {
  post: async (req, res) => {
    // router.post('/', posts);
    // 글쓰기
    try {
      const { level, distance, time, max, title, comment, location } = req.body;
      const result = verifyAccessToken(req);
      if (!result) {
        res.status(400).send({ message : '잘못된 요청입니다' });
        return;
      }
      const postInfo = { level, distance, time, max, title, comment, location, postManager : result.id };
      await post.create(postInfo);
      res.status(200).send({ message : '글이 생성되었습니다' });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  filterPage: async (req, res) => {
    // router.get('/:page?time=&level=&location=', filterPage);
    // 글 목록 가져오기
    // ! 페이지네이션
    // 쿼리문이 비어있으면 필터 없이 전체 글(하나의 페이지)목록을 보내준다.

  },
  getPost: async (req, res) => {
    // router.get('/:postId', getPost);
    // 글 하나 가져오기
    try {
      const postId = req.params.postId;
      // console.log(postId)
      const result = verifyAccessToken(req);
      console.log(result)
      if (!postId || !result) {
        res.status(400).send({ message : '잘못된 요청입니다'});
        return;
      }
      const postInfo = await post.findOne({
      }); // , data : postInfo
      console.log(postInfo)
      res.status(200).send({ message : '성공적으로 글을 가져왔습니다.' });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
    // token 제대로인지 먼저 판별
    // params에 제대로 담겨있는지 판별
    // posts 테이블에서 postId 일치하는 항목 전체 가져와서 전달하기 -> findOne
  },
  updatePost: async (req, res) => {
    // router.patch('/:postId', updatePost);
    // 글 내용 수정하기
    // const postId = req.params.postId;
    // token 제대로인지 먼저 판별
    // params에 제대로 담겨있는지 판별
    // 일치하는거 찾아서 내용 수정하기 
  },
  deletePost: async (req, res) => {
    // router.delete('/:postId', deletePost);
    // 글 삭제하기
    // const postId = req.params.postId;
    // token 제대로인지 먼저 판별
    // params에 제대로 담겨있는지 판별
    // 하나 찾아서 지우기
  },
}