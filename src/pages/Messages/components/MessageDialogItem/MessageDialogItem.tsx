import React from "react";
import * as S from "./MessageDialogItem.styed";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import { selectUserState } from "@redux/ducks/user";
import Text from "@components/Text";
import { IUser } from "@interfaces/api/user";
import { DialogMessage } from "@interfaces/api/dialog";

export interface MessageDialogItemProps {
    user: IUser;
    lastMessage: DialogMessage;
}

const MessageDialogItem: React.FC<MessageDialogItemProps> = ({
    user,
    lastMessage,
}): React.ReactElement => {
    return (
        <S.SContainer>
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
        </S.SContainer>
    );
};

export default MessageDialogItem;
