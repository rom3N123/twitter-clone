import React from "react";
import { useAppSelector } from "@redux/hooks";
import { createPortal } from "react-dom";
import { SContainer, SInner } from "./LoadingScreen.styled";
import TwitterLogo from "@components/TweetComponents/TwitterLogo";

const LoadingScreen: React.FC = (): React.ReactElement | null => {
    const { isLoadingWithScreen } = useAppSelector(({ general }) => general);

    if (!isLoadingWithScreen) {
        return null;
    }

    return createPortal(
        <SContainer>
            <SInner>
                <TwitterLogo size={100} />
            </SInner>
        </SContainer>,
        document.getElementById("portals") as HTMLElement
    );
};

export default LoadingScreen;
