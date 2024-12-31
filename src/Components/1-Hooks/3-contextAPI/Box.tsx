import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Box = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme} h-[80%] rounded-md flex mt-4 justify-center items-center`}
    >
      <main className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="bg-cyan-900 p-5 w-[10vw] text-2xl rounded-md"
        >
          {theme}
        </button>
        <h2 className="text-3xl">Context API 🌏</h2>
      </main>
    </div>
  );
};

export default Box;
