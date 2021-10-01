const { default: axios } = require("axios");

const models = require("../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  saveRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  decodeToken,
  destroyToken,
} = require("./Functions/tokenFunction");

module.exports = {
  login: async (req, res) => {
    //POST

    try {
      let email = req.body.email;
      let password = req.body.password;
      // 패스워드 안주기

      const data = await models.user.findOne({
        where: {
          email: email,
          password: password,
        },
        attributes: { exclude: ["password"] },
      });

      if (!data) {
        return res.status(409).json({ message: "잘못된 정보입니다" });
      } else {
        let refreshToken = await verifyRefreshToken(data.id);
        if (!refreshToken) {
          refreshToken = await generateRefreshToken(data.id);
          await saveRefreshToken(data.id, refreshToken);
        }

        let accessToken = await generateAccessToken(data.id);
        await sendAccessToken(res, accessToken);
        console.log(data);
        return res.status(200).json({ data: data, message: "로그인 성공" });
      }
    } catch (err) {
      if (err) {
        res.status(500).send("서버 에러");
      }
    }
  },

  logout: async (req, res) => {
    //Get

    let data = verifyAccessToken(req);
    if (!data) return res.status(409).json({ message: "로그아웃 실패" });

    return res
      .status(200)
      .clearCookie("accessToken")
      .json({ message: "로그아웃 성공" });
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
    try {
      // let username = req.body.username;

      // let data = await models.user.findOne({
      //   where: {
      //     username: username,
      //   },
      // });

      return data
        ? res.status(409).json({ message: "중복된 닉네임입니다" })
        : res.status(200).json({ message: "사용할 수 있는 닉네입니다" });
    } catch (err) {
      if (err) {
        res.status(500).send("서버 에러");
      }
    }
  },

  signout: async (req, res) => {
    //Delete
    // 쿠키에 token을 받아서 유저 정보 받아야 함

    try {
      let data = await verifyAccessToken(req);
      if (!data) return res.status(409).json({ message: "토큰 없어요" });

      console.log(data.id);

      await destroyToken(res, data.id);
      await models.user.destroy({
        where: {
          id: data.id,
        },
      });

      return res.status(200).json({ message: "유저 삭제 성공" });
    } catch (error) {
      console.log(error);
      return res.end("test");
    }
  },

  oauth: async (req, res) => {
    // POST /user/oauth
    // Google, Kakao에 정보 요청하기
    try {
      const { authorizationCode, category } = req.body;
      const data = {};
      if (category === "google") {
        // Google
        await axios
          .get(
            "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
              authorizationCode,
            {
              headers: {
                authorization: `token ${authorizationCode}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            const { email, name, picture } = res.data;
            data.email = email;
            data.username = name;
            data.image = picture;
          })
          .catch((err) => {
            res.status(400).send("잘못된 요청입니다.");
          });
      } else if (category === "kakao") {
        //Kakao
        await axios
          .get("https://kapi.kakao.com/v2/user/me", {
            headers: {
              authorization: `Bearer ${authorizationCode}`,
            },
          })
          .then((res) => {
            data.email = res.data.kakao_account.email || res.data.id;
            data.username = res.data.properties.nickname;
            data.image = res.data.kakao_account.profile.profile_image_url;
          })
          .catch((err) => {
            res.status(400).send("잘못된 요청입니다.");
          });
      }

      const [result, created] = await models.user.findOrCreate({
        where: {
          email: data.email,
          password: category === "google" ? "google" : "kakao",
        },
        defaults: {
          username: data.username,
          image: data.image,
        },
      });

      res.status(200).json({
        message: "소셜 로그인 성공",
        data: {
          email: result.email,
          password: result.password,
        },
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
