import { IModes, IMode } from "@types/styled";
import accentColors from "./accentColors";

const light: IMode = {
    background: {
        primary: "#fff",
        secondary: "rgb(247, 249, 249)",
        profile: "rgb(207, 217, 222)",
    },
    components: {
        button: {
            actions: {
                hover: "rgba(0, 0, 0, 0.05)",
                active: "rgba(0, 0, 0, 0.1)",
            },
        },
        dialog: {
            backdrop: "rgba(0, 0, 0, 0.4)",
        },
    },
    svg: {
        primary: accentColors.blue,
    },
    typography: { primary: "#0f1419", secondary: "#536471" },
    shadows: {
        primary:
            "rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px",
    },
    divider: "#eff3f4",
};

const dim: IMode = {
    background: {
        primary: "#15202b",
        secondary: "rgb(25, 39, 52)",
        profile: "rgb(61, 84, 102)",
    },
    svg: {
        primary: "#fff",
    },
    typography: { primary: "#fff", secondary: "#8899a6" },
    components: {
        button: {
            actions: {
                hover: "rgba(255, 255, 255, 0.05)",
                active: "rgba(255, 255, 255, 0.1)",
            },
        },
        dialog: {
            backdrop: "rgba(91, 112, 131, 0.4)",
        },
    },
    shadows: {
        primary:
            "rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px",
    },
    divider: "#38444d",
};

const dark: IMode = {
    background: {
        primary: "#000",
        secondary: "rgb(21, 24, 28)",
        profile: "rgb(47, 51, 54)",
    },
    components: {
        button: {
            actions: {
                hover: "rgba(255, 255, 255, 0.1)",
                active: "rgba(255, 255, 255, 0.15)",
            },
        },
        dialog: {
            backdrop: "rgba(91, 112, 131, 0.4)",
        },
    },
    svg: {
        primary: "#fff",
    },
    typography: { primary: "#d9d9d9", secondary: "#536471" },
    divider: "#2f3336",
    shadows: {
        primary:
            "rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px",
    },
};

const modes: IModes = {
    light,
    dim,
    dark,
};

export { light, dark, dim };

export default modes;
