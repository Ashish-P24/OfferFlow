import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme =
  | "light"
  | "dark"
  | "system";

interface ThemeContextType {
  theme: Theme;

  setTheme: (
    theme: Theme,
  ) => void;
}

const ThemeContext =
  createContext<
    ThemeContextType | undefined
  >(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] =
    useState<Theme>("system");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        "theme",
      ) as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "theme",
      theme,
    );

    const root =
      document.documentElement;

    root.classList.remove("light");
    root.classList.remove("dark");

    if (theme === "system") {

      const prefersDark =
        window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;

      root.classList.add(
        prefersDark
          ? "dark"
          : "light",
      );

    } else {

      root.classList.add(theme);

    }

  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(
      ThemeContext,
    );

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider",
    );
  }

  return context;
}