import { combineReducers } from "redux";
import { user, theme, general } from "./ducks";

const rootReducer = combineReducers({
    user,
    theme,
    general,
});

export default rootReducer;
