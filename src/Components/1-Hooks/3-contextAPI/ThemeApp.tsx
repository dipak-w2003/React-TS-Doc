import { ThemeProvider } from "./ThemeProvider";
import Box from "./Box";
const ThemeApp = () => {
  return (
    <main className="h-full">
      <h2 className="text-3xl">Context API</h2>

      <ThemeProvider>
        <Box />
      </ThemeProvider>
    </main>
  );
};

export default ThemeApp;
