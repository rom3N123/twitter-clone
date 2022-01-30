import React from "react";
import * as S from "./MessageDialogItem.styed";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import Text from "@components/Text";

const MessageDialogItem: React.FC = (): React.ReactElement => {
    const authUser = useAppSelector(selectUserState);

    return (
        <S.SContainer>
            <ProfileUserAvatar size={47} user={authUser} />
            <S.SInner>
                <S.SUserName>
                    <Text fontWeight={700}>
                        {authUser.name}aaaaaaaaaaaaaaaaaaaaaaaa
                    </Text>
                    <Text>{authUser._id}</Text>
                </S.SUserName>

                <S.SMessageTextContainer>
                    <S.SMessageCircle />
                    <Text fontWeight={700}>Hello</Text>
                </S.SMessageTextContainer>
            </S.SInner>
        </S.SContainer>
    );
};

export default MessageDialogItem;
