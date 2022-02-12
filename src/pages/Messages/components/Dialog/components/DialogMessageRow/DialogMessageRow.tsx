import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import Fade from "@mui/material/Fade";
import React from "react";
import { DialogMessage as DialogMessageType } from "_types/api/dialog";
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

export interface AdditionalDialogMessageRowProps extends DialogMessageRowProps {
    index: number;
    messages: DialogMessageType[];
}

const DialogMessageRow: React.FC<AdditionalDialogMessageRowProps> = ({
    message: { text, author },
    isMine,
    index,
    messages,
}): React.ReactElement => {
    const hookProps: IsPreviousUserTheSameProps = {
        author,
        index,
        messages,
    };

    const indent: number = useDialogMessageIndent(hookProps);
    const shouldShowAvatar: boolean = useIsNextMessageByTheSameUser(hookProps);

    return (
        <S.SContainer alignEnd={isMine} indent={indent}>
            <Fade in={!isMine && !shouldShowAvatar}>
                <div>
                    <ProfileUserAvatar size={40} user={author} />
                </div>
            </Fade>

            <DialogMessage isMine={isMine} text={text} />
        </S.SContainer>
    );
};

export default DialogMessageRow;
