import React from "react";

/**
 * Хук для управления всплывающими окнами
 */
const useToggle = () => {
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
