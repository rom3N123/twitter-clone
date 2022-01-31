import styled from "styled-components";

export const SListContainer = styled.div`
    height: 500px;
    overflow-y: auto;
`;

export const SInputContainer = styled.div`
    padding: 6px 24px;
    border-bottom: 1px solid ${({ theme }) => theme.mode.divider};
    margin-bottom: 6px;
`;
