import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Hook from "./Components/1-Hooks/Hook";
import HomePage from "./Components/Pages/1-Home/HomePage";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hooks" element={<Hook />} />
        <Route
          path="/state-management"
          element={<div>State Management Page</div>}
        />
        <Route path="/reference" element={<div>Reference Page</div>} />
        <Route path="/undefined" element={<div>Undefined Page</div>} />
        <Route
          path="*"
          element={
            <main className="after-nav flex justify-center items-center bg-black text-white">
              <h2 className="text-4xl">Page Not Found</h2>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
