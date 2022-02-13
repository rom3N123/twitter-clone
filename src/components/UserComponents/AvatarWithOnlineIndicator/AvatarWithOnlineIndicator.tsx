import React from "react";
import ProfileUserAvatar, {
    IProfileUserAvatarProps,
} from "../ProfileUserAvatar/ProfileUserAvatar";
import * as S from "./AvatarWithOnlineIndicator.styled";
import socket from "@http/authSocket";

export interface AvatarWithOnlineIndicatorProps
    extends IProfileUserAvatarProps {
    badgeSize?: number;
}

const AvatarWithOnlineIndicator: React.FC<AvatarWithOnlineIndicatorProps> = ({
    user,
    badgeSize,
    ...otherProps
}): React.ReactElement => {
    const [isOnline, setIsOnline] = React.useState<boolean>(false);
    const avatar = <ProfileUserAvatar user={user} {...otherProps} />;

    React.useEffect(() => {
        socket.emit("GET_IS_ONLINE", user._id);

        socket.on("JOIN_ONLINE", (userId: string) => {
            if (user._id === userId) {
                setIsOnline(true);
            }
        });

        socket.on("LEAVE_ONLINE", (userId) => {
            if (user._id === userId) {
                setIsOnline(false);
            }
        });
    }, []);

    return isOnline ? <S.SBadge size={badgeSize}>{avatar}</S.SBadge> : avatar;
};

export default AvatarWithOnlineIndicator;
