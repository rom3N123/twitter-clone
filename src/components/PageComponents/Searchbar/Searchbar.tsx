import React from "react";
import useDebounce from "@hooks/useDebounce";
import S from "./Searchbar.styled";
import { ReactComponent as LoupeIcon } from "@icons/loupe.svg";
import Grow from "@mui/material/Grow";
import useBind from "@hooks/useBind";

const Searchbar: React.FC = (): React.ReactElement => {
    const { value, onChange, clearValue } = useBind();
    const debouncedValue: string = useDebounce(value);

    React.useEffect(() => {
        console.log(`change: ${debouncedValue}`);
    }, [debouncedValue]);

    return (
        <S.Field
            InputProps={{
                startAdornment: <LoupeIcon />,
                endAdornment: (
                    <Grow in={Boolean(value)}>
                        <div>
                            <S.ClearButton width={18} onClick={clearValue} />
                        </div>
                    </Grow>
                ),
            }}
            placeholder="Search Twitter"
            value={value}
            onChange={onChange}
        />
    );
};

export default Searchbar;
