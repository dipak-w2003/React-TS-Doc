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
    <section className="flex justify-around relative h-[100vh] items-center  overflow-hidden bg-[#2F2F2F]">
      <div className="UI w-[50%]  h-[50vh] bg-black p-6 rounded">{tsxUI}</div>

      <div className="wrap-all bg-gray-900 h-[80%] flex flex-col  w-[40%] rounded-md ">
        <div className="wrapper flex gap-5  ">
          {code.map((e, idx) => (
            <div
              className={`py-2 px-1 cursor-pointer  text-[12px]
              border-2 border-transparent text-white font-bold
              ${idx === index && "border-b-gray-200"}
              `}
              style={{ color: idx === index ? "white" : "gray" }}
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
