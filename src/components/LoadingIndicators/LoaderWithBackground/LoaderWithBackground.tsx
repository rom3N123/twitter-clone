import React from "react";
import * as S from "./LoaderWithBackground.styled";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderWithBackground: React.FC = (): React.ReactElement => {
    return (
        <S.SContainer>
            <CircularProgress size={30} />
        </S.SContainer>
    );
};

export default LoaderWithBackground;
