import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import {
    SPopover,
    SListIcon,
    SListItemText,
    SDisplayIcon,
    SDisplayDot,
} from "./MoreMenuPopover.styled";

import { ReactComponent as SettingsIcon } from "@icons/more/settings.svg";
import { ReactComponent as DisplayIcon } from "@icons/more/display.svg";
import ViewDialog from "./components/ViewDialog";
import { IDialogCommonProps } from "@interfaces/components";

interface IMoreMenuPopoverProps extends IDialogCommonProps {
    anchor: HTMLDivElement | null;
}

interface IListItem {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}

const MoreMenuPopover: React.FC<IMoreMenuPopoverProps> = ({
    anchor,
    open,
    onClose,
}): React.ReactElement => {
    const [dialogVisible, setDialogVisible] = React.useState<boolean>(false);

    const handleOpenDialog = (): void => {
        setDialogVisible(true);
    };

    const handleCloseDialog = (): void => {
        setDialogVisible(false);
    };

    const onListItemButtonClickHandler = (onClick: () => void) => () => {
        onClick();
        onClose();
    };

    const listItems: IListItem[] = [
        {
            label: "Settings and privacy",
            icon: <SettingsIcon />,
            onClick: () => {},
        },
        {
            label: "Display",
            icon: (
                <SDisplayIcon>
                    <DisplayIcon />
                    <SDisplayDot />
                </SDisplayIcon>
            ),
            onClick: handleOpenDialog,
        },
    ];

    return (
        <>
            <ViewDialog open={dialogVisible} onClose={handleCloseDialog} />

            <SPopover
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                }}
                anchorEl={anchor}
                open={Boolean(open)}
                onClose={onClose}
            >
                <List>
                    {listItems.map(({ onClick, label, icon }) => (
                        <ListItemButton
                            onClick={onListItemButtonClickHandler(onClick)}
                            key={label}
                        >
                            <ListItem>
                                <SListIcon>{icon}</SListIcon>
                                <SListItemText>{label}</SListItemText>
                            </ListItem>
                        </ListItemButton>
                    ))}
                </List>
            </SPopover>
        </>
    );
};

export default MoreMenuPopover;
