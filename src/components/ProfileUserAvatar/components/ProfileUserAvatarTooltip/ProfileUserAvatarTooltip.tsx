import React from "react";
import { IHoverPopoverProps } from "@interfaces/components";
import HoverPopper from "@components/HoverPopper";
import { IUser } from "@interfaces/api/user";
import SPaper from "@styled/components/Paper.styled";
import * as S from "./ProfileUserAvatarTooltip.styled";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";
import ProfileActivity from "@pages/Profile/components/ProfileActivity";

interface IProfileUserAvatarTooltipProps extends IHoverPopoverProps, IUser {}

const ProfileUserAvatarTooltip: React.FC<IProfileUserAvatarTooltipProps> = ({
    anchorEl,
    id,
    onMouseLeave,
    open,
    avatar,
    name,
    _id,
    bio,
    followers,
    following,
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
                        <ProfileUserAvatar
                            onClick={() => {}}
                            src={avatar}
                            size={48}
                        />

                        <BlackAndWhiteButton
                            title="Follow"
                            onClick={() => {}}
                        />
                    </S.SHeader>

                    <S.SUserInfo>
                        <S.SText fontWeight={700}>{name}</S.SText>

                        <S.SText color="gray">@{_id}</S.SText>

                        <S.SUserBio>
                            <S.SText>{bio}</S.SText>
                        </S.SUserBio>
                    </S.SUserInfo>

                    <S.SUserActivity>
                        <ProfileActivity
                            to="/"
                            amount={following.length}
                            label="Following"
                        />

                        <ProfileActivity
                            to="/"
                            amount={followers.length}
                            label="Followers"
                        />
                    </S.SUserActivity>
                </S.SInner>
            </SPaper>
        </HoverPopper>
    );
};

export default ProfileUserAvatarTooltip;
