import styled from "styled-components";
import UploadImageButton from "@components/Buttons/UploadImageButton";
import DialogContent from "@mui/material/DialogContent";
import Flex from "@styled/components/Flex.styled";
import { centerAbsoluteStyles } from "@styled/styles";
import { ProfileBackground } from "../ProfileHeader/ProfileHeader.styled";

export const SProfileBackgroundContainer = styled(ProfileBackground)`
    position: relative;
`;

export const SProfileBackgroundBackdrop = styled.div`
    ${centerAbsoluteStyles};
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
`;

export const SUploadImageButton = styled(UploadImageButton)`
    ${centerAbsoluteStyles};
    z-index: 1;
`;

export const SProfileUserAvatarContainer = styled.div`
    margin-top: -50px;
    display: inline-block;
    position: relative;
`;

export const SProfileUserAvatarButtonContainer = styled(Flex).attrs(() => ({
    justify: "center",
    align: "center",
}))`
    ${centerAbsoluteStyles};
    width: 100%;
    height: 100%;
    background-color: red;
    z-index: 2;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const SDialogContent = styled(DialogContent)`
    overflow-y: visible;
`;
