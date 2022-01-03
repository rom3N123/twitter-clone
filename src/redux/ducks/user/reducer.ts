import { IUser } from "@interfaces/api/user";
import provide, { Draft } from "immer";
import { UserAction, UserActionsTypes } from "./actions";

export type UserState = {} | IUser;

const initialState: UserState = {};

const userReducer = provide((state: Draft<UserState>, action: UserAction) => {
    switch (action.type) {
        case UserActionsTypes.SET_USER:
            return action.payload;
    }
}, initialState);

export default userReducer;
