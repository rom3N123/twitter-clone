import React from "react";
import * as S from "./PageHeader.styled";
import Skeleton from "@mui/material/Skeleton";
import Text from "@components/Text";

export interface IPageHeaderProps {
    title?: string;
    children?: React.ReactNode;
    button?: React.ReactNode;
    borderless?: boolean;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
    title,
    button,
    children,
}): React.ReactElement => {
    return (
        <S.SHeader>
            {button}

            {title ? (
                <Text fontWeight={600} fontSize={20}>
                    {title}
                </Text>
            ) : (
                <Skeleton width={100} />
            )}
        </S.SHeader>
    );
};

export default PageHeader;
