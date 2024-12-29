import Box from "./Box";
const App = () => {
  const handleClick = (name: string) => {
    alert("Hello," + " " + name);
  };
  return (
    <main className=" w-full text-white">
      <h1 className="text-3xl ">Props Handling with types</h1>
      <br />
      <Box name="root" password="root@123" click={handleClick} />
    </main>
  );
};

export default App;
