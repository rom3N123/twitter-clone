import React from "react";
import ProfileUserAvatarTooltip from "./components/ProfileUserAvatarTooltip";
import PopupState, { bindHover, bindPopper } from "material-ui-popup-state";
import * as S from "./ProfileUserAvatar.styled";
import { IUser } from "@interfaces/api/user";

export interface IProfileUserAvatarProps {
    src?: string;
    size?: number;
    withWrapper?: boolean;
    onClick?: () => void;
    isWithPopover?: boolean;
    user?: IUser;
}

const ProfileUserAvatar: React.FC<IProfileUserAvatarProps> = ({
    size,
    withWrapper,
    onClick,
    isWithPopover,
    src,
    user,
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
        <PopupState variant="popper">
            {(state) => (
                <div {...bindHover(state)} ref={avatarRef}>
                    {withWrapper ? (
                        <S.SProfileAvatarWrapper size={size}>
                            {Avatar}
                        </S.SProfileAvatarWrapper>
                    ) : (
                        Avatar
                    )}

                    {isWithPopover && user && (
                        <ProfileUserAvatarTooltip
                            {...user}
                            {...bindPopper(state)}
                        />
                    )}
                </div>
            )}
        </PopupState>
    );
};

export default ProfileUserAvatar;
