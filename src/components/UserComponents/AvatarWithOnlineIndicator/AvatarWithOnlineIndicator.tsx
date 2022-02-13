import manager from "@http/manager";
import React from "react";
import ProfileUserAvatar, {
    IProfileUserAvatarProps,
} from "../ProfileUserAvatar/ProfileUserAvatar";
import * as S from "./AvatarWithOnlineIndicator.styled";
import socket from "@http/authSocket";

const AvatarWithOnlineIndicator: React.FC<IProfileUserAvatarProps> = ({
    user,
    ...otherProps
}): React.ReactElement => {
    const [isOnline, setIsOnline] = React.useState<boolean>(false);
    const avatar = <ProfileUserAvatar user={user} {...otherProps} />;

    React.useEffect(() => {
        socket.emit("GET_IS_ONLINE");

        socket.on("JOIN_ONLINE", (userId: string) => {
            console.log(userId, user);
            if (user._id === userId) {
                setIsOnline(true);
            }
        });

        socket.on("disconnect", () => {
            console.log("disconnected");
        });

        socket.on("LEAVE_ONLINE", (userId) => {
            if (user._id === userId) {
                setIsOnline(false);
            }
        });
    }, []);

    return isOnline ? <S.SBadge>{avatar}</S.SBadge> : avatar;
};

export default AvatarWithOnlineIndicator;
