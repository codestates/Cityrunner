import { combineReducers } from "redux";
import user from "./modules/user";
import room from "./modules/room";

const rootReducer = combineReducers({
	user,
	room,
});

export default rootReducer;
