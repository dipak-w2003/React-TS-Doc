import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
// ? Create Store
export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

// TypeScript types for Redux Toolkit setup
// `RootState` represents the entire state of the Redux store.
// It dynamically infers the type of the state structure from the store itself.
// This type is useful when accessing state using `useSelector` or similar functions.
export type RootState = ReturnType<typeof store.getState>;

// `AppDispatch` represents the dispatch function from the Redux store.
// It dynamically infers the type of all actions that can be dispatched.
// This type ensures type safety when dispatching actions, especially for actions with payloads.
export type AppDispatch = typeof store.dispatch;
