type ICodes = {
    name: string,
    code: string,
}



const code1: ICodes = {
    name: "App.tsx",
    code: `import Box from "./Box";
const App = () => {
  const handleClick = (name: string) => {
    alert("Hello," + " " + name);
  };
  return (
    <main className=" w-full text-white">
      <h1 className="text-2xl font-bold underline ">
        Prop Handling with types
      </h1>
      <h2 className="text-xl">Ouput: </h2>
      <br />
      <Box name="root" password="root@123" click={handleClick} />
    </main>
  );
};
export default App;
`
}


const code2: ICodes = {
    name: "Box.tsx",
    code: `// ? define type/interface
type IPROPS = {
  name: string;
  password: any;
  click?: (name: string) => void;
};
const Box = ({ name, password, click }: IPROPS) => {
  // ? destructure the props
  return (
    <main className="wrap bg-cyan-900 p-4 rounded-lg">
      <div>
        <h1>Name : {name}</h1>
        <h1>Passoword : {password}</h1>
      </div>

    // ? passing the prop as param name on function
      <button
        onClick={() => click && click(name)}
        className="mt-10 bg-white p-2 w-[10vw] text-black font-bold rounded-md
      "
      >
        click me 😃
      </button>
    </main>
  );
};
export default Box;
`
}


const ICodeType: ICodes[] = [code1, code2]
export { ICodeType }