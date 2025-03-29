import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="bg-[#0A2727] p-4 flex justify-between items-center text-white">
      <div className="text-lg font-semibold">Legal Practice Management</div>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center border border-[#F6931B] p-2 capitalize rounded-full"
        >
          <span>{user?.role}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 5.5a.5.5 0 0 1 .707-.707L8 8.793l3.793-3.793a.5.5 0 1 1 .707.707L8 10.207 3.5 5.5z" />
          </svg>
        </button>
        {dropdownOpen && (
          <div
            className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out"
            style={{
              opacity: dropdownOpen ? 1 : 0,
              transform: dropdownOpen ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            <div className="p-3 text-md text-gray-700">
              <p>Email: {user?.email}</p>
              <p>Role: {user?.role}</p>
            </div>
            <hr className="text-gray-400" />
            <button
              onClick={handleLogout}
              className="flex gap-2 my-2 w-full text-left text-red-500 p-2 hover:bg-gray-200 rounded-md"
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
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
