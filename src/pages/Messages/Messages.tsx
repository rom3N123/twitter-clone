import React from "react";
import * as S from "./Messages.styled";
import MessageDialogItem from "./components/MessageDialogItem";
import useFetchDialogs from "./hooks/useFetchDialogs";
import SelectDialogMessage from "./components/SelectDialogMessage";
import Dialog from "./components/Dialog";
import useActiveDialog from "./hooks/useActiveDialog";

const Messages: React.FC = (): React.ReactElement => {
    const { activeDialog, onDialogClick } = useActiveDialog();

    const dialogs = useFetchDialogs();

    return (
        <S.SContainer>
            <S.SConversatins>
                {!dialogs.length ? (
                    <SelectDialogMessage />
                ) : (
                    dialogs.map((dialog) => (
                        <MessageDialogItem
                            isActive={activeDialog?._id === dialog._id}
                            onClick={onDialogClick}
                            key={dialog._id}
                            dialog={dialog}
                        />
                    ))
                )}
            </S.SConversatins>

            {!activeDialog ? (
                <div>Dialog</div>
            ) : (
                <S.SDialogContainer>
                    <S.SConversationsInner>
                        {dialogs.length && <Dialog dialog={activeDialog} />}
                    </S.SConversationsInner>
                </S.SDialogContainer>

                // <S.SSeleectDialogContainer>
                //     <S.SConversationsInner>
                //         {dialogs.length && (
                //             <Dialog user={dialogs[0].participants[0]} />
                //         )}

                //         {/* <SelectDialogMessage /> */}
                //     </S.SConversationsInner>
                // </S.SSeleectDialogContainer>
            )}
        </S.SContainer>
    );
};

export default Messages;
