
type ICodes = {
  name: string,
  code: string
}


const code1: ICodes = {
  name: "ThemeContext.tsx",
  code: `// ? STEP 1: Create Context
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


`
}

const code2: ICodes = {
  name: "ThemeProvider.tsx",
  code: `// ? STEP 2: Create Context State Management -> toggler
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

`
}


const code3: ICodes = {
  name: "ThemeApp.tsx",
  code: `
    // ? STEP 3: Wrap children by ThemeProvider
    import { ThemeProvider } from "./ThemeProvider";
import Box from "./Box";
const ThemeApp = () => {
  return (
    <main className="h-full">
      <ThemeProvider>
        <Box />
      </ThemeProvider>
    </main>
  );
};

export default ThemeApp;

`
}

const code4: ICodes = {
  name: "Box.tsx",
  code: ` // ? STEP 4: Access the ThemeContext States using 'useContext'

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Box = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
   // ? backTicks error ⬇️ used '\`\
    <div
      className={\`\${theme} h-full rounded-md
      flex justify-center items - center\`}>
      <main className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="bg-cyan-900 p-5 w-[10vw] text-2xl rounded-md"
        >
          {theme}
        </button>
        <h2 className="text-3xl">Hello World 🌏</h2>
      </main>
    </div>
  );
};

export default Box;

// ? Additional CSS Used:
// .light{bg-white & color-black}
// .black{reverseOf.light}
`
}

const IThemeType: ICodes[] = [code1, code2, code3, code4]

export { IThemeType }