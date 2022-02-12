import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import Fade from "@mui/material/Fade";
import React from "react";
import { IUser } from "_types/api/user";
import DialogMessage, {
    DialogMessageProps,
} from "../DialogMessage/DialogMessage";
import * as S from "./DialogMessageRow.styled";
import { IsPreviousUserTheSameProps } from "./hooks/types";
import useDialogMessageIndent from "./hooks/useDialogMessageIndent";
import useIsNextMessageByTheSameUser from "./hooks/useIsNextMessageByTheSameUser";
import useIsPreviousMessageBySameUser from "./hooks/useIsPreviousMessageBySameUser";

export interface DialogMessageRowProps extends DialogMessageProps {
    user: IUser;
}

export interface AdditionalDialogMessageRowProps extends DialogMessageRowProps {
    index: number;
    messages: DialogMessageRowProps[];
}

const DialogMessageRow: React.FC<AdditionalDialogMessageRowProps> = ({
    user,
    text,
    isMine,
    index,
    messages,
}): React.ReactElement => {
    const hookProps: IsPreviousUserTheSameProps = {
        user,
        index,
        messages,
    };

    const indent: number = useDialogMessageIndent(hookProps);
    const shouldShowAvatar: boolean = useIsNextMessageByTheSameUser(hookProps);

    return (
        <S.SContainer alignEnd={isMine} indent={indent}>
            <Fade in={!isMine && !shouldShowAvatar}>
                <div>
                    <ProfileUserAvatar size={40} user={user} />
                </div>
            </Fade>

            <DialogMessage isMine={isMine} text={text} />
        </S.SContainer>
    );
};

export default DialogMessageRow;
