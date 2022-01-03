import React from "react";
import CameraIcon from "@mui/icons-material/PhotoCameraOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

interface IUploadImageButton {
    title?: string;
    onClick?: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadImageButton: React.FC<IUploadImageButton> = ({
    title = "Add photo",
    onClick,
    onChange,
    ...otherProps
}): React.ReactElement => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onClickHandler = (): void => {
        if (onClick) {
            onClick();
        }
        inputRef.current?.click();
        inputRef.current!.value = "";
    };

    return (
        <>
            <input hidden ref={inputRef} type="file" onChange={onChange} />

            <Tooltip title={title}>
                <IconButton onClick={onClickHandler} {...otherProps}>
                    <CameraIcon fontSize="small" />
                </IconButton>
            </Tooltip>
        </>
    );
};

export default UploadImageButton;
