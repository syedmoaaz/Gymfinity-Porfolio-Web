import { createContext, useContext, useEffect, useState } from "react";

const THEME_KEY = "gymfinity-portfolio-theme";
const ThemeContext = createContext(null);

function applyThemeClass(dark) {
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem(THEME_KEY) === "dark" ||
      document.documentElement.classList.contains("dark")
    );
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
