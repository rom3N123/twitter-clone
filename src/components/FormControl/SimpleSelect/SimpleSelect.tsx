import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useField } from "formik";
import { FormHelperText } from "@mui/material";

export interface ISimpleSelectProps<T> {
    name: string;
    items: T[];
    label?: string;
}

const SimpleSelect = <T extends string | number>({
    label,
    items,
    name,
}: ISimpleSelectProps<T>): React.ReactElement => {
    const [field, meta] = useField(name);

    const error = meta.touched && meta.error;

    return (
        <FormControl error={Boolean(error)} fullWidth>
            {label && <InputLabel>{label}</InputLabel>}
            <Select
                MenuProps={{
                    sx: {
                        height: "300px",
                    },
                }}
                {...field}
            >
                {items.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                ))}
            </Select>

            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    );
};

export default SimpleSelect;
