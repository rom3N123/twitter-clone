import React from "react";
import { selectUserState } from "@redux/ducks/user";
import { useAppSelector } from "@redux/hooks";
import useDialogApi, { CreateMessage } from "./useDialogApi";
import useFetchDialogMessages, { Messages } from "./useFetchDialogMessages";
import { DialogMessage } from "_types/api/dialog";
import produce from "immer";
import manager from "@http/manager";

const socket = manager.socket("/");

interface UseDialogMessagesSocketsValue {
    messages: Messages;
    sendMessage: CreateMessage;
}

const useDialogMessagesSockets = (
    dialogId: string
): UseDialogMessagesSocketsValue => {
    const user = useAppSelector(selectUserState);
    const userId = user._id;

    const [messages, setMessages] = React.useState<DialogMessage[]>([]);

    const { createMessage } = useDialogApi(dialogId);

    const initialMessages = useFetchDialogMessages(dialogId);

    const addMessage = (message: DialogMessage): void => {
        setMessages(
            produce((prevState) => {
                prevState.push(message);
            })
        );
    };

    React.useEffect(() => {
        setMessages(initialMessages);
    }, [initialMessages]);

    React.useEffect(() => {
        socket.on("GET_MESSAGE", addMessage);
    }, []);

    React.useEffect(() => {
        socket.emit("JOIN_DIALOG", { dialogId });

        return () => {
            socket.emit("LEAVE_DIALOG", { dialogId });
        };
    }, []);

    const sendMessage: CreateMessage = async (text) => {
        // const message = await createMessage(text);
        socket.emit("SEND_MESSAGE", { userId, dialogId, text });

        // addMessage(message);

        /** TODO уведомлять сокетами */

        // return message;
    };

    return { messages, sendMessage };
};

export default useDialogMessagesSockets;
