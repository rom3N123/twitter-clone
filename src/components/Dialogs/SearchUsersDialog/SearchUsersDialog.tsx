import React from "react";
import Dialog from "@components/Material/Dialog";
import { IDialogCommonProps } from "@types/components/shared";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";
import UsersList from "@components/Lists/UsersList";
import * as S from "./SearchUsersDialog.styled";
import InlineSearchbar from "@components/SearchComponents/InlineSearchbar/InlineSearchbar";
import useBind from "@hooks/useBind";
import useDebounce from "@hooks/useDebounce";
import UsersService from "@services/UsersService";
import { IUser } from "@types/api/user";

export interface ISearchUsersDialogProps extends IDialogCommonProps {
    title?: string;
}

const SearchUsersDialog: React.FC<ISearchUsersDialogProps> = ({
    open,
    onClose,
    title = "Search people",
}): React.ReactElement => {
    const { value, onChange } = useBind();
    const debouncedValue = useDebounce(value, 500);
    const [users, setUsers] = React.useState<IUser[]>([]);

    React.useEffect(() => {
        const fetchUsers = async (): Promise<void> => {
            const users = await UsersService.search(debouncedValue);

            setUsers(users);
        };

        if (debouncedValue) {
            fetchUsers();
        } else {
            setUsers([]);
        }
    }, [debouncedValue]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader title={title} onClose={onClose} />

            <S.SInputContainer>
                <InlineSearchbar
                    value={value}
                    onChange={onChange}
                    placeholder="Search people"
                />
            </S.SInputContainer>

            <S.SListContainer>
                <UsersList users={users} />
            </S.SListContainer>
        </Dialog>
    );
};

export default SearchUsersDialog;
