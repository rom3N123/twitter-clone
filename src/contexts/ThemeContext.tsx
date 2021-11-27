import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ModeName, ColorName, ITheme } from '../interfaces/styled';
import accentColors from '../styles/accentColors';
import modes from '../styles/modes';

interface IThemeContextProps {
	children: React.ReactNode;
}

interface IThemeContextValue {
	changeAccentColor: (colorName: ColorName) => void;
	changeMode: (modeName: ModeName) => void;
}

const themeContextInitialValue: IThemeContextValue = {
	changeAccentColor: () => {},
	changeMode: () => {},
};

export const Theme = React.createContext<IThemeContextValue>(themeContextInitialValue);

const ThemeContext: React.FC<IThemeContextProps> = ({ children }): React.ReactElement => {
	const [mode, setMode] = React.useState<ModeName>('dim');
	const [accentColor, setAccentColor] = React.useState<ColorName>('orange');

	const accentColorValue = accentColors[accentColor];
	const modeValue = modes[mode];

	const changeAccentColor = (colorName: ColorName): void => {
		setAccentColor(colorName);
	};

	const changeMode = (modeName: ModeName): void => {
		setMode(modeName);
	};

	const currentStyledTheme: ITheme = {
		accentColor: accentColorValue,
		mode: modeValue,
	};

	const mTheme = createTheme({
		palette: {
			secondary: {
				main: accentColorValue,
			},
			background: {
				default: modeValue.backgroundColor,
				paper: modeValue.backgroundColor,
			},
		},
	});

	const themeContextValue: IThemeContextValue = {
		changeAccentColor,
		changeMode,
	};

	return (
		<Theme.Provider value={themeContextValue}>
			<MuiThemeProvider theme={mTheme}>
				<StyledThemeProvider theme={currentStyledTheme}>{children}</StyledThemeProvider>
			</MuiThemeProvider>
		</Theme.Provider>
	);
};

export default ThemeContext;
