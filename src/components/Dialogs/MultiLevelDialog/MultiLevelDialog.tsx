import React from "react";
import { IDialogCommonProps } from "_types/components";
import Dialog from "@components/Material/Dialog";
import { DialogActions } from "@mui/material";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";
import useMultiLevelDialog, { IDialogLevel } from "./useMultiLevelDialog";

export type MultiDialogRefValue = Pick<
    ReturnType<typeof useMultiLevelDialog>,
    "goToNextLevel" | "goToPreviousLevel"
>;
interface IMultiLevelDialogProps extends IDialogCommonProps {
    levels: IDialogLevel[];
}

const MultiLevelDialog = React.forwardRef<
    MultiDialogRefValue,
    IMultiLevelDialogProps
>(({ open, onClose, levels }, ref): React.ReactElement => {
    const {
        currentLevel: { title, headerButtons, dialogButtons, content },
        goToNextLevel,
        goToPreviousLevel,
        isFirstLevel,
    } = useMultiLevelDialog(levels);

    React.useImperativeHandle(
        ref,
        () => ({
            goToNextLevel,
            goToPreviousLevel,
        }),
        []
    );

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
