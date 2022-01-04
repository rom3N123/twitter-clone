import { SyntheticEvent } from "react";

export interface IDialogCommonProps {
    open: boolean;
    onClose: () => void;
}

export interface ICommonButton extends React.HTMLProps<HTMLButtonElement> {
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}

export interface ICommonPopoverProps<E> {
    open: boolean;
    anchor: E | null;
    onClose: (event?: {}) => void;
}
