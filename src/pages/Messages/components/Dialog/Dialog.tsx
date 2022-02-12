import React from "react";
import { IUser } from "_types/api/user";
import * as S from "./Dialog.styled";
import UserItem from "@components/UserComponents/UserItem";
import DialogMessageRow from "./components/DialogMessageRow";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import DialogInput from "./components/DialogInput";
import { Dialog as DialogType } from "_types/api/dialog";

export interface DialogProps {
    dialog: DialogType;
}

const Dialog: React.FC<DialogProps> = ({
    dialog: { participants, messages },
}): React.ReactElement => {
    const user = participants[0];
    const authUser = useAppSelector(selectUserState);

    const onMessageSend = (text: string): void => {};

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

            <S.SMessagesContainer>
                {messages.map((message, index) => (
                    <DialogMessageRow
                        key={message._id}
                        index={index}
                        isMine={message.author._id === authUser._id}
                        messages={messages}
                        message={message}
                        {...message}
                    />
                ))}
            </S.SMessagesContainer>

            <DialogInput onSubmit={onMessageSend} />
        </S.SContainer>
    );
};

export default Dialog;
