import { ModeName, ColorName } from "@types/styled";
import { Action } from "redux";

export enum ThemeActionsTypes {
    CHANGE_MODE = "theme/changeMode",
    CHANGE_COLOR = "theme/changeColor",
}

type ThemeAction = Action<ThemeActionsTypes>;

export interface IChangeThemeColorAction extends ThemeAction {
    type: ThemeActionsTypes.CHANGE_COLOR;
    payload: ColorName;
}
export const changeThemeColorAction = (
    payload: ColorName
): IChangeThemeColorAction => ({
    type: ThemeActionsTypes.CHANGE_COLOR,
    payload,
});

export interface IChangeThemeModeAction extends ThemeAction {
    type: ThemeActionsTypes.CHANGE_MODE;
    payload: ModeName;
}

export const changeThemeModeAction = (payload: ModeName) => ({
    type: ThemeActionsTypes.CHANGE_MODE,
    payload,
});

export type ThemeActionType = IChangeThemeModeAction | IChangeThemeColorAction;
