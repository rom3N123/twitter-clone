import React from "react";
import S from "./PageHeader.styled";

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
            {title && <S.Title>{title}</S.Title>}
            {children}
        </S.Header>
    );
};

export default PageHeader;
