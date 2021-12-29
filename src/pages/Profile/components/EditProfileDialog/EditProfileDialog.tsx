import React from "react";
import Dialog from "@components/Material/Dialog";
import { IDialogCommonProps } from "@interfaces/components";
import DialogHeaderWithTitle from "@components/Material/Dialog/components/DialogHeaderWithTitle";
import DialogContent from "@mui/material/DialogContent";
import { ProfileBackground } from "../ProfileHeader/ProfileHeader.styled";
import * as S from "./EditProfileDialog.styled";

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

            <S.ProfileBackgroundContainer>
                <ProfileBackground />
                <S.SUploadImageButton onClick={() => {}} />
                <S.ProfileBackgroundBackdrop />
            </S.ProfileBackgroundContainer>
        </Dialog>
    );
};

export default EditProfileDialog;
