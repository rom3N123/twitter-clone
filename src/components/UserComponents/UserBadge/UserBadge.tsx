import React from "react";
import { IUser } from "_types/api/user";
import * as S from "./UserBadge.styled";
import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import Text from "@components/TypographyComponents/Text";
import { FlexAxisPositions } from "@styled/components/Flex.styled";

export interface IUserBadgeProps {
    user: IUser;
    avatarSize?: number;
    withBio?: boolean;
    fontSize?: number;
    withoutUserProfilePopover?: boolean;
    align?: FlexAxisPositions;
}

const UserBadge: React.FC<IUserBadgeProps> = ({
    user,
    avatarSize = 40,
    withBio,
    fontSize,
    withoutUserProfilePopover = false,
    align,
}): React.ReactElement => {
    return (
        <S.SContainer align={align}>
            <ProfileUserAvatar
                isWithPopover={!withoutUserProfilePopover}
                size={avatarSize}
                user={user}
            />

            <S.SInfoContainer>
                <Text fontSize={fontSize} fontWeight={600}>
                    {user.name}
                </Text>
                <Text
                    fontSize={fontSize}
                    lh={withBio ? 15 : 20}
                    color="secondary"
                >
                    @{user._id}
                </Text>
                {withBio && <Text lh={24}>{user.bio}</Text>}
            </S.SInfoContainer>
        </S.SContainer>
    );
};

export default UserBadge;
