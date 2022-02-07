interface IColorPalette {
    warning: string;
    success: string;
}

export type ColorPaletteName = keyof IColorPalette;

export default IColorPalette;
