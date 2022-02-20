import React from "react";
import * as S from "@pages/Messages/Messages.styled";
import Dialog from "@pages/Messages/components/Dialog";
import { useParams } from "react-router-dom";
import useFetchDialog from "./hooks/useFetchDialog";

const MessagesDialogPage: React.FC = (): React.ReactElement => {
    const { dialogId } = useParams();

    const dialog = useFetchDialog(dialogId as string);

    return (
        <S.SConversationsInner>
            {dialog && <Dialog dialog={dialog} />}
        </S.SConversationsInner>
    );
};

export default MessagesDialogPage;
