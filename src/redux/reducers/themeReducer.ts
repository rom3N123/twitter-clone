import produce from 'immer';
import { Action, ActionPayload } from 'redux';
import { ModeName, ColorName } from './../../interfaces/styled';

interface ITheme {
	mode: ModeName;
	color: ColorName;
}

const initialState: ITheme = {
	mode: 'light',
	color: 'blue',
};

const CHANGE_MODE = 'CHANGE_MODE';
const CHANGE_COLOR = 'CHANGE_ACCENT_COLOR';

const themeReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case CHANGE_MODE:
			return produce(state, (draft) => {
				const _action = action as ActionPayload<ModeName>;
				draft.mode = _action.payload;
			});
		case CHANGE_COLOR:
			return produce(state, (draft) => {
				const _action = action as ActionPayload<ColorName>;
				draft.color = _action.payload;
			});

		default:
			return state;
	}
};

export default themeReducer;

export const changeAppMode = (payload: ModeName): ActionPayload<ModeName> => ({
	type: CHANGE_MODE,
	payload,
});

export const changeAppColor = (payload: ColorName): ActionPayload<ColorName> => ({
	type: CHANGE_COLOR,
	payload,
});
