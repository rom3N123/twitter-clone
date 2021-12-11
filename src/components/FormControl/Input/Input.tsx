import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

interface IInputProps {
    name: string;
    fullWidth?: boolean;
}

const Input: React.FC<IInputProps> = ({
    name,
    fullWidth,
    ...props
}): React.ReactElement => {
    const [field, meta] = useField(name);

    const errorText = meta.touched && meta.error;

    return (
        <TextField
            helperText={errorText}
            error={!!errorText}
            fullWidth={fullWidth}
            {...props}
            {...field}
        />
    );
};

export default Input;
