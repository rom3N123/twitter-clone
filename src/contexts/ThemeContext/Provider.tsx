import React from "react";
import createTheme from "@mui/material/styles/createTheme";
import { ColorName, IMode, ITheme, ModeName } from "_types/styled";
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
import { blackColors, whiteColors } from "@styles/blackAndWhiteColors";
import palette from "@styles/palette";

const ThemeProvider: React.FC = ({ children }): React.ReactElement => {
    const { mode, color } = useAppSelector(({ theme }) => theme);
    const dispatch = useDispatch();

    const colorValue: string = accentColors[color];
    const modeValue: IMode = modes[mode];

    const isDarkTheme: boolean = mode !== "light";

    const currentStyledTheme: ITheme = {
        accentColor: colorValue,
        mode: modeValue,
        colors: palette,
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
            MuiSkeleton: {
                defaultProps: {
                    animation: "wave",
                },
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkTheme
                            ? alpha("#fff", 0.2)
                            : alpha("#000", 0.15),
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        color: modeValue.typography.secondary,

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
                            borderColor: `${palette.warning} !important`,
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
                        border: `1px solid ${modeValue.typography.secondary} !important`,
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
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        color: modeValue.typography.primary,
                    },
                },
            },
            MuiDialogActions: {
                styleOverrides: {
                    root: {
                        padding: "16px 24px 20px",
                    },
                },
            },
            MuiIconButton: {
                defaultProps: {
                    color: "secondary",
                    size: "small",
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
            MuiSelect: {
                defaultProps: {
                    fullWidth: true,
                },
                styleOverrides: {
                    icon: {
                        color: modeValue.typography.primary,
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

                        "&.MuiButton-outlined": {
                            color: modeValue.typography.primary,
                            borderColor: isDarkTheme
                                ? alpha(whiteColors.background, 0.2)
                                : alpha(blackColors.background, 0.2),

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
                main: palette.warning,
            },
            background: {
                default: modeValue.background.primary,
                paper: modeValue.background.primary,
            },
            success: {
                main: palette.success,
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
        isDarkTheme,
        changeThemeColor,
        changeThemeMode,
    };

    const storageMode = localStorage.getItem("mode");

    const storageColor = localStorage.getItem("color");

    React.useEffect(() => {
        if (!storageMode || storageMode !== mode) {
            localStorage.setItem("mode", mode);
        }
    }, [mode]);

    React.useEffect(() => {
        if (!storageColor || storageColor !== color) {
            localStorage.setItem("color", color);
        }
    }, [color]);

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
