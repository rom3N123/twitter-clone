import React from "react";
import { IUser } from "_types/api/user";
import * as S from "./Dialog.styled";
import UserItem from "@components/UserComponents/UserItem";
import DialogMessageRow from "./components/DialogMessageRow";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import DialogInput from "./components/DialogInput";

export interface DialogProps {
    user: IUser;
}

const Dialog: React.FC<DialogProps> = ({ user }): React.ReactElement => {
    const authUser = useAppSelector(selectUserState);
    const messages = [
        {
            user,
            text: "Прив",
        },
        {
            user,
            text: "Прив",
        },
        {
            user,
            text: "Прив",
        },

        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "ПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПрив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "ПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПрив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "ПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПрив",
        },

        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "ПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПрив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "ПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПрив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "Прив",
        },
        {
            user: authUser,
            text: "ПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПривПрив",
        },
    ];

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
                        isMine={message.user._id === authUser._id}
                        messages={messages}
                        index={index}
                        {...message}
                    />
                ))}
            </S.SMessagesContainer>

            <DialogInput onSubmit={onMessageSend} />
        </S.SContainer>
    );
};

export default Dialog;
