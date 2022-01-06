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

export interface IHoverPopoverProps
    extends Omit<ICommonPopoverProps<HTMLElement>, "onClose" | "anchor"> {
    id: string | undefined;
    onMouseLeave: (event: SyntheticEvent<any>) => void;
    anchorEl: HTMLElement | undefined;
}
