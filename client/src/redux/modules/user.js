//로그인을 진행하기위해서는
//form에서 submit을 통해 현재 nmae과 비밀번호를 dispatch로 실행 시켜줘야 한다.

import axios from "axios";
const url = "http://localhost:4000";

//액션타입
const REGISTER_USER = "user/REGISTER_USER";
const LOGIN_USER = "user/LOGIN_USER";

//액션생성함수
export const registerUser = (dataToSubmit) => {
	const data = axios.post(`${url}/user/signup`, dataToSubmit);
	return {
		type: REGISTER_USER,
		payload: data,
	};
};

export const loginUser = (dataToSubmit) => {
	const data = axios.post(`${url}/user/login`, dataToSubmit, {
		withCredentials: true,
	});
	return {
		type: LOGIN_USER,
		payload: data,
	};
};

// 리듀서 함수
export default function user(state, action) {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				success: action.payload,
			};
		case LOGIN_USER:
			return {
				...state,
				loginSuccess: action.payload,
			};
		default:
			return state;
	}
}
