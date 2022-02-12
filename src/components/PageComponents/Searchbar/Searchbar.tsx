import React from "react";
import S from "./Searchbar.styled";
import { ReactComponent as LoupeIcon } from "@icons/loupe.svg";
import Grow from "@mui/material/Grow";
import { IBindValue } from "@hooks/useBind";

interface SearchbarProps extends IBindValue {
    clearValue: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
    value,
    onChange,
    clearValue,
}): React.ReactElement => {
    return (
        <S.Field
            InputProps={{
                startAdornment: <LoupeIcon />,
                endAdornment: (
                    <Grow in={Boolean(value)}>
                        <div>
                            <S.ClearButton onClick={clearValue} />
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
