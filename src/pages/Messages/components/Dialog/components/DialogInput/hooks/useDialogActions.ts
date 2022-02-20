import React from "react";
import socket from "@http/authSocket";
import produce from "immer";
import { selectUserState } from "@redux/ducks/user";
import { useAppSelector } from "@redux/hooks";
import { IUser } from "_types/api/user";
import { EmptyFunc } from "_types/helpers";

export type DialogActionType = "emoji" | "write";

type DialogAction = {
    action: DialogActionType;
    user: IUser;
};

type UseDialogActionsValue = {
    isWriting: boolean;
    userActions: UserActions[];
    onOpenEmoji: EmptyFunc;
    onCloseEmoji: EmptyFunc;
};

type UseDialogActionsParams = {
    dialogId: string;
    value: string;
};

type ActionType = "START" | "FINISH";

export type UserActions = {
    user: IUser;
    actions: DialogActionType[];
};

const useDialogActions = ({
    dialogId,
    value,
}: UseDialogActionsParams): UseDialogActionsValue => {
    const user = useAppSelector(selectUserState);
    const [isWriting, setIsWriting] = React.useState<boolean>(false);
    const [userActions, setUserActions] = React.useState<
        Record<string, UserActions>
    >({});

    console.log(userActions);

    const emitAction = (type: ActionType, action: DialogActionType) => {
        socket.emit(`DIALOG_ACTION_${type}`, {
            user,
            dialogId,
            action,
        });
    };

    const onOpenEmoji = (): void => {
        emitAction("START", "emoji");
    };

    const onCloseEmoji = (): void => {
        emitAction("FINISH", "emoji");
    };

    React.useEffect(() => {
        socket.on("DIALOG_ACTION_START", ({ action, user }: DialogAction) => {
            setUserActions(
                produce((state) => {
                    const _user = state[user._id];

                    if (_user) {
                        _user.actions.push(action);
                    } else {
                        state[user._id] = {
                            user,
                            actions: [action],
                        };
                    }
                })
            );
        });

        socket.on("DIALOG_ACTION_FINISH", ({ action, user }: DialogAction) => {
            setUserActions(
                produce((state) => {
                    const _user = state[user._id];
                    if (_user) {
                        state[user._id].actions = _user.actions.filter(
                            (_action) => _action !== action
                        );

                        if (!_user.actions.length) {
                            delete state[user._id];
                        }
                    }
                })
            );
        });
    }, []);

    React.useEffect(() => {
        emitAction(isWriting ? "START" : "FINISH", "write");
    }, [isWriting]);

    React.useEffect(() => {
        setIsWriting(Boolean(value));
    }, [value]);

    const arrayUserAction = React.useMemo(
        () => Object.values(userActions),
        [userActions]
    );

    return {
        isWriting,
        userActions: arrayUserAction,
        onOpenEmoji,
        onCloseEmoji,
    };
};

export default useDialogActions;
