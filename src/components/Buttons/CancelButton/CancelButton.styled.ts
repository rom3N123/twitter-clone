import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const SIconButton = styled(IconButton)`
	padding: 0;
	svg {
		fill: ${({ theme }) => theme.accentColor};
	}
`;
