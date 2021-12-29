import React from "react";
import { IDialogCommonProps } from "@interfaces/components";
import MultiLevelDialog, {
    IDialogLevel,
    IMultiDialogRefValue,
} from "@components/Dialogs/MultiLevelDialog";

interface IEditProfileDialogProps extends IDialogCommonProps {}

const EditProfileDialog: React.FC<IEditProfileDialogProps> = ({
    open,
    onClose,
}): React.ReactElement => {
    const dialogRef = React.useRef<IMultiDialogRefValue>(null);

    const levels: IDialogLevel[] = [
        {
            title: "Level 1",
            content: "Hello world!",
            headerButtons: [
                {
                    title: "Next",
                    onClick: () => {
                        dialogRef.current!.goToNextLevel();
                    },
                },
            ],
        },
        { title: "Level 2", content: "LEVEL 2" },
        { title: "Level 3", content: "LEVEEL 3" },
    ];

    return (
        <MultiLevelDialog
            open={open}
            onClose={onClose}
            levels={levels}
            ref={dialogRef}
        ></MultiLevelDialog>
    );
};

export default EditProfileDialog;
