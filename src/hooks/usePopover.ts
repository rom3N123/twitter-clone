import React, { SyntheticEvent } from "react";
import { ICommonPopoverProps } from "@interfaces/components";

export interface IUsePopoverValue
    extends Pick<ICommonPopoverProps<HTMLDivElement>, "anchor"> {
    openPopover: (e: React.MouseEvent<HTMLDivElement>) => void;
    closePopover: (event: any) => void;
}

/**
 * Хук для управления состоянием поповера
 * @returns {IUsePopoverValue}
 */
const usePopover = (): IUsePopoverValue => {
    const [anchor, setAnchor] = React.useState<HTMLDivElement | null>(null);

    const openPopover = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            setAnchor(e.currentTarget);
        },
        []
    );

    const closePopover = React.useCallback((event: SyntheticEvent) => {
        event!.stopPropagation();
        setAnchor(null);
    }, []);

    return { anchor, openPopover, closePopover };
};

export default usePopover;
