import React from "react";
import * as S from "./MessageDialogItem.styed";
import Text from "@components/TypographyComponents/Text";
import { Dialog } from "_types/api/dialog";
import AvatarWithOnlineIndicator from "@components/UserComponents/AvatarWithOnlineIndicator";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";

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
    const authUser = useAppSelector(selectUserState);
    const { participants, messages, creator } = dialog;
    const isGroup = participants.length > 1;
    const user = isGroup
        ? creator
        : participants[0]._id === authUser._id
        ? creator
        : participants[0];
    const lastMessage = messages[messages.length - 1];
    const onClickHandler = (dialog: Dialog) => (): void => {
        onClick(dialog);
    };

    return (
        <S.SContainer onClick={onClickHandler(dialog)}>
            <AvatarWithOnlineIndicator size={47} user={user} />
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
