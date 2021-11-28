import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Divider from '@mui/material/Divider';

export const SWrapper = styled(Grid).attrs(() => ({
	container: true,
}))`
	padding: 10px 16px;
	gap: 16px;
`;

export const SAvatar = styled(Grid).attrs(() => ({
	item: true,
	component: Avatar,
}))`
	width: 48px;
	height: 48px;
`;

export const STweetFormWrapper = styled(Grid).attrs(() => ({
	item: true,
}))`
	flex-grow: 1;
`;

export const STweetTextArea = styled(TextareaAutosize)`
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

export const SDivider = styled(Divider)`
	margin-bottom: 10px;
`;

export const SActions = styled(Grid).attrs(() => ({
	container: true,
	justifyContent: 'space-between',
	alignItems: 'center',
}))``;

export const SButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const SButtonsDivider = styled(Divider).attrs(() => ({
	orientation: 'vertical',
	flexItem: true,
}))`
	margin: 5px 10px;
`;
