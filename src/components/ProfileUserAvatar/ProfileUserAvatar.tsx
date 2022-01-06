import React from "react";
import ProfileUserAvatarTooltip from "./components/ProfileUserAvatarTooltip";
import PopupState, { bindHover, bindPopper } from "material-ui-popup-state";
import * as S from "./ProfileUserAvatar.styled";
import { IUser } from "@interfaces/api/user";
import { useNavigate } from "react-router-dom";

export interface IProfileUserAvatarProps {
    user: IUser;
    size?: number;
    withWrapper?: boolean;
    isWithPopover?: boolean;
    clickable?: boolean;
}

const ProfileUserAvatar: React.FC<IProfileUserAvatarProps> = ({
    size,
    withWrapper,
    isWithPopover,
    clickable = true,
    user,
}): React.ReactElement => {
    const avatarRef = React.useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const onAvatarClickHandler = (): void => {
        if (clickable) {
            navigate(`/${user._id}`);
        }
    };

    const Avatar = (
        <S.SProfileAvatar
            onClick={onAvatarClickHandler}
            src={user.avatar}
            size={size}
            clickable={clickable}
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

                    {isWithPopover && (
                        <ProfileUserAvatarTooltip
                            user={user}
                            {...bindPopper(state)}
                        />
                    )}
                </div>
            )}
        </PopupState>
    );
};

export default ProfileUserAvatar;
