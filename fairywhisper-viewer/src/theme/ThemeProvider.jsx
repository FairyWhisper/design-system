import React, { createContext, useState, useEffect, useContext } from 'react';
import './theme.css'; // optional: for theme-specific overrides

/* This module intentionally exports the provider and its related hook. */
/* eslint-disable react-refresh/only-export-components */

// 1. Create the context
const ThemeContext = createContext();



// 2. Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // default for FairyWhisper

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 3. Apply theme class to <html> or <body>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);

}

export default ThemeProvider;
