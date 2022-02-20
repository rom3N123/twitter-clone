import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "_types/api/dialog";

type OnDialogClick = (dialog: Dialog) => void;

interface UseActiveDialogValue {
    activeDialog: Dialog | undefined;
    onDialogClick: OnDialogClick;
}

const useActiveDialog = (dialogId: string): UseActiveDialogValue => {
    const [activeDialog, setActiveDialog] = React.useState<Dialog>();
    const navigate = useNavigate();

    const onDialogClick: OnDialogClick = (dialog) => {
        navigate(dialog._id);
    };

    return {
        activeDialog,
        onDialogClick,
    };
};

export default useActiveDialog;
