import React from "react";
import Dialog from "@mui/material/Dialog";
import {
    STitle,
    SDialogContent,
    SContentLabel,
    SSettings,
    SOptionsLabel,
    SOptions,
    SColorOption,
    SBackgroundOption,
    SColorOptionWrapper,
    SColorOptionCheckIcon,
} from "./CustomizationDialog.styled";
import modes from "@styles/modes";
import accentColors from "@styles/accentColors";
import { IDialogCommonProps } from "@interfaces/components";
import { ColorName, ModeName } from "@interfaces/styled";
import useTheme from "@hooks/useTheme";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";

interface ICustomizationDialogProps extends IDialogCommonProps {}

interface IColorOption {
    color: ColorName;
    onClick: () => void;
}

interface IBackgroundOption {
    mode: ModeName;
    onClick: () => void;
}

const CustomizationDialog: React.FC<ICustomizationDialogProps> = ({
    open,
    onClose,
}): React.ReactElement => {
    const {
        mode: activeMode,
        color: activeColor,
        changeThemeMode,
        changeThemeColor,
    } = useTheme();

    const onChangeThemeColorHandler = (color: ColorName) => (): void => {
        changeThemeColor(color);
    };

    const onChangeThemeModeHandler = (mode: ModeName) => (): void => {
        changeThemeMode(mode);
    };

    const colorOptions: IColorOption[] = Object.keys(accentColors).map(
        (_colorName) => {
            const colorName: ColorName = _colorName as ColorName;
            return {
                color: colorName,
                onClick: onChangeThemeColorHandler(colorName),
            };
        }
    );

    const backgroundOptions: IBackgroundOption[] = Object.keys(modes).map(
        (_modeName) => {
            const modeName: ModeName = _modeName as ModeName;
            return {
                mode: modeName,
                onClick: onChangeThemeModeHandler(modeName),
            };
        }
    );

    return (
        <Dialog open={open} onClose={onClose}>
            <STitle>Customize your view</STitle>
            <SDialogContent>
                <SContentLabel>
                    Manage your font size, color, and background. These settings
                    affect all the Twitter accounts on this browser.
                </SContentLabel>

                <SSettings>
                    <div>
                        <SOptionsLabel>Color</SOptionsLabel>
                        <SOptions>
                            {colorOptions.map(({ color, onClick }) => (
                                <SColorOptionWrapper>
                                    <SColorOption
                                        color={color}
                                        onClick={onClick}
                                    />

                                    <SColorOptionCheckIcon
                                        visible={color === activeColor}
                                    />
                                </SColorOptionWrapper>
                            ))}
                        </SOptions>
                    </div>
                    <div>
                        <SOptionsLabel>Background</SOptionsLabel>
                        <SOptions>
                            {backgroundOptions.map(
                                ({ mode, onClick }): React.ReactElement => {
                                    const isModeActive: boolean =
                                        activeMode === mode;

                                    const modeTitle: string =
                                        mode[0].toUpperCase() +
                                        mode.substring(1);

                                    return (
                                        <SBackgroundOption
                                            mode={mode}
                                            onClick={onClick}
                                            active={isModeActive}
                                        >
                                            <Radio checked={isModeActive} />
                                            <Typography>{modeTitle}</Typography>
                                        </SBackgroundOption>
                                    );
                                }
                            )}
                        </SOptions>
                    </div>
                </SSettings>
            </SDialogContent>
        </Dialog>
    );
};

export default CustomizationDialog;
