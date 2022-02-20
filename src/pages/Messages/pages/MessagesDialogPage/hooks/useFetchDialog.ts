import React from "react";
import useDialogApi from "@pages/Messages/components/Dialog/hooks/useDialogApi";
import { TypeOrNull } from "_types/helpers";
import { Dialog } from "_types/api/dialog";

type UseFetchDialogValue = TypeOrNull<Dialog>;

const useFetchDialog = (dialogId: string): UseFetchDialogValue => {
    const [dialog, setDialog] = React.useState<TypeOrNull<Dialog>>(null);

    const { getDialog } = useDialogApi(dialogId);

    React.useEffect(() => {
        const fetchDialog = async (): Promise<void> => {
            const dialog = await getDialog();
            setDialog(dialog);
        };

        fetchDialog();
    }, []);

    return dialog;
};

export default useFetchDialog;
