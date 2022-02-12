import React from "react";
import * as S from "./MessageDialogItem.styed";
import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import Text from "@components/TypographyComponents/Text";
import { IUser } from "_types/api/user";
import { Dialog, DialogMessage } from "_types/api/dialog";

export interface MessageDialogItemProps {
    dialog: Dialog;
    isActive?: boolean;
    onClick: (dialog: Dialog) => void;
}

const MessageDialogItem: React.FC<MessageDialogItemProps> = ({
    dialog,
    isActive,
    onClick,
}): React.ReactElement => {
    const { participants, messages } = dialog;
    const user = participants[0];
    const lastMessage = messages[messages.length - 1];

    const onClickHandler = (dialog: Dialog) => (): void => {
        onClick(dialog);
    };

    return (
        <S.SContainer onClick={onClickHandler(dialog)}>
            <ProfileUserAvatar size={47} user={user} />
            <S.SInner>
                <S.SUserName>
                    <Text fontWeight={700}>{user.name}</Text>
                </S.SUserName>

                <S.SMessageTextContainer>
                    {lastMessage && (
                        <>
                            <S.SMessageCircle />
                            <Text fontWeight={700}>{lastMessage.text}</Text>
                        </>
                    )}
                </S.SMessageTextContainer>
            </S.SInner>

            {isActive && <S.SActiveBar />}
        </S.SContainer>
    );
};

export default MessageDialogItem;
