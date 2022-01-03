import React from "react";
import * as S from "./ProfileUserAvatar.styled";

export interface IProfileUserAvatarProps {
    size?: number;
    withWrapper?: boolean;
    src?: string;
}

const ProfileUserAvatar: React.FC<IProfileUserAvatarProps> = ({
    size,
    withWrapper,
    src,
}): React.ReactElement => {
    const Avatar = <S.SProfileAvatar src={src} size={size} />;

    return withWrapper ? (
        <S.SProfileAvatarWrapper size={size}>{Avatar}</S.SProfileAvatarWrapper>
    ) : (
        Avatar
    );
};

export default ProfileUserAvatar;
