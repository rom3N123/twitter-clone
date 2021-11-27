import React from 'react';
import { ThemeProvider } from 'styled-components';
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
	const [mode, setMode] = React.useState<ModeName>('light');
	const [accentColor, setAccentColor] = React.useState<ColorName>('blue');

	const changeAccentColor = (colorName: ColorName) => {
		setAccentColor(colorName);
	};

	const changeMode = (modeName: ModeName) => {
		setMode(modeName);
	};

	const currentTheme: ITheme = {
		accentColor: accentColors[accentColor],
		mode: modes[mode],
	};

	const themeContextValue: IThemeContextValue = {
		changeAccentColor,
		changeMode,
	};

	return (
		<Theme.Provider value={themeContextValue}>
			<ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
		</Theme.Provider>
	);
};

export default ThemeContext;
