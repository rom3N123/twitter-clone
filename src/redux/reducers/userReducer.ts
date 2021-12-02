import produce from 'immer';
import { Action, ActionPayload } from 'redux';

interface IUser {
	name: string;
}

const initialState: IUser = {
	name: 'Roman',
};

const SET_USER = 'SET_USER';

const userReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_USER:
			const _action = action as ActionPayload<IUser>;
			return produce(state, (draft) => {
				draft = _action.payload;
				return draft;
			});
		default:
			return state;
	}
};

export default userReducer;

export const setUser = (payload: IUser): ActionPayload<IUser> => ({
	type: SET_USER,
	payload,
});
