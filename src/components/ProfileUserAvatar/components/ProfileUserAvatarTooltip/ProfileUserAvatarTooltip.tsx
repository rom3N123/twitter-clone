import React from "react";
import { IHoverPopoverProps } from "@interfaces/components";
import HoverPopper from "@components/HoverPopper";
import { IUser } from "@interfaces/api/user";
import SPaper from "@styled/components/Paper.styled";
import * as S from "./ProfileUserAvatarTooltip.styled";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import ProfileActivity from "@pages/Profile/components/ProfileActivity";
import UserFollowButton from "@components/Buttons/UserFollowButton";

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
    return (
        <HoverPopper
            open={open}
            id={id}
            onMouseLeave={onMouseLeave}
            anchorEl={anchorEl}
        >
            <SPaper>
                <S.SInner>
                    <S.SHeader>
                        <ProfileUserAvatar user={user} size={48} />

                        <UserFollowButton user={user} />
                    </S.SHeader>

                    <S.SUserInfo>
                        <S.SText fontWeight={700}>{user.name}</S.SText>

                        <S.SText color="gray">@{user._id}</S.SText>

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
