import { Action } from "redux";
import { IUserRegisterValues, IUserLoginValues } from "_types/api/user";

export enum AuthActionsTypes {
    SET_IS_AUTH = "auth/setIsAuth",
    LOGIN = "auth/login",
    REGISTER = "auth/register",
    LOGOUT = "auth/logout",
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
    payload?: IUserLoginValues;
}
export const loginAction = (payload?: IUserLoginValues): ILoginAction => ({
    type: AuthActionsTypes.LOGIN,
    payload,
});

export interface IRegisterAction extends AuthActionType {
    type: AuthActionsTypes.REGISTER;
    payload: IUserRegisterValues;
}
export const registerAction = (
    payload: IUserRegisterValues
): IRegisterAction => ({
    type: AuthActionsTypes.REGISTER,
    payload,
});

export interface ILogoutAction extends AuthActionType {
    type: AuthActionsTypes.LOGOUT;
}
export const logoutAction = (): ILogoutAction => ({
    type: AuthActionsTypes.LOGOUT,
});

export type AuthAction = ISetIsAuthAction;
