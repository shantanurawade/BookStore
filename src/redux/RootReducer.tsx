import { combineReducers } from "redux";
import { OnAuthToggle } from "./OnAuthToggle";

export const rootReducer = combineReducers({
    auth: OnAuthToggle,
})