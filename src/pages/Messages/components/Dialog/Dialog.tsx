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
    dialog: { _id, participants },
    style,
    className,
}): React.ReactElement => {
    const messagesListRef = React.useRef() as React.Ref<MessagesListRefMethods>;
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { messages, sendMessage } = useDialogMessagesSockets(_id);
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
                <S.SMessages>
                    <MessagesList ref={messagesListRef} messages={messages} />
                    {/* {messages?.map((message, index) => (
                        <DialogMessageRow
                            key={message._id}
                            index={index}
                            isMine={message.author._id === authUser._id}
                            messages={messages}
                            message={message}
                            {...message}
                        />
                    ))} */}
                </S.SMessages>
            </S.SMessagesContainer>

            <DialogInput onSubmit={onMessageSend} />
        </S.SContainer>
    );
};

export default Dialog;
