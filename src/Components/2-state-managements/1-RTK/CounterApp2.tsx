import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT, INCREMENTBY, DECREMENTBY } from "./counter";
import { RootState } from "./redux";

const CounterApp = () => {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <main>
      <h2 className="text-3xl text-white">Redux Counter</h2>
      <div className="bg-gray-900 rounded-md flex flex-col p-2 mt-4">
        <h2 className="p-2">Count: {count}</h2>
        <div className="btns-1 *:bg-cyan-900 *:w-[5vw] *:p-1 *:mx-1 *:rounded-md">
          <button onClick={() => dispatch(INCREMENT())}>+</button>
          <button onClick={() => dispatch(DECREMENT())}>-</button>
        </div>
        <div className="btns-1 *:bg-cyan-900 *:w-[5vw] mt-2 flex *:p-1 *:mx-1 *:rounded-md">
          <input
            placeholder="number"
            type="number"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
          />
          <button onClick={() => dispatch(INCREMENTBY(val))}>+ By</button>
          <button onClick={() => dispatch(DECREMENTBY(val))}>- By</button>
        </div>
      </div>
    </main>
  );
};

export default CounterApp;
