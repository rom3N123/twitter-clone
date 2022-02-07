import React from "react";
import { IHoverPopoverProps } from "@types/components/shared";
import HoverPopper from "@components/PopoverComponents/HoverPopper";
import { IUser } from "@types/api/user";
import SPaper from "@styled/components/Paper.styled";
import * as S from "./ProfileUserAvatarTooltip.styled";
import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import ProfileActivity from "@pages/Profile/components/ProfileActivity";
import UserFollowButton from "@components/Buttons/UserFollowButton";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";

interface IProfileUserAvatarTooltipProps extends IHoverPopoverProps {
    user: IUser;
}

const ProfileUserAvatarTooltip: React.FC<IProfileUserAvatarTooltipProps> = ({
    anchorEl,
    id,
    onMouseLeave,
    open,
    user,
}): React.ReactElement => {
    const authUser = useAppSelector(selectUserState);

    return (
        <HoverPopper
            open={open}
            id={id}
            onMouseLeave={onMouseLeave}
            anchorEl={anchorEl}
        >
            <SPaper
                onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                }}
            >
                <S.SInner>
                    <S.SHeader>
                        <ProfileUserAvatar user={user} size={48} />

                        {authUser._id !== user._id && (
                            <UserFollowButton user={user} />
                        )}
                    </S.SHeader>

                    <S.SUserInfo>
                        <S.SText fontWeight={700}>{user.name}</S.SText>

                        <S.SText color="secondary">@{user._id}</S.SText>

                        <S.SUserBio>
                            <S.SText>{user.bio}</S.SText>
                        </S.SUserBio>
                    </S.SUserInfo>

                    <S.SUserActivity>
                        <ProfileActivity
                            to="/"
                            amount={user.following.length}
                            label="Following"
                        />

                        <ProfileActivity
                            to="/"
                            amount={user.followers.length}
                            label="Followers"
                        />
                    </S.SUserActivity>
                </S.SInner>
            </SPaper>
        </HoverPopper>
    );
};

export default ProfileUserAvatarTooltip;
