import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Specify the type of state

  return (
    <div>
      <h1 className="text-2xl">1. UseState Hook</h1>
      <div className="wrap bg-cyan-900 p-6 mt-10 rounded-md">
        <h1 className="text-2xl">Count: {count}</h1>
        <button
          className="bg-green-500 px-4 py-2 rounded-md mt-4"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-md mx-2"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
