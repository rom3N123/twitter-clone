import React from "react";
import { STwitterIcon } from "./TwitterLogo.styled";

export interface ITwitterLogoProps {
    size?: number;
}

const TwitterLogo: React.FC<ITwitterLogoProps> = ({
    size,
}): React.ReactElement => {
    return <STwitterIcon size={size} />;
};

export default TwitterLogo;
