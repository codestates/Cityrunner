const { user, post } = require('../models');

module.exports = {
  post: async (req, res) => {
    // router.post('/', posts);
    // 글쓰기
    // const { level, distance, time, max, title, comment, location } = req.body;
    // 쿠키에 담겨있는 토큰을 해독해서 userId를 얻는다 -> postManager
    // post 테이블에 레코드를 추가한다.

    // 200
    // 400 -> 유효하지 않은 토큰?
    // 500
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
    // const postId = req.params.postId;
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