import React from "react";
import CodeWrapping from "../../utils/1-code-wrapper/CodeWrapping";
import { codeStr } from "../4-ts/TS_files";
import PropPassing from "../0-basics/Props_0";
const Hook: React.FC = () => {
  return (
    <main className="bg-black text-white">
      <CodeWrapping code={codeStr} tsxUI={<PropPassing />} />
    </main>
  );
};

export default Hook;
