import React from "react";
import * as S from "./Messages.styled";
import useActiveDialog from "./hooks/useActiveDialog";
import { Routes, Route, useParams } from "react-router-dom";
import DialogsList from "./components/Dialog/components/DialogsList";
import SelectDialogMessage from "./components/SelectDialogMessage";
import MessagesDialogPage from "./pages/MessagesDialogPage";

const Messages: React.FC = (): React.ReactElement => {
    const params = useParams();
    const dialogId = params["*"];
    const { activeDialog, onDialogClick } = useActiveDialog(dialogId);

    return (
        <S.SContainer>
            <S.SConversatins>
                <DialogsList
                    activeDialog={activeDialog}
                    onDialogClick={onDialogClick}
                />
            </S.SConversatins>

            <S.SDialogContainer>
                <Routes>
                    <Route
                        index
                        element={
                            <S.SEmptyDialogContainer>
                                <SelectDialogMessage />
                            </S.SEmptyDialogContainer>
                        }
                    />

                    <Route path=":dialogId" element={<MessagesDialogPage />} />
                </Routes>
            </S.SDialogContainer>
        </S.SContainer>
    );
};

export default Messages;
