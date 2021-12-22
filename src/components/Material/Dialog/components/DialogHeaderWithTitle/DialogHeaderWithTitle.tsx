import React from "react";
import { IDialogCommonProps } from "@interfaces/components";
import { SDialogCloseButton } from "../../Dialog.styled";
import {
    STitleContainer,
    STitle,
    SHeader,
} from "./DialogHeaderWithTitle.styled";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";

interface IButton {
    title: string;
    onClick: () => void;
}

interface IDialogHeaderWithTitleProps
    extends Pick<IDialogCommonProps, "onClose"> {
    title: string;
    button?: IButton;
}

const DialogHeaderWithTitle: React.FC<IDialogHeaderWithTitleProps> = ({
    onClose,
    title,
    button,
}): React.ReactElement => {
    return (
        <SHeader>
            <STitleContainer>
                <SDialogCloseButton onClick={onClose} />
                <STitle>{title}</STitle>
            </STitleContainer>

            {button && <BlackAndWhiteButton title={button.title} />}
        </SHeader>
    );
};

export default DialogHeaderWithTitle;
