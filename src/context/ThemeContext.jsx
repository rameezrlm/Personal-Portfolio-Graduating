import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'portfolio-theme' }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return localStorage.getItem(storageKey) || defaultTheme;
  });
  const [resolvedTheme, setResolvedTheme] = useState(theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    const resolved = theme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;

    setResolvedTheme(resolved);
    root.classList.add(resolved);
  }, [theme]);

  useEffect(() => {
    if (theme !== 'system') localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const resolved = mq.matches ? 'dark' : 'light';
        setResolvedTheme(resolved);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(resolved);
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
