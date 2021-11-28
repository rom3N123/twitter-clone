import styled from 'styled-components';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const SWrapper = styled(Grid).attrs(() => ({
	container: true,
	direction: 'column',
	justifyContent: 'space-between',
}))`
	position: sticky;
	top: 0;
	max-width: 250px;
	height: 100vh;
`;

export const SList = styled(List)`
	max-width: 225px;
	width: 100%;
`;

export const SListItem = styled(ListItem).attrs(() => ({
	dense: true,
}))`
	padding: 0;
	font-size: 20px;
	svg {
		fill: ${({ theme }) => theme.mode.svgColor};
		width: 28px;
		height: 28px;
	}
`;

export const SListItemButton = styled(ListItemButton)`
	padding: 8px;
	padding: 8px 20px;
	margin: 5px 0;
	border-radius: 9999px;
`;

export const SListItemText = styled(ListItemText)`
	span {
		font-size: 20px;
	}
`;

export const SNavLink = styled(NavLink)`
	&.active {
		span {
			font-weight: 600;
		}
	}
`;

export const STweetButton = styled(Button).attrs(() => ({
	variant: 'contained',
	fullWidth: true,
}))`
	height: 50px;
	margin-top: 16px;
	box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
	padding: 12px;
`;
