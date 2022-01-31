import React from "react";
import Dialog from "@components/Material/Dialog";
import { IDialogCommonProps } from "@interfaces/components";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";
import UsersList from "@components/Lists/UsersList";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import * as S from "./SearchUsersDialog.styled";
import InlineSearchbar from "@components/SearchComponents/InlineSearchbar/InlineSearchbar";

export interface ISearchUsersDialogProps extends IDialogCommonProps {
    title?: string;
}

const SearchUsersDialog: React.FC<ISearchUsersDialogProps> = ({
    open,
    onClose,
    title = "Search users",
}): React.ReactElement => {
    const user = useAppSelector(selectUserState);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader title={title} onClose={onClose} />

            <S.SInputContainer>
                <InlineSearchbar />
            </S.SInputContainer>

            <S.SListContainer>
                <UsersList users={Array.from({ length: 10 }, () => user)} />
            </S.SListContainer>
        </Dialog>
    );
};

export default SearchUsersDialog;
