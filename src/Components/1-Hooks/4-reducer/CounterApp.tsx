// CounterApp.tsx
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
    <main>
      <h2 className="text-3xl">useReducer</h2>
      <div className="bg-gray-900 rounded-md flex flex-col p-2 mt-4">
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
    </main>
  );
};

export default CounterApp;
