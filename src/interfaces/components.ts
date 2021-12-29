export interface IDialogCommonProps {
    open: boolean;
    onClose: () => void;
}

export interface ICommonComponentProps {
    className?: string;
    children?: React.ReactElement;
}
