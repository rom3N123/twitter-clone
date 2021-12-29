import React from "react";
import SimpleSelect from "@components/FormControl/SimpleSelect";

const days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

const DaySelect: React.FC = (): React.ReactElement => {
    return <SimpleSelect name="day" items={days} label="Day" />;
};

export default DaySelect;
