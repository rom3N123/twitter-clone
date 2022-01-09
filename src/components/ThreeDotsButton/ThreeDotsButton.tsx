import React from "react";
import usePopover from "@hooks/usePopover";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import PopoverList from "@components/PopoverList";
import { IPopoverListItem } from "@components/PopoverList/PopoverList";
import useItemsWithHocFunc from "@hooks/useItemsWithHocFunc";

export interface IThreeDotsButtonProps {
    items: IPopoverListItem[];
}

const ThreeDotsButton: React.FC<IThreeDotsButtonProps> = ({
    items,
}): React.ReactElement => {
    const buttonRef = React.useRef<HTMLDivElement>(null);
    const { anchor, openPopover, closePopover } =
        usePopover<HTMLButtonElement>();

    const onItemClickHandler = (func: () => void) => (e: React.MouseEvent) => {
        e.stopPropagation();
        func();
    };

    const itemWithHocFunc = useItemsWithHocFunc(items, onItemClickHandler);

    return (
        <div ref={buttonRef}>
            <IconButton onClick={openPopover}>
                <MoreIcon />
            </IconButton>

            <Popover
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={closePopover}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                PaperProps={{
                    sx: {
                        padding: 0,
                        borderRadius: "3px",
                    },
                }}
            >
                <PopoverList
                    onPopoverClose={closePopover}
                    items={itemWithHocFunc}
                />
            </Popover>
        </div>
    );
};

export default ThreeDotsButton;
