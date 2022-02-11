import React from "react";
import Dialog from "@components/Material/Dialog";
import { IDialogCommonProps } from "_types/components";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";
import UsersList from "@components/Lists/UsersList";
import * as S from "./SearchUsersDialog.styled";
import InlineSearchbar from "@components/SearchComponents/InlineSearchbar/InlineSearchbar";
import UsersService from "@services/UsersService";
import { IUser } from "_types/api/user";
import useDebouncedSearch from "@hooks/api/useDebouncedSearch";

const fetchUsers = async (debouncedValue: string): Promise<IUser[]> => {
    return UsersService.search(debouncedValue);
};
export interface ISearchUsersDialogProps extends IDialogCommonProps {
    title?: string;
}

const SearchUsersDialog: React.FC<ISearchUsersDialogProps> = ({
    open,
    onClose,
    title = "Search people",
}): React.ReactElement => {
    const { bind, results } = useDebouncedSearch<IUser>(fetchUsers);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader title={title} onClose={onClose} />

            <S.SInputContainer>
                <InlineSearchbar {...bind()} placeholder="Search people" />
            </S.SInputContainer>

            <S.SListContainer>
                <UsersList users={results} />
            </S.SListContainer>
        </Dialog>
    );
};

export default SearchUsersDialog;
