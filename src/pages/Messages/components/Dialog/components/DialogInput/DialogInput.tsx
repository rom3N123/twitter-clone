import React from "react";
import * as S from "./DialogInput.styled";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import useBind from "@hooks/useBind";

export interface DialogInputProps {
    onSubmit: (value: string) => void;
}

const DialogInput: React.FC<DialogInputProps> = ({
    onSubmit,
}): React.ReactElement => {
    const { value, onChange, clearValue } = useBind();

    const onSubmitHandler = (value: string) => (): void => {
        onSubmit(value);
        clearValue();
    };

    return (
        <S.SContainer>
            <S.STextField
                placeholder="Start a new message"
                value={value}
                onChange={onChange}
            />

            <IconButton
                onClick={onSubmitHandler(value)}
                disabled={!value}
                size="medium"
            >
                <SendIcon />
            </IconButton>
        </S.SContainer>
    );
};

export default DialogInput;
