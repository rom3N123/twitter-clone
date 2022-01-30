import React from "react";
import * as S from "./InfoMessage.styled";
import Text from "@components/Text";
import { Button } from "@mui/material";

export interface IInfoMessageProps {
    title: string;
    subtitle: string;
    button?: {
        title: string;
        onClick: () => void;
    };
}

const InfoMessage: React.FC<IInfoMessageProps> = ({
    title,
    subtitle,
    button,
}): React.ReactElement => {
    return (
        <S.SContainer>
            <S.STitle>{title}</S.STitle>
            <Text color="secondary">{subtitle}</Text>

            {button && (
                <S.SButtonContainer>
                    <Button
                        sx={{ height: 52, fontSize: 17 }}
                        variant="contained"
                        onClick={button.onClick}
                    >
                        {button.title}
                    </Button>
                </S.SButtonContainer>
            )}
        </S.SContainer>
    );
};

export default InfoMessage;
