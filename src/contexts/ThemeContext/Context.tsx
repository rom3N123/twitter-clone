import { ColorName, ModeName } from "@interfaces/styled";
import React from "react";

export interface IThemeContextValue {
    mode: ModeName;
    color: ColorName;
    isDarkTheme: boolean;
    changeThemeColor: (color: ColorName) => void;
    changeThemeMode: (mode: ModeName) => void;
}

const themeContextInitialValue: IThemeContextValue = {
    mode: "light",
    color: "blue",
    isDarkTheme: false,
    changeThemeColor: () => {},
    changeThemeMode: () => {},
};

const ThemeContext: React.Context<IThemeContextValue> =
    React.createContext<IThemeContextValue>(themeContextInitialValue);

export default ThemeContext;
