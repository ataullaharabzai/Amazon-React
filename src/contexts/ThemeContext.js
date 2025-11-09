import { useContext, createContext } from "react";

const ThemeContext = createContext({
    defaultTeme: 'light',
    lightMode: () => { },
    darkMode: () => { }
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
    return useContext(ThemeContext)
}