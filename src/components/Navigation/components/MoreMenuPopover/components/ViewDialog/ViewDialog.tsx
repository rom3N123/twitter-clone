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
} from "./ViewDialog.styled";
import { Typography } from "@mui/material";
import modes from "@styles/modes";
import accentColors from "@styles/accentColors";
import { IDialogCommonProps } from "@interfaces/components";
import { ColorName, ModeName } from "@interfaces/styled";
import useTheme from "@hooks/useTheme";

interface IViewDialogProps extends IDialogCommonProps {}

interface IColorOption {
    color: ColorName;
    onClick: () => void;
}

interface IBackgroundOption {
    mode: ModeName;
    onClick: () => void;
}

const ViewDialog: React.FC<IViewDialogProps> = ({
    open,
    onClose,
}): React.ReactElement => {
    const { changeThemeMode, changeThemeColor } = useTheme();

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
                                <SColorOption color={color} onClick={onClick} />
                            ))}
                        </SOptions>
                    </div>
                    <div>
                        <SOptionsLabel>Background</SOptionsLabel>
                        <SOptions>
                            {backgroundOptions.map(({ mode, onClick }) => (
                                <SBackgroundOption
                                    mode={mode}
                                    onClick={onClick}
                                >
                                    <Typography>
                                        {mode[0].toUpperCase() +
                                            mode.substring(1)}
                                    </Typography>
                                </SBackgroundOption>
                            ))}
                        </SOptions>
                    </div>
                </SSettings>
            </SDialogContent>
        </Dialog>
    );
};

export default ViewDialog;
