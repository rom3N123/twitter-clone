export interface IDialogCommonProps {
    open: boolean;
    onClose: () => void;
}

export interface ICommonButton extends React.HTMLProps<HTMLButtonElement> {
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}
