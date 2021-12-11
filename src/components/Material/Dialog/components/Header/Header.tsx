import React from "react";
import CancelButton from "@components/Buttons/CancelButton";
import S from "./Header.styled";
import Grid from "@mui/material/Grid";

interface IHeaderProps {
    onClose: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onClose }): React.ReactElement => {
    return (
        <S.Header>
            <Grid item flexBasis="33%">
                <Grid container>
                    <CancelButton onClick={onClose} />
                </Grid>
            </Grid>
            <S.TwitterIcon />

            <Grid item flexBasis="33%" />
        </S.Header>
    );
};

export default Header;
