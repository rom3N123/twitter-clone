import React from "react";
import { STab } from "./Tab.styled";

export interface ITab {
    label: string;
    onClick: () => void;
    value: string;
}

const Tab: React.FC<ITab> = ({ label, onClick, value }): React.ReactElement => {
    return <STab label={label} onClick={onClick} value={value} />;
};

export default Tab;
