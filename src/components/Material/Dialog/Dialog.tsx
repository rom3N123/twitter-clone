import React from "react";
import { Dialog as MuiDialog, useMediaQuery } from "@mui/material";
import { IDialogCommonProps } from "@interfaces/components";

interface IDialogProps extends IDialogCommonProps {}

const Dialog: React.FC<IDialogProps> = ({
    open,
    onClose,
    children,
}): React.ReactElement => {
    const mobileMediaQuery = useMediaQuery("(max-width: 768px)");

    return (
        <MuiDialog fullScreen={mobileMediaQuery} open={open} onClose={onClose}>
            {children}
        </MuiDialog>
    );
};

export default Dialog;
