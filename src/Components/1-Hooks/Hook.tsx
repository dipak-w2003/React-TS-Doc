import React from "react";
// ? code Wrapping
import CodeWrapping from "../../utils/1-code-wrapper/CodeWrapping";
// ? code - 1
import Counter from "./1-useState/Counter";
import { CounterCode } from "./1-useState/counter";
// ? code - 2
import FetchData from "./2-useEffect/FetchData";
import { IFetchCode } from "./2-useEffect/fetchData";
const Hook: React.FC = () => {
  return (
    <main className="bg-black *:text-white after-nav ">
      <CodeWrapping code={CounterCode} tsxUI={<Counter />} />
      <CodeWrapping code={IFetchCode} tsxUI={<FetchData />} />
    </main>
  );
};

export default Hook;
