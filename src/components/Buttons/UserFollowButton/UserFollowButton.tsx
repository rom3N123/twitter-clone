import React from "react";
import { IUser } from "_types/api/user";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import FollowButton from "../FollowButton";
import UnfollowButton from "../UnfollowButton";

export interface IUserFollowButton {
    user: IUser;
}

const UserFollowButton: React.FC<IUserFollowButton> = ({
    user,
}): React.ReactElement => {
    const { following } = useAppSelector(selectUserState);
    const isFollowing: boolean = following.includes(user._id);

    return !isFollowing ? (
        <FollowButton user={user} />
    ) : (
        <UnfollowButton user={user} />
    );
};

export default UserFollowButton;
