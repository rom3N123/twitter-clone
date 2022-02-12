import React from "react";
import useDialogApi from "./useDialogApi";
import { DialogMessage } from "_types/api/dialog";

export type Messages = DialogMessage[];

const useFetchDialogMessages = (dialogId: string): Messages => {
    const [messages, setMessages] = React.useState<Messages>([]);
    const { getMessages } = useDialogApi(dialogId);

    React.useEffect(() => {
        const fetchMessages = async () => {
            const messages = await getMessages();

            setMessages(messages);
        };

        fetchMessages();
    }, []);

    return messages;
};

export default useFetchDialogMessages;
