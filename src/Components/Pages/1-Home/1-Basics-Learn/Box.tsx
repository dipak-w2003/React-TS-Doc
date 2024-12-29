// ? define type/interface
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
