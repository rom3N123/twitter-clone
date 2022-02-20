import React from "react";
import useFetchDialogs from "./hooks/useFetchDialogs";
import SkeletonUserItem from "@components/SkeletonComponents/SkeletonUserItem";
import SelectDialogMessage from "@pages/Messages/components/SelectDialogMessage";
import MessageDialogItem from "@pages/Messages/components/MessageDialogItem";
import useActiveDialog from "@pages/Messages/hooks/useActiveDialog";
import * as S from "@pages/Messages/Messages.styled";

interface DialogsListProps extends ReturnType<typeof useActiveDialog> {}

const DialogsList: React.FC<DialogsListProps> = ({
    onDialogClick,
    activeDialog,
}): React.ReactElement => {
    const { dialogs, isLoading } = useFetchDialogs();

    return (
        <div>
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
        </div>
    );
};

export default DialogsList;
