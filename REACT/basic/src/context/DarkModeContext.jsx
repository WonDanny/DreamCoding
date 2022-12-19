import {useState, createContext} from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return (
        <DarkModeContext.Provider
            value={{ darkMode, toggleDarkMode }}
        >
            {children}
        </DarkModeContext.Provider>
    );
}