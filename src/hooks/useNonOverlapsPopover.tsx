import React from "react";
import usePopover, { IUsePopoverValue } from "@hooks/usePopover";
import PopoverComponent from "@mui/material/Popover";

type PopoverType = React.FC<IPopoverProps>;

interface IUseNonOverlapsPopoverValue extends Omit<IUsePopoverValue, "anchor"> {
    Popover: PopoverType;
}

interface IPopoverProps {
    children: React.ReactNode;
    className: string;
}

const useNonOverlapsPopover = (): IUseNonOverlapsPopoverValue => {
    const { anchor, closePopover, openPopover } = usePopover();

    const Popover: PopoverType = React.useCallback(
        ({ children, className, ...otherProps }): React.ReactElement => {
            return (
                <PopoverComponent
                    open={Boolean(anchor)}
                    onClose={closePopover}
                    anchorEl={anchor}
                    className={className}
                    {...otherProps}
                >
                    {children}
                </PopoverComponent>
            );
        },
        [anchor]
    );

    return React.useMemo(
        () => ({
            closePopover,
            openPopover,
            Popover,
        }),
        [Popover]
    );
};

export default useNonOverlapsPopover;
