import React from "react";

export interface IUseToggleValue {
    isOpen: boolean;
    toggle: () => void;
}

/**
 * Хук для управления всплывающими окнами
 */
const useToggle = (): IUseToggleValue => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggle = React.useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return {
        isOpen,
        toggle,
    };
};

export default useToggle;
