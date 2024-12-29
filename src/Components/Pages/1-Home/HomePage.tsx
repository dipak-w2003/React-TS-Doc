import GetStarted from "./GetStartedPage";
import LandingPage from "./LandingPage";

// ? code Wrappings
import CodeWrapping from "../../../utils/1-code-wrapper/CodeWrapping";
// ? 1 - code
import App from "./1-Basics-Learn/BasicPropPassing";
import { ICodeType } from "./1-Basics-Learn/propCodes";
// ? 2 - code
import AppGeneric from "./2-Generics-Learn/GenericBasic";
import { ICodeGeneric } from "./2-Generics-Learn/genericCodes";
const HomePage = () => {
  return (
    <main className=" min-h-[100vh] w-full *:w-full  ">
      <LandingPage />
      <GetStarted />

      {/* ? Codes */}
      <CodeWrapping code={ICodeType} tsxUI={<App />} />
      <CodeWrapping code={ICodeGeneric} tsxUI={<AppGeneric />} />
    </main>
  );
};
export default HomePage;
