import { combineReducers } from "redux";
import { user, theme } from "./ducks";

const rootReducer = combineReducers({
    user,
    theme,
});

export default rootReducer;
