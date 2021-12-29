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

const RegisterModal: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const dialogRef = React.useRef<IMultiDialogRefValue>(null);
    const [profileInfo, setProfileInfo] =
        React.useState<ProfileInfoFormValuesType>({
            day: "",
            email: "",
            month: "",
            name: "",
            year: "",
        });

    const handleCloseModal = () => {
        navigate("/auth");
    };

    const onGoNextLevelHandler = (): void => {
        dialogRef.current?.goToNextLevel();
    };

    const onProfileFormSubmit = (profileInfo: ProfileInfoFormValuesType) => {
        setProfileInfo(profileInfo);
        onGoNextLevelHandler();
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
