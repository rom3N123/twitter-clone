import React, { SyntheticEvent } from "react";
import { ICommonPopoverProps } from "_types/components";

export interface IUsePopoverValue<E>
    extends Pick<ICommonPopoverProps<E>, "anchor"> {
    openPopover: (e: React.MouseEvent<E>) => void;
    closePopover: (event?: any) => void;
}

/**
 * Хук для управления состоянием поповера
 * @returns {IUsePopoverValue}
 */
const usePopover = <E>(): IUsePopoverValue<E> => {
    const [anchor, setAnchor] = React.useState<E | null>(null);

    const openPopover = React.useCallback((e: React.MouseEvent<E>) => {
        e.stopPropagation();
        setAnchor(e.currentTarget);
    }, []);

    const closePopover = React.useCallback((event?: SyntheticEvent) => {
        if (event) {
            event!.stopPropagation();
        }
        setAnchor(null);
    }, []);

    return { anchor, openPopover, closePopover };
};

export default usePopover;
