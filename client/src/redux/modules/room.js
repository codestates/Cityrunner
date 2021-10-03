import axios from "axios";
const url = "http://localhost:4000";

const GET_ROOMS = "room/GET_ROOMS";
const CREATE_ROOM = "room/CREATE_ROOM";
const DELETE_ROOM = "room/DLEELTE_ROOM";
const PATCH_ROOM = "room/PUT_ROOM";
const SET_POST = "room/SET_POST";

export const setPost = async () => {
	const room = await axios.get(`${url}/posts/1`, {
		withCredentials: true,
	});
	return {
		type: SET_POST,
		payload: room,
	};
};

export const getRooms = async () => {
	const rooms = await axios.get(`${url}/posts?page=1`, {
		withCredentials: true,
	});
	return {
		type: GET_ROOMS,
		payload: rooms,
	};
};

export const createRoom = async () => {
	const room = await axios.post(`${url}/posts?page=1`, {
		withCredentials: true,
	});
	return {
		type: CREATE_ROOM,
		payload: room,
	};
};

export const deleteRoom = async (roomId) => {
	const room = await axios.delete(`${url}/posts/${roomId}`, {
		withCredentials: true,
	});
	return {
		type: DELETE_ROOM,
		payload: room,
	};
};

export const patchRoom = async (roomId) => {
	const room = await axios.patch(`${url}/posts/${roomId}`, {
		withCredentials: true,
	});
	return {
		type: PATCH_ROOM,
		payload: room,
	};
};

const initialState = {
	rooms: {
		loading: false,
		data: null,
		error: null,
	},
	room: {
		loading: false,
		data: null,
		error: null,
	},
};

export default function room(state = initialState, action) {
	switch (action.type) {
		case GET_ROOMS:
			return {
				...state,
				rooms: {
					loading: false,
					data: action.rooms,
					error: null,
				},
			};
		case CREATE_ROOM:
			return {
				...state,
				room: {
					loading: false,
					data: action.room,
					error: null,
				},
			};
		case DELETE_ROOM:
			return {
				...state,
				room: {
					loading: false,
					data: action.room,
					error: null,
				},
			};
		case PATCH_ROOM:
			return {
				...state,
				room: {
					loading: false,
					data: action.room,
					error: null,
				},
			};
		case SET_POST:
			return Object.assign({}, state, {
				post: action.payload,
			});

		default:
			return state;
	}
}
