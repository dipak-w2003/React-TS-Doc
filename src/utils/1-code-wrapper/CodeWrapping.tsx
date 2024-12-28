import React, { useState } from "react";
import CodeHighLight from "../../utils/1-code-wrapper/CodeHighLight";

type CodeType = { name: string; code: string };
type codeArr = {
  code: CodeType[];
  tsxUI?: React.ReactNode;
};

const CodeWrapping: React.FC<codeArr> = ({
  code,
  tsxUI = <h1>No Output</h1>,
}) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <section className="flex justify-around">
      {tsxUI}
      <div className="wrap-all bg-red-400">
        <div className="wrapper flex gap-5">
          {code.map((e, idx) => (
            <div
              className={`p-2 cursor-pointer  
              border-2 border-transparent
              ${idx === index && "border-b-gray-200"}
              `}
              style={{ color: idx === index ? "green" : "" }}
              key={e.name}
              onClick={() => setIndex(idx)}
            >
              {e.name}
            </div>
          ))}
        </div>
        <CodeHighLight code={code[index].code} language="typescript" />
      </div>
    </section>
  );
};

export default CodeWrapping;
