import React from "react";
import { ICommonButton, IDialogCommonProps } from "@types/components/shared";
import Dialog from "@components/Material/Dialog";
import { DialogActions } from "@mui/material";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";

export interface IDialogLevel {
    title?: string;
    content: React.ReactNode;
    dialogButtons?: ICommonButton[];
    headerButtons?: ICommonButton[];
}

export interface IMultiDialogRefValue {
    goToNextLevel: () => void;
    goToPreviousLevel: () => void;
}

interface IMultiLevelDialogProps extends IDialogCommonProps {
    levels: IDialogLevel[];
}

const MultiLevelDialog = React.forwardRef<
    IMultiDialogRefValue,
    IMultiLevelDialogProps
>(({ open, onClose, levels }, ref): React.ReactElement => {
    const [activeLevelIndex, setActiveLevelIndex] = React.useState<number>(0);

    const { title, content, headerButtons, dialogButtons }: IDialogLevel =
        levels[activeLevelIndex];

    const goToNextLevel = () => {
        setActiveLevelIndex((prev) => prev + 1);
    };

    const goToPreviousLevel = () => {
        setActiveLevelIndex((prev) => prev - 1);
    };

    React.useImperativeHandle(
        ref,
        () => ({
            goToNextLevel,
            goToPreviousLevel,
        }),
        []
    );

    const isFirstLevel = activeLevelIndex === 0;

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader
                title={title}
                onClose={isFirstLevel ? onClose : goToPreviousLevel}
                buttons={headerButtons}
                withBackButton={!isFirstLevel}
            >
                {dialogButtons && (
                    <DialogActions>
                        {dialogButtons.map(({ title, onClick }) => (
                            <BlackAndWhiteButton
                                key={title}
                                title={title}
                                onClick={onClick}
                            />
                        ))}
                    </DialogActions>
                )}
            </DialogHeader>

            {content}
        </Dialog>
    );
});

export default MultiLevelDialog;
