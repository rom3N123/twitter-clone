import React from "react";
import { useAppSelector } from "@redux/hooks";
import { createPortal } from "react-dom";
import { SContainer, SInner } from "./LoadingScreen.styled";
import Fade from "@mui/material/Fade";
import TwitterLogo from "@components/TwitterLogo";

const LoadingScreen: React.FC = (): React.ReactElement => {
    const { isLoadingWithScreen } = useAppSelector(({ general }) => general);

    return createPortal(
        <Fade in={isLoadingWithScreen}>
            <SContainer>
                <SInner>
                    <TwitterLogo size={100} />
                </SInner>
            </SContainer>
        </Fade>,
        document.getElementById("portals") as HTMLElement
    );
};

export default LoadingScreen;
