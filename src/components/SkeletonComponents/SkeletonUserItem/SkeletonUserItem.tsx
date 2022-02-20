import React from "react";
import Skeleton from "@mui/material/Skeleton";
import * as S from "./SkeletonUserItem.styled";

export interface SkeletonUserItemProps {
    avatarSize?: number;
    padding?: string;
}

const SkeletonUserItem: React.FC<SkeletonUserItemProps> = ({
    avatarSize = 70,
    padding = "0",
}): React.ReactElement => {
    return (
        <S.SContainer padding={padding}>
            <Skeleton
                width={avatarSize}
                height={avatarSize}
                variant="circular"
            />
            <div>
                <Skeleton width={150} height={15} />
            </div>
        </S.SContainer>
    );
};

export default SkeletonUserItem;
