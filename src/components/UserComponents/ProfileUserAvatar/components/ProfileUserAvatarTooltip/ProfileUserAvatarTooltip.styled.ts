import styled from "styled-components";
import Flex from "@styled/components/Flex.styled";
import Text from "@components/TypographyComponents/Text";

export const SInner = styled.div`
    padding: 0 12px;
`;

export const SHeader = styled(Flex).attrs(() => ({
    justify: "space-between",
}))``;

export const SUserInfo = styled.div`
    margin-top: 5px;
`;

export const SText = styled(Text).attrs(() => ({
    fontSize: 15,
}))``;

export const SUserBio = styled.div`
    margin: 10px 0;
`;

export const SUserActivity = styled(Flex).attrs(() => ({
    align: "center",
    gap: 15,
}))``;
