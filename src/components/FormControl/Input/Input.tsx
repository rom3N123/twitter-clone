import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface IInputProps {
    name: string;
    fullWidth?: boolean;
    label?: string;
    rows?: number;
    multiline?: boolean;
    maxLength?: number;
}

const Input: React.FC<IInputProps> = ({
    name,
    fullWidth,
    label,
    rows,
    maxLength,
    multiline,
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
            rows={rows}
            multiline={multiline}
            inputProps={{
                maxLength,
            }}
            {...props}
            {...field}
        />
    );
};

export default Input;
