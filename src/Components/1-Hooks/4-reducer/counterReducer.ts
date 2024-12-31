// counterReducer.ts

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
