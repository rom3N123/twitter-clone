import { ModeName, ColorName } from "./../../../interfaces/styled";
import { Action } from "redux";

export enum ThemeActionsTypes {
    CHANGE_MODE = "theme/CHANGE_MODE",
    CHANGE_COLOR = "theme/CHANGE_COLOR",
}

export interface IChangeThemeModeAction extends Action<ThemeActionsTypes> {
    type: ThemeActionsTypes.CHANGE_MODE;
    payload: ModeName;
}

export interface IChangeThemeColorAction extends Action<ThemeActionsTypes> {
    type: ThemeActionsTypes.CHANGE_COLOR;
    payload: ColorName;
}

export const changeThemeColor = (
    payload: ColorName
): IChangeThemeColorAction => ({
    type: ThemeActionsTypes.CHANGE_COLOR,
    payload,
});

export const changeThemeMode = (payload: ModeName) => ({
    type: ThemeActionsTypes.CHANGE_MODE,
    payload,
});

export type ThemeActionType = IChangeThemeModeAction | IChangeThemeColorAction;
