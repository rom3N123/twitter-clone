import React from "react";
import FormDialog from "@components/Dialogs/FormDialog";
import { ProfileEditFields } from "@interfaces/api/profile";
import { IDialogCommonProps } from "@interfaces/components";
import ProfileUserAvatar from "../ProfileUserAvatar";
import FormControl from "@mui/material/FormControl";
import Input from "@components/FormControl/Input";
import * as S from "./EditProfileDialog.styled";
import * as yup from "yup";
import { Form } from "formik";

interface IEditProfileDialogProps extends IDialogCommonProps {}

const formInitialValues: ProfileEditFields = {
    name: "",
    bio: "",
    location: "",
};

const NAME_MAX_LENGTH = 50;
const BIO_MAX_LENGTH = 160;
const LOCATION_MAX_LENGTH = 30;

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .max(
            NAME_MAX_LENGTH,
            `Name must not be more than ${NAME_MAX_LENGTH} characters long`
        ),
    bio: yup
        .string()
        .max(
            BIO_MAX_LENGTH,
            `Bio must not be more than ${BIO_MAX_LENGTH} characters long`
        ),
    location: yup
        .string()
        .max(
            LOCATION_MAX_LENGTH,
            `Location must not be more than ${LOCATION_MAX_LENGTH} charatercs long`
        ),
    // avatar: yup.string(),
});

const inputs = [
    { name: "name", label: "Name", maxLength: NAME_MAX_LENGTH },
    {
        multiline: true,
        maxLength: BIO_MAX_LENGTH,
        rows: 3,
        name: "bio",
        label: "Bio",
    },
    {
        maxLength: LOCATION_MAX_LENGTH,
        name: "location",
        label: "Location",
    },
];

const EditProfileDialog: React.FC<IEditProfileDialogProps> = ({
    open,
    onClose,
}): React.ReactElement => {
    const submitButtonRef = React.useRef<HTMLButtonElement>(null);

    const onSaveClickHandler = (values: ProfileEditFields) => {
        // ...
    };

    return (
        <FormDialog
            initialValues={formInitialValues}
            open={open}
            onClose={onClose}
            validationSchema={validationSchema}
            onSubmit={onSaveClickHandler}
            title="Edit profile"
            buttons={[
                {
                    title: "Save",
                    onClick: (): void => {
                        submitButtonRef.current?.click();
                    },
                },
            ]}
        >
            {(props: any) => {
                return (
                    <FormControl component={Form} fullWidth>
                        <S.SProfileBackgroundContainer>
                            <S.SUploadImageButton onClick={() => {}} />
                            <S.SProfileBackgroundBackdrop />
                        </S.SProfileBackgroundContainer>

                        <S.SDialogContent>
                            <S.SProfileUserAvatarContainer>
                                <ProfileUserAvatar size={110} withWrapper />
                                <S.SProfileUserAvatarButtonContainer>
                                    <S.SUploadImageButton
                                        title="Change photo"
                                        onClick={() => {}}
                                    />
                                </S.SProfileUserAvatarButtonContainer>
                            </S.SProfileUserAvatarContainer>

                            <FormControl
                                sx={{ gap: "24px", margin: "20px 0" }}
                                fullWidth
                                margin="dense"
                            >
                                {inputs.map((input) => (
                                    <Input key={input.name} {...input} />
                                ))}

                                <button
                                    ref={submitButtonRef}
                                    type="submit"
                                    style={{ display: "none" }}
                                />
                            </FormControl>
                        </S.SDialogContent>
                    </FormControl>
                );
            }}
        </FormDialog>
    );
};

export default EditProfileDialog;
