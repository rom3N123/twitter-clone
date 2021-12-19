import React from "react";
import { createPortal } from "react-dom";
import { SContainer, SInner, STwitterIcon } from "./LoadingScreen.styled";

const LoadingScreen: React.FC = (): React.ReactElement => {
    return createPortal(
        <SContainer>
            <SInner>
                <STwitterIcon />
            </SInner>
        </SContainer>,
        document.getElementById("portals") as HTMLElement
    );
};

export default LoadingScreen;
