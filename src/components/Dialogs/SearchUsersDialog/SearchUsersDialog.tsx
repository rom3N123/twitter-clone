import React from "react";
import Dialog from "@components/Material/Dialog";
import { IDialogCommonProps } from "@interfaces/components";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";

export interface ISearchUsersDialogProps extends IDialogCommonProps {
    title?: string;
}

const SearchUsersDialog: React.FC<ISearchUsersDialogProps> = ({
    open,
    onClose,
    title = "Search users",
}): React.ReactElement => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader title={title} onClose={onClose} />
        </Dialog>
    );
};

export default SearchUsersDialog;
