import React from "react";
import { IUserEditableFields } from "@interfaces/api/user";
import { IDialogCommonProps } from "@interfaces/components";
import ProfileUserAvatar from "@components/UserComponents/ProfileUserAvatar";
import FormControl from "@mui/material/FormControl";
import Input from "@components/FormControl/Input";
import * as S from "./EditProfileDialog.styled";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Dialog from "@components/Material/Dialog";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";
import { useDispatch } from "react-redux";
import { updateUserAction } from "@redux/ducks/user/actions";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import FilesService from "@services/FilesService";
import { useQueryClient } from "react-query";

interface IEditProfileDialogProps extends IDialogCommonProps {}

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
    const dispatch = useDispatch();
    const user = useAppSelector(selectUserState);

    const queryClient = useQueryClient();

    const formInitialValues: IUserEditableFields = {
        name: user.name,
        bio: user.bio,
        location: user.location,
    };

    const onSaveClickHandler = async (
        values: IUserEditableFields
    ): Promise<void> => {
        await dispatch(updateUserAction(values));
        queryClient.invalidateQueries(["user", user._id]);
    };

    const onLoadFileHandler =
        (handler: (file: string) => void) =>
        async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
            const files: FileList = e.currentTarget.files as FileList;
            const file: File = files[0];
            const fileUrl: string = await FilesService.getFileUrl(file);
            handler(fileUrl);
        };

    const onAvatarChangeHandler = (fileUrl: string): void => {
        dispatch(updateUserAction({ avatar: fileUrl }));
    };

    const onBackgroundChangeHandler = (fileUrl: string): void => {
        dispatch(
            updateUserAction({
                background: fileUrl,
            })
        );
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader
                title="Edit profile"
                onClose={onClose}
                buttons={[
                    {
                        title: "Save",
                        onClick: (): void => {
                            submitButtonRef.current?.click();
                        },
                    },
                ]}
            />

            <Formik
                initialValues={formInitialValues}
                validationSchema={validationSchema}
                onSubmit={onSaveClickHandler}
            >
                {({ touched, dirty }) => {
                    return (
                        <FormControl component={Form} fullWidth>
                            <S.SProfileBackgroundContainer
                                src={user.background}
                            >
                                <S.SUploadImageButton
                                    onChange={onLoadFileHandler(
                                        onBackgroundChangeHandler
                                    )}
                                    title="Change background"
                                />
                                <S.SProfileBackgroundBackdrop />
                            </S.SProfileBackgroundContainer>

                            <S.SDialogContent>
                                <S.SProfileUserAvatarContainer>
                                    <ProfileUserAvatar
                                        user={user}
                                        size={110}
                                        withWrapper
                                    />
                                    <S.SProfileUserAvatarButtonContainer>
                                        <S.SUploadImageButton
                                            title="Change avatar"
                                            onChange={onLoadFileHandler(
                                                onAvatarChangeHandler
                                            )}
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
                                        disabled={!touched || !dirty}
                                    />
                                </FormControl>
                            </S.SDialogContent>
                        </FormControl>
                    );
                }}
            </Formik>
        </Dialog>
    );
};

export default EditProfileDialog;
