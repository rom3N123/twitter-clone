export interface ITheme {
	accentColor: string;
	mode: IMode;
}

export interface IColors {
	blue: string;
	yellow: string;
	pink: string;
	purple: string;
	orange: string;
	green: string;
}

export type ColorName = keyof IColors;

interface IColorPalette {
	gray: string;
	danger: string;
}
export interface IMode {
	background: {
		primary: string;
		secondary: string;
	};
	actions: {
		hover: string;
		active: string;
	};
	svgColor: string;
	typography: string;
	popover: {
		shadow: string;
	};
	backdrop: string;
	divider: string;
	palette: IColorPalette;
}

export interface IModes {
	light: IMode;
	dim: IMode;
	dark: IMode;
}

export type ModeName = keyof IModes;
