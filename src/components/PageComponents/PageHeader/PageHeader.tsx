import React from "react";
import S from "./PageHeader.styled";
import Skeleton from "@mui/material/Skeleton";
import useCurrentProfileContext from "@pages/Profile/contexts/CurrentProfileContext/useCurrentProfileContext";

interface IPageHeaderProps {
    title?: string;
    children?: React.ReactNode;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
    title,
    children,
}): React.ReactElement => {
    return (
        <S.Header>
            {title ? <S.Title>{title}</S.Title> : <Skeleton width={100} />}

            {children}
        </S.Header>
    );
};

export default PageHeader;
