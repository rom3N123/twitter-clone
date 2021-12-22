import React from "react";
import Dialog from "@components/Material/Dialog";
import { IDialogCommonProps } from "@interfaces/components";
import DialogHeaderWithTitle from "@components/Material/Dialog/components/DialogHeaderWithTitle";

interface IEditProfileDialogProps extends IDialogCommonProps {}

const EditProfileDialog: React.FC<IEditProfileDialogProps> = ({
    open,
    onClose,
}): React.ReactElement => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeaderWithTitle
                onClose={onClose}
                title="Edit profile"
                button={{ title: "Save", onClick: () => {} }}
            ></DialogHeaderWithTitle>
        </Dialog>
    );
};

export default EditProfileDialog;
