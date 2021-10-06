import axios from "axios";
const url = "http://localhost:4000";

const SELECT_MAP = "filter/SELECT_MAP";

export const setMap = (data) => {
	console.log(data, "@@@@@@@");
	return {
		type: SELECT_MAP,
		payload: data,
	};
};

const init = {
	mapinfo: "",
	state: 1,
};

export default function filterMap(state = init, action) {
	console.log(action, "@#@#@#@#@#@#@#@#");
	switch (action.type) {
		case SELECT_MAP:
			return {
				...state,
				state: action.payload,
			};
		default:
			return state;
	}
}
