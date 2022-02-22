import React from "react";
import * as S from "./Dialog.styled";
import UserItem from "@components/UserComponents/UserItem";
import DialogInput from "./components/DialogInput";
import { Dialog as DialogType } from "_types/api/dialog";
import useDialogMessagesSockets from "./hooks/useDialogMessagesSockets";
import useDialogScrollToBottom from "./hooks/useDialogScrollToBottom";
import { CommonProps } from "_types/common";
import MessagesList from "./components/MessagesList";
import { MessagesListRefMethods } from "./components/MessagesList/MessagesList";

export type ContainerRef = React.MutableRefObject<HTMLDivElement>;
export interface DialogProps extends CommonProps {
    dialog: DialogType;
}

const Dialog: React.FC<DialogProps> = ({
    dialog: { _id, participants, messages: initialMessages },
    style,
    className,
}): React.ReactElement => {
    const messagesListRef = React.useRef() as React.Ref<MessagesListRefMethods>;
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { messages, sendMessage } = useDialogMessagesSockets(
        _id,
        initialMessages
    );

    const { scrollToBottomIfSticked, scrollToBottom } = useDialogScrollToBottom(
        containerRef as ContainerRef
    );

    const user = participants[0];

    const onMessageSend = (text: string): void => {
        sendMessage(text);
        scrollToBottom();
    };

    React.useEffect(() => {
        scrollToBottomIfSticked();
    }, [messages]);

    return (
        <S.SContainer style={style} className={className}>
            <S.SHeader>
                <UserItem
                    withoutUserProfilePopover
                    avatarSize={24}
                    user={user}
                    align="center"
                />
            </S.SHeader>
            <S.SMessagesContainer ref={containerRef}>
                <MessagesList ref={messagesListRef} messages={messages} />
            </S.SMessagesContainer>

            <DialogInput dialogId={_id} onSubmit={onMessageSend} />
        </S.SContainer>
    );
};

export default Dialog;
