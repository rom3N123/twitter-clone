import styled from 'styled-components';
import Grid from '@mui/material/Grid';

export const SContent = styled(Grid).attrs(() => ({
	item: true,
}))`
	& > * {
		padding: 10px 0;
	}
`;

export const SMainContent = styled(Grid).attrs(() => ({
	item: true,
}))`
	border: 1px solid ${({ theme }) => theme.mode.divider};
	border-top: 0;
	border-bottom: 0;
`;
