import { Action } from "redux";

export enum AuthActionsTypes {
    SET_IS_AUTH = "auth/setIsAuth",
}

type AuthActionType = Action<AuthActionsTypes>;

export interface ISetIsAuthAction extends AuthActionType {
    type: AuthActionsTypes.SET_IS_AUTH;
    payload: boolean;
}
export const setIsAuthAction = (payload: boolean): ISetIsAuthAction => ({
    type: AuthActionsTypes.SET_IS_AUTH,
    payload,
});

export type AuthAction = ISetIsAuthAction;
