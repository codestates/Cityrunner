//로그인을 진행하기위해서는
//form에서 submit을 통해 현재 nmae과 비밀번호를 dispatch로 실행 시켜줘야 한다.
import axios from "axios";
const url = "http://localhost:4000";

//액션타입
const REGISTER_USER = "user/REGISTER_USER";
const LOGIN = "user/LOGIN";
const LOGIN_CHECK = "user/LOGIN_CHECK";
const LOGOUT = "user/LOGOUT";
const SET_IS_LOGIN = "user/SET_IS_LOGIN";
const SET_USERINFO = "user/SET_USERINFO";

export const setIsLogin = (isLogin) => {
  return {
    type: SET_IS_LOGIN,
    payload: {
      isLogin,
    },
  };
};

export const setUserinfo = (userinfo) => {
  return {
    type: SET_USERINFO,
    payload: {
      ...userinfo,
    },
  };
};

export const registerUser = (dataToSubmit) => {
	const data = axios.post(`${url}/user/signup`, dataToSubmit);
	return {
		type: REGISTER_USER,
		payload: data,
	};
};

export const loginUser = (userInfo) => {
  const data = axios.post(`${url}/user/login`, userInfo, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
  return {
    type: LOGIN,
    payload: data,
  };
};

export const logoutUser = async () => {
	const data = await axios.get(`${url}/user/logout`, {
		withCredentials: true,
	});
	return {
		type: LOGOUT,
		payload: data,
	};
};

const initialState = {
  isLogin: false,
  isLoading: false,
  userinfo: {
    id: "",
    email: "",
    nickname: "",
  },
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case SET_IS_LOGIN:
			return Object.assign({}, state, {
				isLogin: action.payload.isLogin,
			});
		case SET_USERINFO:
			return Object.assign({}, state, {
				userinfo: action.payload,
			});
		case LOGOUT:
			return {
				...state,
				isLogin: false,
				isLoding: false,
			};
		default:
			return state;
	}
}
