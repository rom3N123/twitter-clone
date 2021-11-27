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

export interface IMode {
	backgroundColor: string;
	svgColor: string;
	typography: string;
}

export interface IModes {
	light: IMode;
	dim: IMode;
	dark: IMode;
}

export type ModeName = keyof IModes;
