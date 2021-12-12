import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Divider from "@mui/material/Divider";

const Container = styled(Grid).attrs(() => ({
    container: true,
}))`
    padding: 10px 16px;
    gap: 16px;
`;

const SAvatar = styled(Grid).attrs(() => ({
    item: true,
    component: Avatar,
}))`
    width: 48px;
    height: 48px;
`;

const FormWrapper = styled(Grid).attrs(() => ({
    item: true,
}))`
    flex-grow: 1;
`;

const TextArea = styled(TextareaAutosize)`
    width: 100%;
    padding: 16px 0;
    max-height: 300px;

    &,
    &::placeholder {
        font-size: 20px;
    }

    &::placeholder {
        color: ${({ theme }) => theme.mode.palette.gray};
    }
`;

const SDivider = styled(Divider)`
    margin-bottom: 10px;
`;

const FormActions = styled(Grid).attrs(() => ({
    container: true,
    justifyContent: "space-between",
    alignItems: "center",
}))``;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonsDivider = styled(Divider).attrs(() => ({
    orientation: "vertical",
    flexItem: true,
}))`
    margin: 5px 10px;
`;

const styles = {
    Container,
    SAvatar,
    FormWrapper,
    TextArea,
    SDivider,
    FormActions,
    ButtonsWrapper,
    ButtonsDivider,
};

export default styles;
