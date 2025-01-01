import React from "react";
import { ICodesBash } from "./ts-codes/getStartedBashCmd";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { codepenEmbed } from "react-syntax-highlighter/dist/esm/styles/hljs";
type IBashCmd = {
  id: string;
  title: string;
  optionTitle?: string | boolean;
  cmd?: string;
};

const GetStarted: React.FC = ({}): JSX.Element => {
  const folderStructure: string = `// Folder Structure
src/
├── components/
│   ├── Header.tsx
│   ├── Button.tsx
├── App.tsx
├── index.tsx`;

  // ? returns JSX.Element
  const TerminalBash: React.FC<IBashCmd> = ({
    title,
    cmd,
    id,
    optionTitle,
  }) => {
    return (
      <div className="flex flex-col gap-2">
        {typeof optionTitle === "string" && (
          <span className="h-[30%] text-white">{optionTitle}</span>
        )}
        <section className="h-[100px] bg-[#2F2F2F] w-[50vw] rounded-sm *:p-1 *:overflow-hidden flex flex-col justify-between">
          <span className="h-[30%] text-[#767676]">
            {id}.{title}
          </span>
          <span className="h-[70%] bg-black text-white text-sm tracking-tighter ">
            {cmd}
          </span>
        </section>
      </div>
    );
  };

  return (
    <main className="bg-[#212121]  max-h-[100vh] h-[100vh] flex  justify-around">
      <section className="firstOption   text-white w-[50%] mt-[2vh] justify-center flex flex-col gap-6">
        <h1 className="text-lg">
          1. Terminal Commands to Set Up React with TypeScript
        </h1>
        {ICodesBash.map((e) => {
          return (
            <TerminalBash
              title={e.title}
              cmd={e.cmd}
              optionTitle={e.optionTitle}
              id={e.id}
            />
          );
        })}
        <SyntaxHighlighter language="text" showLineNumbers style={codepenEmbed}>
          {folderStructure}
        </SyntaxHighlighter>
      </section>

      {/* second section */}
      <section className="s-2 h-full w-[40%]   flex items-center justify-center">
        <button
          className="bg-black text-white p-4 rounded-md text-5xl h-[50%] w-[80%] hover:text-black hover:bg-gray-100  shadow-lg 
        hover:rounded-lg hover:shadow-slate-50 hover:scale-105 transition-all animate-pulse "
        >
          Get Started
        </button>
      </section>
    </main>
  );
};

export default GetStarted;

// ? #000000 - terminal
// ? #282c34
// ? #2d2d2d -
// ? #d6d6d6 - borders
// ? #FFFFFF -> Text 1
// ? #b0b0b0 -> Text 2
