import React from "react";
import * as S from "./Dialog.styled";
import UserItem from "@components/UserComponents/UserItem";
import DialogMessageRow from "./components/DialogMessageRow";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import DialogInput from "./components/DialogInput";
import { Dialog as DialogType } from "_types/api/dialog";
import useDialogMessagesSockets from "./hooks/useDialogMessagesSockets";
import useDialogBottomSticky from "./hooks/useDialogBottomSticky";
import useDialogScrollToBottom from "./hooks/useDialogScrollToBottom";

export type ContainerRef = React.MutableRefObject<HTMLDivElement>;
export interface DialogProps {
    dialog: DialogType;
}

const Dialog: React.FC<DialogProps> = ({
    dialog: { _id, participants },
}): React.ReactElement => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { messages, sendMessage } = useDialogMessagesSockets(_id);
    const { scrollToBottomIfSticked, scrollToBottom } = useDialogScrollToBottom(
        containerRef as ContainerRef
    );

    const user = participants[0];
    const authUser = useAppSelector(selectUserState);

    const onMessageSend = (text: string): void => {
        sendMessage(text);
        scrollToBottom();
    };

    React.useEffect(() => {
        scrollToBottomIfSticked();
    }, [messages]);

    return (
        <S.SContainer>
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
                    {messages?.map((message, index) => (
                        <DialogMessageRow
                            key={message._id}
                            index={index}
                            isMine={message.author._id === authUser._id}
                            messages={messages}
                            message={message}
                            {...message}
                        />
                    ))}
                </S.SMessages>
            </S.SMessagesContainer>

            <DialogInput onSubmit={onMessageSend} />
        </S.SContainer>
    );
};

export default Dialog;
