import { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useToggle(false);
  const toggleDarkTheme = () => {
    setDarkTheme();
    document.documentElement.classList.toggle("dark-theme");
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
