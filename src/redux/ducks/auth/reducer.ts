import provide, { Draft } from "immer";
import { AuthAction, AuthActionsTypes } from "./actions";

export interface IAuthState {
    isAuth: boolean;
}

const initialState: IAuthState = {
    isAuth: false,
};

const authReducer = provide((state: Draft<IAuthState>, action: AuthAction) => {
    switch (action.type) {
        case AuthActionsTypes.SET_IS_AUTH:
            state.isAuth = action.payload;
            break;
    }
}, initialState);

export default authReducer;
