import styled from "styled-components";
import Twitter from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const TwitterIcon = styled(Grid).attrs(() => ({
    item: true,
    flexBasis: "33%",
    component: Twitter,
}))`
    width: 40px;
    height: 40px;
    component: Twitter;
`;

const Title = styled(Typography)``;

const styles = {
    TwitterIcon,
    Title,
};

export default styles;
