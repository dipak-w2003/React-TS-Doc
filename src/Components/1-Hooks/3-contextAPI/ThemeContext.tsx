// STEP 1: Create Context
import { createContext } from "react";
type ThemeType = "light" | "dark";
type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});
