import React from 'react';
import Dialog from '@mui/material/Dialog';
import { ColorName, ModeName } from './../../interfaces/styled';
import useTheme from '../../hooks/useTheme';
import accentColors from '../../styles/accentColors';
import modes from '../../styles/modes';

import {
	STitle,
	SDialogContent,
	SContentLabel,
	SSettings,
	SOptionsLabel,
	SOptions,
	SColorOption,
	SBackgroundOption,
} from './ViewDialog.styled';
import { Typography } from '@mui/material';

interface IViewDialogProps {
	open: boolean;
	onClose: () => void;
}

interface IColorOption {
	color: ColorName;
	onClick: () => void;
}

interface IBackgroundOption {
	mode: ModeName;
	onClick: () => void;
}

const ViewDialog: React.FC<IViewDialogProps> = ({ open, onClose }): React.ReactElement => {
	const { changeAccentColor, changeMode } = useTheme();

	const colorOptions: IColorOption[] = Object.keys(accentColors).map((color) => {
		const colorName: ColorName = color as ColorName;
		return {
			color: colorName,
			onClick: () => {
				changeAccentColor(colorName);
			},
		};
	});

	const backgroundOptions: IBackgroundOption[] = Object.keys(modes).map((modeName) => {
		const mode: ModeName = modeName as ModeName;

		return {
			mode,
			onClick: () => changeMode(mode),
		};
	});

	return (
		<Dialog open={open} onClose={onClose}>
			<STitle>Customize your view</STitle>
			<SDialogContent>
				<SContentLabel>
					Manage your font size, color, and background. These settings affect all the Twitter
					accounts on this browser.
				</SContentLabel>

				<SSettings>
					<div>
						<SOptionsLabel>Color</SOptionsLabel>
						<SOptions>
							{colorOptions.map(({ color, onClick }) => (
								<SColorOption color={color} onClick={onClick} />
							))}
						</SOptions>
					</div>
					<div>
						<SOptionsLabel>Background</SOptionsLabel>
						<SOptions>
							{backgroundOptions.map(({ mode, onClick }) => (
								<SBackgroundOption mode={mode} onClick={onClick}>
									<Typography>{mode[0].toUpperCase() + mode.substring(1)}</Typography>
								</SBackgroundOption>
							))}
						</SOptions>
					</div>
				</SSettings>
			</SDialogContent>
		</Dialog>
	);
};

export default ViewDialog;
