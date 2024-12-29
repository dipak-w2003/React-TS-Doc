import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { codepenEmbed } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface codeSyntax {
  code: string;
  language?: string;
  theme?: string;
}

const BasicExample: React.FC<codeSyntax> = ({
  code,
  language = "typescript",
}: codeSyntax) => {
  return (
    <main className="overflow-scroll bg-red-600  max-h-full h-[100%]  text-[12px]">
      <SyntaxHighlighter
        className="h-full"
        language={language}
        showLineNumbers
        style={codepenEmbed}
      >
        {code}
      </SyntaxHighlighter>
    </main>
  );
};

export default BasicExample;
