import { TypeOrNull } from "_types/helpers";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "_types/api/dialog";

type OnDialogClick = (dialog: Dialog) => void;

interface UseActiveDialogValue {
    activeDialog: TypeOrNull<string>;
    onDialogClick: OnDialogClick;
}

const useActiveDialog = (dialogId?: string): UseActiveDialogValue => {
    const [activeDialog, setActiveDialog] =
        React.useState<TypeOrNull<string>>(null);
    const navigate = useNavigate();

    const onDialogClick: OnDialogClick = (dialog) => {
        navigate(dialog._id);
    };

    React.useEffect(() => {
        if (dialogId) {
            setActiveDialog(dialogId);
        }
    }, [dialogId]);

    return {
        activeDialog,
        onDialogClick,
    };
};

export default useActiveDialog;
