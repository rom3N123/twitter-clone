import styled from "styled-components";
import Text from "@components/Text";

export const SContainer = styled.div`
    max-width: 300px;
`;

export const STitle = styled(Text).attrs(() => ({
    fontWeight: 800,
    fontSize: 31,
    lh: 36,
}))`
    margin-bottom: 8px;
`;

export const SButtonContainer = styled.div`
    margin-top: 28px;
`;
