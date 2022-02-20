import React from "react";
import * as S from "./DialogInput.styled";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import useBind from "@hooks/useBind";
import socket from "@http/authSocket";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@ducks/user/selectors";
import Text from "@components/TypographyComponents/Text";
import EmojiButton from "@components/Buttons/EmojiButton";
import { IEmojiData } from "emoji-picker-react";
import useDialogActions, { DialogActionType } from "./hooks/useDialogActions";
export interface DialogInputProps {
    onSubmit: (value: string) => void;
    dialogId: string;
}

const readableActionText: Record<DialogActionType, string> = {
    emoji: "выбирает стикер",
    write: "печатает",
};

const DialogInput: React.FC<DialogInputProps> = ({
    dialogId,
    onSubmit,
}): React.ReactElement => {
    const user = useAppSelector(selectUserState);
    const { value, onChange, clearValue, setValue } = useBind();
    const { userActions, onCloseEmoji, onOpenEmoji } = useDialogActions({
        dialogId,
        value,
    });

    const onSubmitHandler = (value: string) => (): void => {
        onSubmit(value);
        clearValue();
    };

    const onKeyPress = ({ key }: React.KeyboardEvent) => {
        if (key === "Enter") {
            onSubmitHandler(value)();
        }
    };

    const onEmojiSelect = (
        event: React.MouseEvent<Element, MouseEvent>,
        { emoji }: IEmojiData
    ): void => {
        setValue((value) => value + emoji);
    };

    return (
        <S.SWrapper>
            <S.SWritingUsersContainer>
                {Boolean(userActions.length) && (
                    <Text lh={30}>
                        {userActions
                            .map(
                                ({ actions, user: { name } }) =>
                                    `${name} ${
                                        readableActionText[
                                            actions[actions.length - 1]
                                        ]
                                    }..`
                            )
                            .join(", ")}
                    </Text>
                )}
            </S.SWritingUsersContainer>
            <S.SContainer>
                <EmojiButton
                    onOpen={onOpenEmoji}
                    onClose={onCloseEmoji}
                    onEmojiClick={onEmojiSelect}
                />

                <S.STextField
                    placeholder="Start a new message"
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />

                <IconButton
                    onClick={onSubmitHandler(value)}
                    disabled={!value}
                    size="medium"
                >
                    <SendIcon />
                </IconButton>
            </S.SContainer>
        </S.SWrapper>
    );
};

export default DialogInput;
