import React from "react";
const ThemeContext = React.createContext();

const ThemeProvider= ({children})=>{
    let [theme, setTheme] = React.useState('light');
    let themeSetter=(themeProp)=>{setTheme(themeProp)};
    return (
        <ThemeContext.Provider value={{theme, themeSetter}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext = () => React.useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useThemeContext };