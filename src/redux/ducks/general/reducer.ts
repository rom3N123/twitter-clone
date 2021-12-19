import provide, { Draft } from "immer";
import { GeneralActionsType, GeneralActionType } from "./actions";

export interface IGeneralState {
    isLoading: boolean;
    isLoadingWithScreen: boolean;
}

const initialState: IGeneralState = {
    isLoading: false,
    isLoadingWithScreen: true,
};

const generalReducer = provide(
    (state: Draft<IGeneralState>, action: GeneralActionType) => {
        switch (action.type) {
            case GeneralActionsType.SET_IS_LOADING:
                state.isLoading = action.payload;
                break;
            case GeneralActionsType.SET_IS_LOADING_WITH_SCREEN:
                state.isLoadingWithScreen = action.payload;
                break;
        }
    },
    initialState
);

export default generalReducer;
