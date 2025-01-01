interface ICodes {
    name: string,
    code: string
}



const code1: ICodes = {
    name: "redux.ts",
    code: `import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
// ? Create Store
export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

// TypeScript types for Redux Toolkit setup
// \`\RootState\`\ represents the entire state of the Redux store.
// It dynamically infers the type of the state structure from the store itself.
// This type is useful when accessing state using \`useSelector\`\ or similar functions.
export type RootState = ReturnType<typeof store.getState>;

// \`\AppDispatch\`\ represents the dispatch function from the Redux store.
// It dynamically infers the type of all actions that can be dispatched.
// This type ensures type safety when dispatching actions, especially for actions with payloads.
export type AppDispatch = typeof store.dispatch;
`
}


const code2: ICodes = {
    name: "StateMgtMain.tsx",
    code: `import { Provider } from "react-redux";
import { store } from "./1-RTK/redux";
import CounterApp from "./1-RTK/CounterApp2";
const StateManagementMain = () => {
  return (
    // ? You can alseo wrap 'Main.tsx'
    <Provider store={store}>
      <div className="after-nav bg-slate-900 *:h-[100vh]">
        <CounterApp />
      </div>
    </Provider>
  );
};

export default StateManagementMain;
`
}

const code3: ICodes = {
    name: "counter.ts",
    code: `
    import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
    count: number;
}
const initialState: StateType = { count: 0 };

// ? counterSlice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        INCREMENT: (state) => {
            state.count += 1;
        },
        DECREMENT: (state) => {
            state.count -= 1;
        },
        INCREMENTBY: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        DECREMENTBY: (state, action: PayloadAction<number>) => {
            state.count -= action.payload;
        },
    },
});
export const { DECREMENT, INCREMENT, INCREMENTBY, DECREMENTBY } = counterSlice.actions;


export default counterSlice.reducer
    `
}


const code4: ICodes = {
    name: "App.tsx",
    code: `import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT, INCREMENTBY, DECREMENTBY } from "./counter";
import { RootState } from "./redux";

const CounterApp = () => {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <main>
      <h2 className="text-3xl">Redux Counter</h2>
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
`
}




export const rtKCodes: ICodes[] = [code1, code2, code3, code4]