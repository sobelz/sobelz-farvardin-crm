import { createContext, use, useEffect, useEffectEvent, useState } from "react";

type Theme = "dark" | "light" | "system";
export const TOGGLE_THEME_KEYBOARD_SHORTCUT = "d";
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  getActualTheme: () => Exclude<Theme, "system">;
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => undefined,
  toggleTheme: () => undefined,
  getActualTheme: () => "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

ThemeProviderContext.displayName = "ThemeProviderContext";
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  const getActualTheme = (): Exclude<Theme, "system"> => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      return systemTheme;
    }
    return theme;
  };

  const handleChangeTheme = useEffectEvent(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(getActualTheme());
  });

  useEffect(() => {
    handleChangeTheme();
  }, [theme]);

  const manualSetTheme = (themeNmae: Theme) => {
    localStorage.setItem(storageKey, themeNmae);
    setTheme(themeNmae);
  };
  const toggleTheme = () => {
    const prevTheme = getActualTheme();
    setTheme(prevTheme === "dark" ? "light" : "dark");
  };

  // eslint-disable-next-line @eslint-react/no-unstable-context-value
  const value = {
    theme,
    setTheme: manualSetTheme,
    toggleTheme,
    getActualTheme,
  };

  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === TOGGLE_THEME_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      toggleTheme();
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
}

export const useTheme = () => {
  const context = use(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
