import React from "react";
import Dialog from "@components/Material/Dialog";
import { Formik, FormikValues } from "formik";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";
import { IDialogHeaderProps } from "@components/Material/Dialog/components/DialogHeader/DialogHeader";

interface IFormDialogProps extends IDialogHeaderProps {
    open: boolean;
    onSubmit: (values: FormikValues) => void;
    initialValues: FormikValues;
    validationSchema: object;
}

const FormDialog: React.FC<IFormDialogProps> = ({
    open,
    onClose,
    onSubmit,
    initialValues,
    validationSchema,
    title,
    buttons,
    children,
}): React.ReactElement => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogHeader buttons={buttons} title={title} onClose={onClose} />
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
