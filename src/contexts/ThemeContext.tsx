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
	const [accentColor, setAccentColor] = React.useState<ColorName>('purple');

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
		components: {
			MuiDivider: {
				styleOverrides: {
					root: {
						backgroundColor: modeValue.divider,
					},
				},
			},
			MuiPopover: {
				styleOverrides: {
					paper: {
						boxShadow: modeValue.popover.shadow,
						padding: '12px 0',
						maxWidth: 360,
						minWidth: 260,
						borderRadius: 16,
					},
				},
			},
			MuiListItemButton: {
				styleOverrides: {
					root: {
						'&:hover': {
							backgroundColor: modeValue.buttonHover,
						},
					},
				},
			},
			MuiButtonBase: {
				styleOverrides: {
					root: {
						transition: 'background-color 0.2s ease',
						'&:hover': {
							backgroundColor: modeValue.buttonHover,
						},
					},
				},
			},
			MuiButton: {
				defaultProps: {
					color: 'secondary',
				},
				styleOverrides: {
					root: {
						borderRadius: '9999px',
						textTransform: 'none',
						fontWeight: 700,
					},
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						color: modeValue.svgColor,
					},
				},
			},
			MuiTouchRipple: {
				styleOverrides: {
					child: {
						backgroundColor: 'red',
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						color: modeValue.typography,
					},
				},
			},
		},
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
