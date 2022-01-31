import React from "react";

export type UseDialogValue = [
    isOpen: boolean,
    open: () => void,
    close: () => void
];

const useDialog = (): UseDialogValue => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const open = (): void => {
        setIsOpen(true);
    };

    const close = (): void => {
        setIsOpen(false);
    };

    return [isOpen, open, close];
};

export default useDialog;
