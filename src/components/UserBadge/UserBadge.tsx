import React from "react";
import { IUser } from "@interfaces/api/user";
import * as S from "./UserBadge.styled";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import Text from "@components/Text";

export interface IUserBadgeProps {
    user: IUser;
    avatarSize?: number;
    withBio?: boolean;
}

const UserBadge: React.FC<IUserBadgeProps> = ({
    user,
    avatarSize = 40,
    withBio,
}): React.ReactElement => {
    return (
        <S.SContainer>
            <ProfileUserAvatar isWithPopover size={avatarSize} user={user} />

            <S.SInfoContainer>
                <Text fontWeight={600}>{user.name}</Text>
                <Text lh={withBio ? 15 : 20} color="gray">
                    @{user._id}
                </Text>
                {withBio && <Text lh={24}>{user.bio}</Text>}
            </S.SInfoContainer>
        </S.SContainer>
    );
};

export default UserBadge;
