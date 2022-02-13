import React from "react";
import * as S from "./FeedbackAlert.styled";
import { AlertType } from "react-alert";

export type FeedbackAlertProps = {
    close: () => void;
    message: React.ReactNode;
    type?: AlertType;
    style: React.CSSProperties;
};

const FeedbackAlert: React.FC<FeedbackAlertProps> = ({
    message,
    close,
    type,
    style,
}): React.ReactElement => {
    return (
        <S.SAlert
            variant="filled"
            severity={type}
            onClose={close}
            style={style}
        >
            {message}
        </S.SAlert>
    );
};

export default FeedbackAlert;
