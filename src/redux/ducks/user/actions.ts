import { Action } from "redux";
import { IUser } from "@interfaces/api/user";

export enum UserActionsTypes {
    SET_USER = "user/setUser",
}

type UserActionType = Action<UserActionsTypes>;

export interface ISetUserAction extends UserActionType {
    type: UserActionsTypes.SET_USER;
    payload: IUser;
}
export const setUserAction = (payload: IUser): ISetUserAction => ({
    type: UserActionsTypes.SET_USER,
    payload,
});

export type UserAction = ISetUserAction;
