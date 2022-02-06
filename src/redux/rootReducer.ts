import { combineReducers } from "redux";
import { user, theme, general, auth, messages } from "./ducks";

const rootReducer = combineReducers({
    user,
    theme,
    general,
    auth,
    messages,
});

export default rootReducer;
