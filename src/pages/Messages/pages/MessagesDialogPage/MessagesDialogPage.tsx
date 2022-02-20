import React from "react";
import Dialog from "@pages/Messages/components/Dialog";
import { useParams } from "react-router-dom";
import useFetchDialog from "./hooks/useFetchDialog";
import * as S from "./MessagesDialogPage.styled";
import LoaderWithBackground from "@components/LoadingIndicators/LoaderWithBackground";

const MessagesDialogPage: React.FC = (): React.ReactElement => {
    const { dialogId } = useParams();

    const dialog = useFetchDialog(dialogId as string);

    return (
        <S.SContainer>
            {dialog ? <Dialog dialog={dialog} /> : <LoaderWithBackground />}
        </S.SContainer>
    );
};

export default MessagesDialogPage;
