import React from "react";

type Element = HTMLDivElement | null;

export interface IUsePopoverValue {
    anchor: Element;
    openPopover: (e: React.MouseEvent<HTMLDivElement>) => void;
    closePopover: () => void;
}

/**
 * Хук для управления состоянием поповера
 * @returns {IUsePopoverValue}
 */
const usePopover = (): IUsePopoverValue => {
    const [anchor, setAnchor] = React.useState<Element>(null);

    const openPopover = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            setAnchor(e.currentTarget);
        },
        []
    );

    const closePopover = React.useCallback(() => {
        setAnchor(null);
    }, []);

    return React.useMemo(
        () => ({
            anchor,
            openPopover,
            closePopover,
        }),
        [openPopover, closePopover, anchor]
    );
};

export default usePopover;
