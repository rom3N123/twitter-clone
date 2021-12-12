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
    typography: {
        primary: string;
    };
    background: {
        primary: string;
        secondary: string;
    };
    components: {
        button: {
            actions: {
                hover: string;
                active: string;
            };
        };
        dialog: {
            backdrop: string;
        };
    };
    shadows: {
        primary: string;
    };
    svg: { primary: string };
    divider: string;
    palette: IColorPalette;
}

export interface IModes {
    light: IMode;
    dim: IMode;
    dark: IMode;
}

export type ModeName = keyof IModes;
