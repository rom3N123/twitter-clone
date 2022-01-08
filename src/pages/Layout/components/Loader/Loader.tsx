import React from "react";
import { CircularProgress } from "@mui/material";
import { SLoadingContainer } from "./Loader.styled";

export interface ILoaderProps {
    size?: number;
}

const Loader: React.FC<ILoaderProps> = ({ size = 30 }): React.ReactElement => {
    return (
        <SLoadingContainer>
            <CircularProgress size={size} />
        </SLoadingContainer>
    );
};

export default Loader;
