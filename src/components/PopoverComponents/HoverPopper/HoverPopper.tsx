import React from "react";
import { IHoverPopoverProps } from "@interfaces/components";
import { SPopper } from "./HoverPopover.styled";
import Grow from "@mui/material/Grow";

const HoverPopper: React.FC<IHoverPopoverProps> = ({
    id,
    open,
    anchorEl,
    onMouseLeave,
    children,
}): React.ReactElement => {
    return (
        <SPopper
            id={id}
            open={open}
            anchorEl={anchorEl}
            onMouseLeave={onMouseLeave}
        >
            <Grow in={open}>
                <div>{children}</div>
            </Grow>
        </SPopper>
    );
};

export default HoverPopper;
