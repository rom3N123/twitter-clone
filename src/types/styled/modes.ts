interface IMode {
    typography: {
        primary: string;
        secondary: string;
    };
    background: {
        primary: string;
        secondary: string;
        profile: string;
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
}

export interface IModes {
    light: IMode;
    dim: IMode;
    dark: IMode;
}

export type ModeName = keyof IModes;

export default IMode;
