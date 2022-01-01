import { combineReducers } from "redux";
import { user, theme, general, auth } from "./ducks";

const rootReducer = combineReducers({
    user,
    theme,
    general,
    auth,
});

export default rootReducer;
