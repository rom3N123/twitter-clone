import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface IInputProps {
    name: string;
    fullWidth?: boolean;
    label?: string;
}

const Input: React.FC<IInputProps> = ({
    name,
    fullWidth,
    label,
    ...props
}): React.ReactElement => {
    const [field, meta] = useField(name);

    const errorText = meta.touched && meta.error;

    return (
        <TextField
            helperText={errorText}
            error={!!errorText}
            fullWidth={fullWidth}
            label={label}
            {...props}
            {...field}
        />
    );
};

export default Input;
