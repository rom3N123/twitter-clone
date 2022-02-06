import { MessagesDialogState, MessagesDialogsState } from "./reducer";
import { Action } from "redux";

export enum MessagesActionsType {
    SET_DIALOG = "messages/setDialog",
    SET_DIALOGS = "messages/setDialogs",
    SET_IS_LOADING = "messages/setIsLoading",
}

type MessagesAction = Action<MessagesActionsType>;

export interface SetDialog extends MessagesAction {
    type: MessagesActionsType.SET_DIALOG;
    payload: MessagesDialogState;
}
export const setDialogAction = (payload: MessagesDialogState): SetDialog => ({
    type: MessagesActionsType.SET_DIALOG,
    payload,
});

export interface SetDialogs extends MessagesAction {
    type: MessagesActionsType.SET_DIALOGS;
    payload: MessagesDialogsState;
}
export const setDialogsAction = (
    payload: MessagesDialogsState
): SetDialogs => ({
    type: MessagesActionsType.SET_DIALOGS,
    payload,
});

export interface SetIsLoading extends MessagesAction {
    type: MessagesActionsType.SET_IS_LOADING;
    payload: boolean;
}
export const setIsLoadingAction = (payload: boolean): SetIsLoading => ({
    type: MessagesActionsType.SET_IS_LOADING,
    payload,
});

export type MessagesActions = SetDialog | SetDialogs | SetIsLoading;
