import { Action } from "redux";

export enum AuthActionsTypes {
    SET_IS_AUTH = "auth/setIsAuth",
    LOGIN = "auth/login",
    REGISTER = "auth/register",
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

export interface ILoginAction extends AuthActionType {
    type: AuthActionsTypes.LOGIN;
}
export const loginAction = (): ILoginAction => ({
    type: AuthActionsTypes.LOGIN,
});

export interface IRegisterAction extends AuthActionType {
    type: AuthActionsTypes.REGISTER;
}
export const registerAction = (): IRegisterAction => ({
    type: AuthActionsTypes.REGISTER,
});

export type AuthAction = ISetIsAuthAction;
