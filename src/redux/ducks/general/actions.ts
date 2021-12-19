import { Action } from "redux";

export enum GeneralActionsType {
    SET_IS_LOADING = "general/setIsLoading",
    SET_IS_LOADING_WITH_SCREEN = "general/setIsLoadingWithScreen",
}

type GeneralAction = Action<GeneralActionsType>;

export interface ISetIsLoadingAction extends GeneralAction {
    type: GeneralActionsType.SET_IS_LOADING;
    payload: boolean;
}
export const setIsLoadingAction = (payload: boolean): ISetIsLoadingAction => ({
    type: GeneralActionsType.SET_IS_LOADING,
    payload,
});

export interface ISetIsLoadingWithScreenAction extends GeneralAction {
    type: GeneralActionsType.SET_IS_LOADING_WITH_SCREEN;
    payload: boolean;
}
export const setIsLoadingWithScreenAction = (
    payload: boolean
): ISetIsLoadingWithScreenAction => ({
    type: GeneralActionsType.SET_IS_LOADING_WITH_SCREEN,
    payload,
});

export type GeneralActionType =
    | ISetIsLoadingAction
    | ISetIsLoadingWithScreenAction;
