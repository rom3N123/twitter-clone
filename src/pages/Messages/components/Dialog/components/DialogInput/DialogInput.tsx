import React from "react";
import * as S from "./DialogInput.styled";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import useBind from "@hooks/useBind";
import socket from "@http/authSocket";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@ducks/user/selectors";
import { IUser } from "_types/api/user";
import produce from "immer";
import Text from "@components/TypographyComponents/Text";
export interface DialogInputProps {
    onSubmit: (value: string) => void;
    dialogId: string;
}

const DialogInput: React.FC<DialogInputProps> = ({
    dialogId,
    onSubmit,
}): React.ReactElement => {
    const user = useAppSelector(selectUserState);
    const { value, onChange, clearValue } = useBind();
    const [isWriting, setIsWriting] = React.useState<boolean>(false);
    const [writingUsers, setWritingUsers] = React.useState<IUser[]>([]);

    const onSubmitHandler = (value: string) => (): void => {
        onSubmit(value);
        clearValue();
    };

    const onKeyPress = ({ key }: React.KeyboardEvent) => {
        if (key === "Enter") {
            onSubmitHandler(value)();
        }
    };

    React.useEffect(() => {
        socket.on("USER_WRITE_MESSAGE", (user: IUser) => {
            setWritingUsers(
                produce((prevState) => {
                    prevState.push(user);
                })
            );
        });

        socket.on("USER_STOP_WRITE_MESSAGE", (user: IUser) => {
            console.log("stop");
            setWritingUsers(
                produce((prevState) => {
                    return prevState.filter(({ _id }) => _id !== user._id);
                })
            );
        });
    }, []);

    React.useEffect(() => {
        if (isWriting) {
            socket.emit("WRITING_MESSAGE", { dialogId, user });
        } else {
            socket.emit("STOP_WRITING_MESSAGE", { dialogId, user });
        }
    }, [isWriting]);

    React.useEffect(() => {
        setIsWriting(Boolean(value));
    }, [value]);

    return (
        <S.SWrapper>
            <S.SWritingUsersContainer>
                {Boolean(writingUsers.length) && (
                    <Text lh={30}>{`${writingUsers
                        .map(({ name }) => name)
                        .join(", ")} печатает..`}</Text>
                )}
            </S.SWritingUsersContainer>
            <S.SContainer>
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
