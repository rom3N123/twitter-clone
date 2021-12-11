import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Twitter from "@mui/icons-material/Twitter";

const Header = styled(Grid).attrs(() => ({
    container: true,
    justifyContent: "space-between",
    alignItems: "center",
}))`
    positon: relative;
    padding: 5px 10px 0;
`;

const TwitterIcon = styled(Grid).attrs(() => ({
    item: true,
    flexBasis: "33%",
    component: Twitter,
}))`
    width: 40px;
    height: 40px;
    component: Twitter;
`;

const styles = {
    Header,
    TwitterIcon,
};

export default styles;
