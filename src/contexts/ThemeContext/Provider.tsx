import React from "react";
import createTheme from "@mui/material/styles/createTheme";
import { ColorName, IMode, ITheme, ModeName } from "@interfaces/styled";
import accentColors from "@styles/accentColors";
import modes from "@styles/modes";
import { alpha } from "@mui/system";
import { useAppSelector } from "@redux/hooks";
import ThemeContext, { IThemeContextValue } from "./Context";
import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import {
    changeThemeColorAction,
    changeThemeModeAction,
} from "@redux/ducks/theme/actions";

const ThemeProvider: React.FC = ({ children }): React.ReactElement => {
    const { mode, color } = useAppSelector(({ theme }) => theme);
    const dispatch = useDispatch();

    const colorValue: string = accentColors[color];
    const modeValue: IMode = modes[mode];

    const isDarkTheme: boolean = mode !== "light";

    const currentStyledTheme: ITheme = {
        accentColor: colorValue,
        mode: modeValue,
    };

    const muiTheme = createTheme({
        components: {
            MuiRadio: {
                defaultProps: {
                    size: "small",
                    color: "warning",
                },
                styleOverrides: {
                    root: {
                        ".MuiSvgIcon-root": {
                            color: colorValue,
                        },
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        color: modeValue.palette.gray,

                        "&.Mui-focused": {
                            color: colorValue,
                        },

                        "&.MuiFormLabel-filled, &.Mui-focused": {
                            backgroundColor: "transparent",
                            transform: "translate(14px, 1px) scale(0.8)",
                        },
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        borderRadius: "4px",
                    },
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: `1px solid ${colorValue} !important`,
                        },
                        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
                            borderColor: `${modeValue.palette.danger} !important`,
                        },
                        color: modeValue.typography.primary,
                        legend: {
                            display: "none",
                            top: "0 !important",
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        border: `1px solid ${modeValue.palette.gray} !important`,
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    outlined: {
                        borderColor: modeValue.divider,
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        fontWeight: 700,
                        fontSize: "24px",
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    root: {
                        ".MuiBackdrop-root ": {
                            backgroundColor:
                                modeValue.components.dialog.backdrop,
                        },
                    },
                    paper: {
                        borderRadius: 16,
                        boxShadow: "none",
                        "@media (min-width: 768px)": {
                            maxWidth: "600px",
                            width: "100%",
                            borderRadius: "16px",
                        },
                        "@media (max-width: 768px)": {
                            padding: "0 10px",
                        },
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        padding: "12px 32px 36px 12px",
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
                        boxShadow: modeValue.shadows.primary,
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
                            backgroundColor:
                                modeValue.components.button.actions.hover,
                        },
                        "&:active": {
                            backgroundColor:
                                modeValue.components.button.actions.active,
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
                            backgroundColor:
                                modeValue.components.button.actions.hover,
                        },
                        "&:active": {
                            backgroundColor:
                                modeValue.components.button.actions.active,
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
                            color: modeValue.typography.primary,
                            borderColor: isDarkTheme
                                ? alpha(modes.light.background.primary, 0.2)
                                : alpha(modes.dim.background.primary, 0.2),

                            "&:active": {
                                backgroundColor: alpha(
                                    modeValue.background.secondary,
                                    0.1
                                ),
                            },
                            "&:hover": {
                                backgroundColor: alpha("#000", 0.1),
                            },
                        },
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: modeValue.svg.primary,
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
                        color: modeValue.typography.primary,
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
            success: {
                main: modeValue.palette.success,
            },
        },
    });

    const changeThemeColor = (color: ColorName): void => {
        dispatch(changeThemeColorAction(color));
    };

    const changeThemeMode = (mode: ModeName): void => {
        dispatch(changeThemeModeAction(mode));
    };

    const themeContextValue: IThemeContextValue = {
        mode,
        color,
        changeThemeColor,
        changeThemeMode,
    };

    React.useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <MuiThemeProvider theme={muiTheme}>
                <StyledThemeProvider theme={currentStyledTheme}>
                    {children}
                </StyledThemeProvider>
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
