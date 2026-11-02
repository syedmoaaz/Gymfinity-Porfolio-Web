import { createContext, useContext, useEffect, useState } from "react";

const THEME_KEY = "gymfinity-portfolio-theme-v2";
const ThemeContext = createContext(null);

function applyThemeClass(dark) {
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const saved = localStorage.getItem(THEME_KEY);
    // Default dark for first-time visitors; respect explicit light choice
    if (saved === "light") return false;
    if (saved === "dark") return true;
    return true;
  });

  useEffect(() => {
    applyThemeClass(dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark]);

  const toggleDark = () => setDark((value) => !value);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
