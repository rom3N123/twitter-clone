import modes from "./modes";

interface IColor {
    background: string;
    typography: string;
}

export const blackColors: IColor = {
    background: modes.dim.background.primary,
    typography: modes.dim.typography.primary,
};

export const whiteColors: IColor = {
    background: modes.light.background.primary,
    typography: modes.light.typography.primary,
};
