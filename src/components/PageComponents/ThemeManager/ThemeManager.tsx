import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import createTheme from "@mui/material/styles/createTheme";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import { ITheme } from "@interfaces/styled";
import accentColors from "@styles/accentColors";
import modes from "@styles/modes";
import { alpha } from "@mui/system";
import { useAppSelector } from "@redux/hooks";

interface IThemeManagerProps {
    children: React.ReactNode;
}

const ThemeManager: React.FC<IThemeManagerProps> = ({
    children,
}): React.ReactElement => {
    const { mode, color } = useAppSelector(({ theme }) => theme);
    const colorValue: string = accentColors[color];
    const modeValue = modes[mode];
    const isDarkTheme = mode === "dim" || mode === "dark";

    const currentStyledTheme: ITheme = {
        accentColor: colorValue,
        mode: modeValue,
    };

    const muiTheme = createTheme({
        components: {
            MuiDialog: {
                styleOverrides: {
                    root: {
                        ".MuiBackdrop-root ": {
                            backgroundColor: modeValue.backdrop,
                        },
                    },
                    paper: {
                        borderRadius: 16,
                    },
                },
            },
            MuiIconButton: {
                defaultProps: {
                    color: "secondary",
                },
                styleOverrides: {
                    root: {
                        ".MuiSvgIcon-root": {
                            color: colorValue,
                        },
                        "&.MuiIconButton-colorSecondary": {
                            "&:hover": {
                                backgroundColor: alpha(
                                    colorValue,
                                    !isDarkTheme ? 0.1 : 0.2
                                ),
                            },
                            "&:active": {
                                backgroundColor: alpha(
                                    colorValue,
                                    !isDarkTheme ? 0.15 : 0.25
                                ),
                            },
                        },
                    },
                },
            },
            MuiCircularProgress: {
                defaultProps: {
                    color: "secondary",
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        backgroundColor: modeValue.divider,
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        padding: 0,
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        padding: 0,
                    },
                },
            },
            MuiPopover: {
                styleOverrides: {
                    paper: {
                        boxShadow: modeValue.popover.shadow,
                        padding: "12px 0",
                        maxWidth: 360,
                        minWidth: 260,
                        borderRadius: 16,
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        "&:hover": {
                            backgroundColor: modeValue.actions.hover,
                        },
                        "&:active": {
                            backgroundColor: modeValue.actions.active,
                        },
                    },
                },
            },
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        transition: "background-color 0.2s ease",
                        "&:hover": {
                            backgroundColor: modeValue.actions.hover,
                        },
                        "&:active": {
                            backgroundColor: modeValue.actions.active,
                        },
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    color: "secondary",
                    disableRipple: true,
                    disableElevation: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: "9999px",
                        textTransform: "none",
                        fontWeight: 700,
                        color: "#fff",
                        "&.Mui-disabled": {
                            backgroundColor: alpha(colorValue, 0.5),
                            color: alpha("#fff", 0.55),
                        },
                        fontSize: 15,
                        "&.MuiButton-contained": {
                            "&.opposite": {
                                backgroundColor: isDarkTheme
                                    ? modes.light.background.primary
                                    : modes.dim.background.primary,
                                color: isDarkTheme
                                    ? modes.light.typography
                                    : modes.dim.typography,
                                "&:hover": {
                                    backgroundColor: alpha(
                                        isDarkTheme
                                            ? modes.light.background.primary
                                            : modes.dim.background.secondary,
                                        0.8
                                    ),
                                },
                                "&:active": {
                                    backgroundColor: alpha(
                                        isDarkTheme
                                            ? modes.light.background.primary
                                            : modes.dim.background.secondary,
                                        0.7
                                    ),
                                },
                            },
                        },
                        "&.MuiButton-outlined": {
                            color: modeValue.typography,
                            borderColor: isDarkTheme
                                ? alpha(modes.light.background.primary, 0.2)
                                : alpha(modes.dim.background.primary, 0.2),
                            "&:active": {
                                backgroundColor: alpha("#000", 0.1),
                            },
                            "&:hover": {
                                backgroundColor: alpha("#000", 0.05),
                            },
                        },
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
                        backgroundColor: "red",
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
                main: colorValue,
            },
            warning: {
                main: modeValue.palette.danger,
            },
            background: {
                default: modeValue.background.primary,
                paper: modeValue.background.primary,
            },
        },
    });

    return (
        <MuiThemeProvider theme={muiTheme}>
            <StyledThemeProvider theme={currentStyledTheme}>
                {children}
            </StyledThemeProvider>
        </MuiThemeProvider>
    );
};

export default ThemeManager;
