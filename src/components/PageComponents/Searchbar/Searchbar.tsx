import React from "react";
import useDebounce from "@hooks/useDebounce";
import { STextField } from "./Searchbar.styled";
import { ReactComponent as LoupeIcon } from "@icons/loupe.svg";
import CancelButton from "../../Buttons/CancelButton";

const Searchbar: React.FC = (): React.ReactElement => {
    const [value, setValue] = React.useState<string>("");
    const debouncedValue: string = useDebounce(value);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    React.useEffect(() => {
        console.log(`change: ${debouncedValue}`);
    }, [debouncedValue]);

    return (
        <STextField
            InputProps={{
                startAdornment: <LoupeIcon />,
                endAdornment: value && <CancelButton onClick={() => {}} />,
            }}
            placeholder="Search Twitter"
            value={value}
            onChange={onChange}
        ></STextField>
    );
};

export default Searchbar;
