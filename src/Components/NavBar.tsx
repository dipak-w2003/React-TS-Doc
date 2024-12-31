import { Link, NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { navHeight } from "../utils/3-constants/constant0";

// ? Provides current location of url
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const { pathname } = useLocation();

  if (pathname)
    return (
      <nav
        style={{ height: navHeight }}
        className={`bg-slate-600  w-full selection:bg-transparent flex items-center justify-center gap-10 static z-1`}
      >
        <Link to="/">
          <header className="text-3xl  not-active   gap-2 flex justify-center items-center   cursor-pointer font-extrabold">
            <FaReact
              className={`${pathname == "/" && "animate-spin"} text-cyan-500`}
            />{" "}
            +
            <SiTypescript
              className={`${pathname == "/" && "animate-pulse"} text-cyan-500`}
            />
          </header>
        </Link>

        <ul className="flex gap-4 font-semibold">
          <NavLink to="/hooks">
            <li className="hover:text-white">Hooks</li>
          </NavLink>
          <NavLink to="/state-management">
            <li className="hover:text-white">RRTK-Redux</li>
          </NavLink>
          <NavLink to="/reference">
            <li className="hover:text-white">Reference</li>
          </NavLink>

          <NavLink to="/undefined">
            <li className="hover:text-white">Undefined</li>
          </NavLink>
        </ul>
      </nav>
    );
};

export default NavBar;
