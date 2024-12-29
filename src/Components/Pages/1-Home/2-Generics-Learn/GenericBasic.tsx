import React from "react";
import Box from "./Box";
const AppGeneric: React.FC = () => {
  return (
    <main className="*:text-white">
      <h2 className="text-3xl">Generics & Props</h2>
      <section className="h-full w-full mt-4 bg-cyan-900 rounded-md">
        <Box
          username="@dipak2003w"
          useremail="email@gmail.com"
          password="password"
          phone={9800000}
        />
      </section>
    </main>
  );
};
export default AppGeneric;
