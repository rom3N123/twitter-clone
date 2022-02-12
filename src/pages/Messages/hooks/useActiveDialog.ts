import React from "react";
import { Dialog } from "_types/api/dialog";

type OnDialogClick = (dialog: Dialog) => void;

interface UseActiveDialogValue {
    activeDialog: Dialog | undefined;
    onDialogClick: OnDialogClick;
}

const useActiveDialog = (): UseActiveDialogValue => {
    const [activeDialog, setActiveDialog] = React.useState<Dialog>();

    const onDialogClick: OnDialogClick = (dialog) => {
        setActiveDialog(dialog);
    };

    return {
        activeDialog,
        onDialogClick,
    };
};

export default useActiveDialog;
