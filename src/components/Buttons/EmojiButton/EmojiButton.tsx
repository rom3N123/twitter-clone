import React from "react";
import Picker, { IEmojiPickerProps } from "emoji-picker-react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import IconButton from "@mui/material/IconButton";
import useDialog from "@hooks/useDialog";
import * as S from "./EmojiButton.styled";

export type EmojiButtonProps = IEmojiPickerProps & {
    onOpen: () => void;
    onClose: () => void;
};

const EmojiButton: React.FC<EmojiButtonProps> = ({
    onOpen,
    onClose,
    ...otherProps
}): React.ReactElement => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isOpen, open, close] = useDialog();

    const onOpenHandler = (): void => {
        open();
        onOpen();
    };

    const onCloseHandler = (event: React.MouseEvent): void => {
        event.stopPropagation();
        close();
        onClose();
    };

    return (
        <div ref={containerRef} onClick={onOpenHandler}>
            <IconButton>
                <EmojiEmotionsIcon />
            </IconButton>

            <S.SPopover
                anchorEl={containerRef.current}
                open={isOpen}
                onClose={onCloseHandler}
                anchorOrigin={{ horizontal: "left", vertical: "top" }}
                transformOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
                <Picker disableSearchBar {...otherProps} />
            </S.SPopover>
        </div>
    );
};

export default EmojiButton;
