import { combineReducers } from "redux";
import user from "./modules/user";
import room from "./modules/room";
import filterMap from "./modules/filterMap";

const rootReducer = combineReducers({
	user,
	room,
	filterMap,
});

export default rootReducer;
