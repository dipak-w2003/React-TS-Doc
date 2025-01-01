import { Provider } from "react-redux";
import { store } from "./1-RTK/redux";
import CounterApp from "./1-RTK/CounterApp2";
import { rtKCodes } from "./1-RTK/rtkCodes";
import LandingPage from "./LandingPage";
import CodeWrapping from "../../utils/1-code-wrapper/CodeWrapping";
const StateManagementMain = () => {
  return (
    // ? You can alseo wrap 'Main.tsx'
    <Provider store={store}>
      <div className="after-nav bg-slate-900 *:h-[100vh]">
        <LandingPage />

        {/* ? Codes & UI */}
        <CodeWrapping tsxUI={<CounterApp />} code={rtKCodes} />
      </div>
    </Provider>
  );
};

export default StateManagementMain;
