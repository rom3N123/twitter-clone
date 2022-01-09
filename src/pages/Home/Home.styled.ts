import Content from "@styled/components/Content.styled";
import styled from "styled-components";

export const STweetFormWrapper = styled(Content)`
    border-bottom: 1px solid ${({ theme }) => theme.mode.divider};
    padding-top: 10px;
    padding-bottom: 10px;
`;
