// ? STEP 2: Create : Context State Management
import { ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";
type ThemeType = "light" | "dark";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <main className="h-full">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </main>
  );
};
