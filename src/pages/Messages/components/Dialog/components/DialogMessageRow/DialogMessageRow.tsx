import React from "react";
import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import Grow from "@mui/material/Grow";
import { DialogMessage as DialogMessageType } from "_types/api/dialog";
import { CommonProps } from "_types/common";
import DialogMessage, {
    DialogMessageProps,
} from "../DialogMessage/DialogMessage";
import * as S from "./DialogMessageRow.styled";
import { IsPreviousUserTheSameProps } from "./hooks/types";
import useDialogMessageIndent from "./hooks/useDialogMessageIndent";
import useIsNextMessageByTheSameUser from "./hooks/useIsNextMessageByTheSameUser";

export interface DialogMessageRowProps
    extends Omit<DialogMessageProps, "text"> {
    message: DialogMessageType;
}

export interface AdditionalDialogMessageRowProps
    extends DialogMessageRowProps,
        CommonProps {
    index: number;
    messages: DialogMessageType[];
    containerRef?: React.RefObject<HTMLDivElement>;
}

const DialogMessageRow: React.FC<AdditionalDialogMessageRowProps> = ({
    message: { text, author },
    isMine,
    index,
    messages,
    className,
    style,
    containerRef,
}): React.ReactElement => {
    const hookProps: IsPreviousUserTheSameProps = {
        author,
        index,
        messages,
    };

    const indent: number = useDialogMessageIndent(hookProps);
    const shouldShowAvatar: boolean = useIsNextMessageByTheSameUser(hookProps);

    return (
        <S.SContainer
            className={className}
            style={style}
            justifyEnd={isMine}
            indent={indent}
        >
            <Grow in={!isMine && !shouldShowAvatar}>
                <div>
                    <ProfileUserAvatar size={40} user={author} />
                </div>
            </Grow>

            <S.SMessageContainer>
                <DialogMessage
                    messageRef={containerRef}
                    isMine={isMine}
                    text={text}
                />
            </S.SMessageContainer>
        </S.SContainer>
    );
};

export default DialogMessageRow;
