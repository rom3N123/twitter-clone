import React from "react";
import SimpleSelect from "@components/FormControl/SimpleSelect";

const months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

const MonthSelect: React.FC = (): React.ReactElement => {
    return <SimpleSelect name="month" items={months} label="Month" />;
};

export default MonthSelect;
