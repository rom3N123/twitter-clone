import { Action } from "redux";
import { IUser, IUserEditableFields } from "_types/api/user";

export enum UserActionsTypes {
    SET_USER = "user/setUser",
    UPDATE_USER = "user/update",
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

export interface IUpdateUserAction extends UserActionType {
    type: UserActionsTypes.UPDATE_USER;
    payload: IUserEditableFields;
}
export const updateUserAction = (
    payload: IUserEditableFields
): IUpdateUserAction => ({
    type: UserActionsTypes.UPDATE_USER,
    payload,
});

export type UserAction = ISetUserAction | IUpdateUserAction;
