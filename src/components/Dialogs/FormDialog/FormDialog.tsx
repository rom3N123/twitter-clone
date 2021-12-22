import React from "react";
import { IDialogCommonProps } from "@interfaces/components";
import DialogTitle from "@mui/material/DialogTitle";
import Header from "@components/Material/Dialog/components/DialogHeader";
import Dialog from "@components/Material/Dialog";
import { Formik } from "formik";

interface IFormDialogProps extends IDialogCommonProps {
    headerTitle: string;
    onSubmit: () => void;
    initialValues: {
        [k: string]: string;
    };
    validationSchema: object;
    children: React.ReactNode;
}

const FormDialog: React.FC<IFormDialogProps> = ({
    open,
    onClose,
    headerTitle,
    onSubmit,
    initialValues,
    validationSchema,
    children,
}): React.ReactElement => {
    return (
        <Dialog open={open} onClose={onClose}>
            <Header onClose={onClose} />
            <DialogTitle>{headerTitle}</DialogTitle>
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {children}
            </Formik>
        </Dialog>
    );
};

export default FormDialog;
