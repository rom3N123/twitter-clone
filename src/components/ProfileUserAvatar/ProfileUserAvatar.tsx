import React from "react";
import ProfileUserAvatarTooltip from "./components/ProfileUserAvatarTooltip";
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
    const avatarRef = React.useRef<HTMLDivElement>(null);

    const Avatar = (
        <S.SProfileAvatar
            onClick={onClick}
            clickable={Boolean(onClick)}
            src={src}
            size={size}
        />
    );

    return (
        <div ref={avatarRef}>
            {withWrapper ? (
                <S.SProfileAvatarWrapper size={size}>
                    {Avatar}
                </S.SProfileAvatarWrapper>
            ) : (
                Avatar
            )}

            {/* <ProfileUserAvatarTooltip
                anchor={avatarRef.current}
                open
                onClose={() => {}}
            /> */}
        </div>
    );
};

export default ProfileUserAvatar;
