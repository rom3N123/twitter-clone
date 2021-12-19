import React from "react";
import { IThemeContextValue } from "@contexts/ThemeContext/Context";
import ThemeContext from "@contexts/ThemeContext/Context";

/**
 * Хук для управления темой приложения
 */
const useTheme = (): IThemeContextValue => {
    return React.useContext(ThemeContext);
};

export default useTheme;
