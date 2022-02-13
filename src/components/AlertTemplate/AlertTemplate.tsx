import FeedbackAlert from "@components/FeedbackComponents/FeedbackAlert";
import React from "react";
import { AlertComponentPropsWithStyle } from "react-alert";

const AlertTemplate: React.FC<AlertComponentPropsWithStyle> = ({
    id,
    close,
    message,
    options,
    style,
}): React.ReactElement => {
    return (
        <FeedbackAlert
            style={style}
            type={options.type}
            message={message}
            close={close}
        />
    );
};

export default AlertTemplate;
