import { combineReducers } from 'redux';
import { userReducer, themeReducer } from './reducers';

const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer,
});

export default rootReducer;
