import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Logo from "../assets/logo.png";
const Sidebar = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const { pathname } = useLocation();
  const activeLink = pathname.split("/")[1];

  return (
    <div className="w-64 h-screen bg-[#0A2727] text-[#F6931B] p-4">
      <div className="mb-6">
        <img src={Logo} alt="Logo" className="w-32 mx-auto" />
      </div>
      <hr />
      <nav className="p-4 space-y-2">
        <NavLink
          to={user?.role === "admin" ? "/admin" : "/"}
          className={`flex items-center gap-2 py-2 px-4   rounded ${
            activeLink === "admin"
              ? "bg-[#103B3B] text-white "
              : "hover:bg-[#103B3B]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Dashboard
        </NavLink>
        {user?.role === "admin" && (
          <NavLink
            to="#"
            className="flex gap-2 py-2 px-4 hover:bg-[#103B3B] rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            Admin Reports
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
