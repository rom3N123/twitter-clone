import React from "react";
import * as S from "./UserItem.styled";
import UserBadge from "@components/UserBadge";
import { IUserBadgeProps } from "@components/UserBadge/UserBadge";

export interface IUserItemProps extends IUserBadgeProps {
    endButton?: React.ReactNode;
}

const UserItem: React.FC<IUserItemProps> = ({
    user,
    endButton,
    avatarSize,
    withBio,
}): React.ReactElement => {
    return (
        <S.SContainer>
            <UserBadge avatarSize={avatarSize} withBio={withBio} user={user} />

            {endButton}
        </S.SContainer>
    );
};

export default UserItem;
