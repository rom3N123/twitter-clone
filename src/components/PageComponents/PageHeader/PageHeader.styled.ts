import styled from "styled-components";
import Typography from "@mui/material/Typography";

const Header = styled.header`
    height: 53px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.mode.divider};
`;

const Title = styled(Typography)`
    font-weight: 700;
    font-size: 20px;
`;

const styles = { Header, Title };

export default styles;
