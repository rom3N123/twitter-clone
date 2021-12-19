import { ThemeActionType, ThemeActionsTypes } from "./actions";
import { ModeName, ColorName } from "@interfaces/styled";
import provide, { Draft } from "immer";

export interface IThemeState {
    mode: ModeName;
    color: ColorName;
}

const initialState: IThemeState = {
    mode: "light",
    color: "blue",
};

const themeReducer = provide(
    (state: Draft<IThemeState>, action: ThemeActionType) => {
        switch (action.type) {
            case ThemeActionsTypes.CHANGE_COLOR:
                state.color = action.payload;
                break;
            case ThemeActionsTypes.CHANGE_MODE:
                state.mode = action.payload;
                break;
        }
    },
    initialState
);

export default themeReducer;
