import React from "react";
import * as S from "./DialogHeader.styled";
import CancelButton from "@components/Buttons/CancelButton";
import { ICommonButton, IDialogCommonProps } from "@interfaces/components";
import TwitterLogo from "@components/TwitterLogo";
import ArrowBackButton from "@components/Buttons/ArrowBackButton";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";

interface IHeaderProps extends Pick<IDialogCommonProps, "onClose"> {
    title?: string;
    withBackButton?: boolean;
    buttons?: ICommonButton[];
}

const DialogHeader: React.FC<IHeaderProps> = ({
    onClose,
    title,
    withBackButton,
    buttons,
}): React.ReactElement => {
    const DialogButton = withBackButton ? ArrowBackButton : CancelButton;

    return (
        <S.SHeader>
            <S.SHeaderInner>
                <S.SDialogButtonContainer basis={title ? "" : "33%"}>
                    <DialogButton onClick={onClose} />
                    {title && <S.STitle>{title}</S.STitle>}
                </S.SDialogButtonContainer>

                {!title && (
                    <S.STwitterLogoContainer>
                        <TwitterLogo />
                    </S.STwitterLogoContainer>
                )}

                <S.SButtonsContainer>
                    {buttons &&
                        buttons.map(({ title, onClick }) => (
                            <BlackAndWhiteButton
                                title={title}
                                onClick={onClick}
                            />
                        ))}
                </S.SButtonsContainer>
            </S.SHeaderInner>
        </S.SHeader>
    );
};

export default DialogHeader;
