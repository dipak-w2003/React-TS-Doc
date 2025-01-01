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