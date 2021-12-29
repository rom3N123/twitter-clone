import React from "react";
import SimpleSelect from "@components/FormControl/SimpleSelect";

const years: number[] = Array.from({ length: 122 }, (_, i) => i + 1900);

const YearSelect: React.FC = (): React.ReactElement => {
    return <SimpleSelect name="year" items={years.reverse()} label="Year" />;
};

export default YearSelect;
