import React from "react";
import Popover from "@mui/material/Popover";
import { ICommonPopoverProps } from "@interfaces/components";

const ProfileUserAvatarTooltip: React.FC<
    ICommonPopoverProps<HTMLDivElement>
> = ({ anchor, open, onClose }): React.ReactElement => {
    return <Popover anchorEl={anchor} open={open} onClose={onClose}></Popover>;
};

export default ProfileUserAvatarTooltip;
