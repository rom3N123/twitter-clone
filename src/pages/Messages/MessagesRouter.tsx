import React from "react";
import * as S from "./Messages.styled";
import MessageDialogItem from "./components/MessageDialogItem";
import useFetchDialogs from "./hooks/useFetchDialogs";
import SelectDialogMessage from "./components/SelectDialogMessage";
import Dialog from "./components/Dialog";
import useActiveDialog from "./hooks/useActiveDialog";
import SkeletonUserItem from "@components/SkeletonComponents/SkeletonUserItem";

const Messages: React.FC = (): React.ReactElement => {
    const { activeDialog, onDialogClick } = useActiveDialog();

    const { dialogs, isLoading } = useFetchDialogs();

    return (
        <S.SContainer>
            <S.SConversatins>
                {isLoading ? (
                    <>
                        <SkeletonUserItem padding="16px" avatarSize={47} />
                        <SkeletonUserItem padding="16px" avatarSize={47} />
                        <SkeletonUserItem padding="16px" avatarSize={47} />
                    </>
                ) : !dialogs.length ? (
                    <S.SSeleectDialogContainer>
                        <SelectDialogMessage />
                    </S.SSeleectDialogContainer>
                ) : (
                    dialogs.map((dialog) => (
                        <MessageDialogItem
                            key={dialog._id}
                            isActive={activeDialog?._id === dialog._id}
                            onClick={onDialogClick}
                            dialog={dialog}
                        />
                    ))
                )}
            </S.SConversatins>

            <S.SDialogContainer>
                {activeDialog ? (
                    <S.SConversationsInner>
                        <Dialog dialog={activeDialog} />
                    </S.SConversationsInner>
                ) : (
                    <S.SEmptyDialogContainer>
                        <SelectDialogMessage />
                    </S.SEmptyDialogContainer>
                )}
            </S.SDialogContainer>
        </S.SContainer>
    );
};

export default Messages;
