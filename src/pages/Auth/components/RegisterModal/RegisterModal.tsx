import React from "react";
import { useNavigate } from "react-router-dom";
import MultiLevelDialog, {
    IDialogLevel,
    IMultiDialogRefValue,
} from "@components/Dialogs/MultiLevelDialog";
import ProfileInfoForm, {
    ProfileInfoFormValuesType,
} from "./components/ProfileInfoForm";
import EnterEmailCodeForm from "./components/EnterEmailCodeForm";
import { useDispatch } from "react-redux";
import { registerAction } from "@redux/ducks/auth/actions";
import { FormikHelpers } from "formik";

const RegisterModal: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const dialogRef = React.useRef<IMultiDialogRefValue>(null);
    const [profileInfo, setProfileInfo] =
        React.useState<ProfileInfoFormValuesType>({
            email: "",
            name: "",
            password: "",
            day: "",
            month: "",
            year: "",
        });
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        navigate("/auth");
    };

    const onGoNextLevelHandler = (): void => {
        dialogRef.current?.goToNextLevel();
    };

    const onProfileFormSubmit = (
        profileInfo: ProfileInfoFormValuesType,
        { setErrors }: FormikHelpers<ProfileInfoFormValuesType>
    ) => {
        const { year, month, day, ...otherFields } = profileInfo;
        const birthTimestamp = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        ).getTime();
        console.log(birthTimestamp);

        dispatch(registerAction({ ...otherFields, birthTimestamp }));
        // setProfileInfo(profileInfo);
        // onGoNextLevelHandler();
    };

    const levels: IDialogLevel[] = [
        {
            content: <ProfileInfoForm onFormSubmit={onProfileFormSubmit} />,
        },
        {
            content: (
                <EnterEmailCodeForm
                    email={profileInfo.email}
                    onSubmit={() => {}}
                />
            ),
        },
    ];

    return (
        <MultiLevelDialog
            open={true}
            onClose={handleCloseModal}
            levels={levels}
            ref={dialogRef}
        />
    );
};

export default RegisterModal;
