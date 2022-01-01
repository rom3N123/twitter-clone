import React from "react";
import CameraIcon from "@mui/icons-material/PhotoCameraOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

interface IUploadImageButton {
    onClick: () => void;
    title?: string;
}

const UploadImageButton: React.FC<IUploadImageButton> = ({
    title = "Add photo",
    onClick,
    ...otherProps
}): React.ReactElement => {
    return (
        <Tooltip title={title}>
            <IconButton onClick={onClick} {...otherProps}>
                <CameraIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    );
};

export default UploadImageButton;