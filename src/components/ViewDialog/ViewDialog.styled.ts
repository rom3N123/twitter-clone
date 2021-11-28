import styled from 'styled-components';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ColorName, ModeName } from './../../interfaces/styled';
import accentColors from '../../styles/accentColors';
import modes from '../../styles/modes';

export const STypography = styled(Typography)`
	text-align: center;
`;

export const STitle = styled(STypography)`
	font-weight: 800;
	font-size: 23px;
	margin: 32px 0 12px;
`;

export const SDialogContent = styled(DialogContent)`
	padding: 0 32px 32px 32px;
`;

export const SContentLabel = styled(STypography)`
	color: ${({ theme }) => theme.mode.palette.gray};
	font-size: 15px;
	font-weight: 400;
`;

export const SSettings = styled(Grid).attrs(() => ({
	container: true,
	direction: 'column',
}))`
	gap: 12px;
`;

export const SOptionsLabel = styled(Typography)`
	font-size: 13px;
	margin-bottom: 4px;
	font-weight: 700;
	color: ${({ theme }) => theme.mode.palette.gray};
`;

export const SOptions = styled.div`
	background-color: ${({ theme }) => theme.mode.background.secondary};
	padding: 16px;
	border-radius: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
`;

interface IColorOptionProps {
	color: ColorName;
}

export const SColorOption = styled.div<IColorOptionProps>`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: ${({ color }) => accentColors[color]};
	cursor: pointer;
`;

interface IBackgroundOptionProps {
	mode: ModeName;
	onClick: () => void;
}

export const SBackgroundOption = styled.div<IBackgroundOptionProps>`
	height: 62px;
	border: 2px solid ${({ mode }) => modes[mode].divider};
	cursor: pointer;
	padding: 0 20px;
	border-radius: 4px;
	background-color: ${({ mode }) => modes[mode].background.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;

	.MuiTypography-root {
		color: ${({ mode }) => modes[mode].typography};
	}

	&.active {
		border-color: ${({ theme }) => theme.accentColor};
	}
`;
