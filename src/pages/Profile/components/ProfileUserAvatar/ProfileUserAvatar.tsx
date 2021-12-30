import React from "react";
import * as S from "./ProfileUserAvatar.styled";

export interface IProfileUserAvatarProps {
    size?: number;
    withWrapper?: boolean;
}

const ProfileUserAvatar: React.FC<IProfileUserAvatarProps> = ({
    size,
    withWrapper,
}): React.ReactElement => {
    const Avatar = <S.SProfileAvatar size={size} />;

    return withWrapper ? (
        <S.SProfileAvatarWrapper size={size}>{Avatar}</S.SProfileAvatarWrapper>
    ) : (
        Avatar
    );
};

export default ProfileUserAvatar;
