import React from "react";
import * as S from "./DialogMessage.styled";

export interface DialogMessageProps {
    text: string;
    isMine?: boolean;
}

const DialogMessage: React.FC<DialogMessageProps> = ({
    text,
    isMine,
}): React.ReactElement => {
    return <S.SContainer isMine={isMine}>{text}</S.SContainer>;
};

export default DialogMessage;
