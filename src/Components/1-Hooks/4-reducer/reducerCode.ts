type ICodes = {
    name: string,
    code: string
}

const code1: ICodes = {
    name: "counterReducer.ts",
    code: `
export type StateType = {
    count: number;
};
export const initialState: StateType = {
    count: 0,
};
export type ActionType =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "INCREMENTBY"; payload: number }
    | { type: "DECREMENTBY"; payload: number };

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "INCREMENTBY":
            return { count: state.count + action.payload };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "DECREMENTBY":
            return { count: state.count - action.payload };
        default:
            return state;
    }
};
`
}


const code2: ICodes = {
    name: "CounterApp.tsx",
    code: `
import { useReducer, useState } from "react";
import { reducer, initialState } from "./counterReducer";

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [val, setVal] = useState<number>(0);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const incrementby = (): void => {
    dispatch({ type: "INCREMENTBY", payload: val });
    setVal(0);
  };
  const decrementby = (): void => {
    dispatch({ type: "DECREMENTBY", payload: val });
    setVal(0);
  };

  return (
    <div className="bg-gray-400 flex flex-col p-2">
      <h2 className="p-2">Count: {state.count}</h2>
      <div className="btns-1 *:bg-cyan-900 *:w-[5vw] *:p-1 *:mx-1 *:rounded-md">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div className="btns-1 *:bg-cyan-900 *:w-[5vw] mt-2 flex *:p-1 *:mx-1 *:rounded-md">
        <input
          placeholder="number"
          type="number"
          value={val}
          onChange={(e) => setVal(+e.target.value)}
        />
        <button onClick={incrementby}>+ By</button>
        <button onClick={decrementby}>- BY</button>
      </div>
    </div>
  );
};

export default CounterApp;
`
}






export const ICodeReducer: ICodes[] = [code1, code2]