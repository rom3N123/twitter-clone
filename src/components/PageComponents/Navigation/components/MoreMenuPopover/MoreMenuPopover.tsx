import React from "react";
import * as S from "./MoreMenuPopover.styled";
import { ReactComponent as SettingsIcon } from "@icons/more/settings.svg";
import { ReactComponent as DisplayIcon } from "@icons/more/display.svg";
import CustomizationDialog from "./components/CustomizationDialog";
import { ICommonPopoverProps } from "_types/components";
import PopoverList from "@components/PopoverComponents/PopoverList";

interface IMoreMenuPopoverProps extends ICommonPopoverProps<HTMLDivElement> {}

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

    const listItems: IListItem[] = [
        {
            label: "Settings and privacy",
            icon: <SettingsIcon />,
            onClick: () => {},
        },
        {
            label: "Display",
            icon: (
                <S.SDisplayIcon>
                    <DisplayIcon />
                    <S.SDisplayDot />
                </S.SDisplayIcon>
            ),
            onClick: handleOpenDialog,
        },
    ];

    return (
        <>
            <CustomizationDialog
                open={dialogVisible}
                onClose={handleCloseDialog}
            />

            <S.SPopover
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
                <PopoverList onPopoverClose={onClose} items={listItems} />
            </S.SPopover>
        </>
    );
};

export default MoreMenuPopover;
