import React from "react";
import MuiTabs from "@mui/material/Tabs";
import Tab from "./components/Tab";
import { ITab } from "./components/Tab/Tab";

interface ITabsProps {
    tabs: ITab[];
}

const Tabs: React.FC<ITabsProps> = ({ tabs }): React.ReactElement => {
    const [activeTab, setActiveTab] = React.useState<string>(tabs[0].value);

    return (
        <MuiTabs
            value={activeTab}
            variant="fullWidth"
            indicatorColor="secondary"
        >
            {tabs.map(({ label, value, onClick }) => (
                <Tab
                    key={label}
                    value={value}
                    label={label}
                    onClick={() => {
                        setActiveTab(value);
                        onClick();
                    }}
                />
            ))}
        </MuiTabs>
    );
};

export default Tabs;
