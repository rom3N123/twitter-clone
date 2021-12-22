import React from "react";
import S from "./DialogHeader.styled";
import Grid from "@mui/material/Grid";
import { SDialogCloseButton, SDialogHeader } from "../../Dialog.styled";

interface IHeaderProps {
    onClose: () => void;
}

const DialogHeader: React.FC<IHeaderProps> = ({
    onClose,
}): React.ReactElement => {
    return (
        <SDialogHeader>
            <Grid item flexBasis="33%">
                <Grid container>
                    <SDialogCloseButton onClick={onClose} />
                </Grid>
            </Grid>

            <S.TwitterIcon />

            <Grid item flexBasis="33%" />
        </SDialogHeader>
    );
};

export default DialogHeader;
