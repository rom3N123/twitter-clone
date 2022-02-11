import { createContext } from "react";
import { ColorName, ModeName } from "_types/styled";

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
    createContext<IThemeContextValue>(themeContextInitialValue);

export default ThemeContext;
