import produce, { Draft } from "immer";
import { MessagesActions, MessagesActionsType } from "./actions";
import { TypeOrNull } from "@types/helpers";
import { Dialog } from "@types/api/dialog";

export type MessagesDialogState = TypeOrNull<Dialog>;
export type MessagesDialogsState = Dialog[] | [];

export interface MessagesInitialState {
    dialog: MessagesDialogState;
    dialogs: MessagesDialogsState;
    isLoading: boolean;
}

const initialState: MessagesInitialState = {
    dialog: null,
    dialogs: [],
    isLoading: true,
};

const reducer = produce(
    (state: Draft<MessagesInitialState>, action: MessagesActions) => {
        switch (action.type) {
            case MessagesActionsType.SET_DIALOG:
                break;
            case MessagesActionsType.SET_DIALOGS:
                break;
            case MessagesActionsType.SET_IS_LOADING:
                state.isLoading = action.payload;
                break;
        }
    },
    initialState
);

export default reducer;
