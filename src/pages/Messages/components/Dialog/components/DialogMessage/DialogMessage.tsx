import React from "react";
import * as S from "./DialogMessage.styled";

export interface DialogMessageProps {
    text: string;
    isMine?: boolean;
    messageRef?: React.RefObject<HTMLDivElement>;
}

const DialogMessage: React.FC<DialogMessageProps> = ({
    text,
    isMine,
    messageRef,
}): React.ReactElement => {
    return (
        <S.SContainer ref={messageRef} isMine={isMine}>
            {text}
        </S.SContainer>
    );
};

export default DialogMessage;
