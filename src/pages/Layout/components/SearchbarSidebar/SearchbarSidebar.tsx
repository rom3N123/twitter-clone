import Searchbar from "@components/PageComponents/Searchbar";
import useBind from "@hooks/useBind";
import React from "react";

const SearchbarSidebar: React.FC = (): React.ReactElement => {
    const { value, onChange, setValue, clearValue } = useBind();

    return (
        <Searchbar
            value={value}
            onChange={onChange}
            clearValue={clearValue}
            setValue={setValue}
        />
    );
};

export default SearchbarSidebar;
