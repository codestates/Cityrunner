const SELECT_MAP = "filter/SELECT_MAP";
const MODAL_OPEN = "filter/MODAL_OPEN";
const MODAL_CLOSE = "filter/MODAL_CLOSE";

export const setMap = (data) => {
	return {
		type: SELECT_MAP,
		payload: data,
	};
};

export const modalopen = () => {
	return {
		type: MODAL_OPEN,
		payload: true,
	};
};

export const modalclose = () => {
	return {
		type: MODAL_CLOSE,
		payload: false,
	};
};

const init = {
	mapinfo: "",
	state: 1,
	modal: false,
};

export default function filterMap(state = init, action) {
	switch (action.type) {
		case SELECT_MAP:
			return {
				...state,
				state: action.payload,
			};
		case MODAL_OPEN:
			return {
				...state,
				modal: true,
			};
		case MODAL_CLOSE:
			return {
				...state,
				modal: false,
			};
		default:
			return state;
	}
}
