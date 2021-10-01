//로그인을 진행하기위해서는
//form에서 submit을 통해 현재 nmae과 비밀번호를 dispatch로 실행 시켜줘야 한다.
import axios from "axios";
const url = "http://localhost:4000";

//액션타입
const REGISTER_USER = "user/REGISTER_USER";
const LOGIN = "user/LOGIN";
const LOGIN_CHECK = "user/LOGIN_CHECK";
const GET_USERINFO = "user/GET_USERINFO";

// userInfo를 받아와서 dispatch로 실행을 시켜줘야한다.
// login 구현
// login 유지 구현
// 로그아웃 구현
// 비밀번호 바꾸기 구현

//액션생성함수
export const registerUser = (dataToSubmit) => {
  const data = axios.post(`${url}/user/signup`, dataToSubmit);
  return {
    type: REGISTER_USER,
    payload: data,
  };
};

// export const loginUser = (userInfo) => {
// 	const data = axios.post(`${url}/user/login`, userInfo, {
// 		withCredentials: true,
// 	});
// 	return {
// 		type: LOGIN_USER,
// 		payload: data,
// 	};
// };

//유저정보구하기
export const getUserInfo = () => {
  const data = axios.get(`${url}/mypage`, {
    withCredentials: true,
  });
  return {
    type: GET_USERINFO,
    payload: data,
  };
};

// 리듀서 함수
export default function user(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        success: action.payload,
      };
    // case LOGIN_USER:
    // 	return {
    // 		...state,
    // 		loginSuccess: action.payload,
    // 	};
    case GET_USERINFO:
      return {
        ...state,
        data: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    default:
      return state;
  }
}

//npm i moment로 수정가능
