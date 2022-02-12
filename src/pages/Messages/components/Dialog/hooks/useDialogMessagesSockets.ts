import React from "react";
import useDialogApi, { CreateMessage } from "./useDialogApi";
import useFetchDialogMessages, { Messages } from "./useFetchDialogMessages";
import { DialogMessage } from "_types/api/dialog";
import produce from "immer";

interface UseDialogMessagesSocketsValue {
    messages: Messages;
    sendMessage: CreateMessage;
}

const useDialogMessagesSockets = (
    dialogId: string
): UseDialogMessagesSocketsValue => {
    const [messages, setMessages] = React.useState<DialogMessage[]>([]);

    const { createMessage } = useDialogApi(dialogId);

    const initialMessages = useFetchDialogMessages(dialogId);

    React.useEffect(() => {
        setMessages(initialMessages);
    }, [initialMessages]);

    const addMessage = (message: DialogMessage): void => {
        setMessages(
            produce((prevState) => {
                prevState.push(message);
            })
        );
    };

    const sendMessage: CreateMessage = async (text) => {
        const message = await createMessage(text);

        addMessage(message);

        /** TODO уведомлять сокетами */

        return message;
    };

    return { messages, sendMessage };
};

export default useDialogMessagesSockets;
