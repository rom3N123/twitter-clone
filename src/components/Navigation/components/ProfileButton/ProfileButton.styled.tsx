import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';

export const SWrapper = styled(
	({ children, ...props }): React.ReactElement => <Grid {...props}>{children}</Grid>,
).attrs(() => ({
	container: true,
	justifyContent: 'space-between',
	alignItems: 'center',
}))`
	border-radius: 9999px;
	gap: 6px;
	padding: 12px;
`;

export const SAvatar = styled(Grid).attrs(() => ({
	item: true,
	component: Avatar,
}))``;

export const STextWrapper = styled(Grid).attrs(() => ({ item: true }))``;

export const STypography = styled(Typography)`
	font-size: 15px;
`;

export const SProfileName = styled(STypography)`
	font-weight: 700;
	text-align: left;
`;

export const SProfileId = styled(STypography)`
	font-weight: 400;
	color: ${({ theme }) => theme.mode.palette.gray};
`;

export const SMoreIcon = styled(Grid).attrs(() => ({
	item: true,
	component: MoreHorizIcon,
}))`
	font-size: 20px;
`;

export const SCheckIcon = styled(CheckIcon)`
	color: ${({ theme }) => theme.accentColor};
	font-size: 20px;
`;
