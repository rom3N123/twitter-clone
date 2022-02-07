import { ThemeActionType, ThemeActionsTypes } from "./actions";
import { ModeName, ColorName } from "@types/styled";
import provide, { Draft } from "immer";

export interface IThemeState {
    mode: ModeName;
    color: ColorName;
}

// @ts-ignore
const modeInitialState: ModeName = localStorage.getItem("mode") || "light";
// @ts-ignore
const colorInitialState: ColorName = localStorage.getItem("color") || "blue";

const initialState: IThemeState = {
    mode: modeInitialState,
    color: colorInitialState,
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
