import React from "react";
import * as S from "./ProfileUserAvatar.styled";

export interface IProfileUserAvatarProps {
    size?: number;
    withWrapper?: boolean;
    src?: string;
    onClick?: () => void;
}

const ProfileUserAvatar: React.FC<IProfileUserAvatarProps> = ({
    size,
    withWrapper,
    src,
    onClick,
}): React.ReactElement => {
    const Avatar = (
        <S.SProfileAvatar
            onClick={onClick}
            clickable={Boolean(onClick)}
            src={src}
            size={size}
        />
    );

    return withWrapper ? (
        <S.SProfileAvatarWrapper size={size}>{Avatar}</S.SProfileAvatarWrapper>
    ) : (
        Avatar
    );
};

export default ProfileUserAvatar;
