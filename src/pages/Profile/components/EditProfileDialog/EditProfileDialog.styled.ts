import styled from "styled-components";
import UploadImageButton from "@components/Buttons/UploadImageButton";
import { centerAbsoluteStyles } from "@styled/styles";

export const ProfileBackgroundContainer = styled.div`
    position: relative;
`;

export const ProfileBackgroundBackdrop = styled.div`
    ${centerAbsoluteStyles};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
`;

export const SUploadImageButton = styled(UploadImageButton)`
    ${centerAbsoluteStyles};
    z-index: 1;
`;
