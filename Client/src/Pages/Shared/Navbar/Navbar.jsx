import React, { useState } from "react";
import logo from "../../../assets/Logo/logo.svg";
import Content from "../../../Components/Content/Content";
import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import useAuth from "../../../Components/Hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeLink = "text-red-700";
  const activeThirdLink = "border-b-4 pb-5 border-red-700 transition-all 0.3s";
  const handleLogOut = () =>{
    logOut()
  }
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-white w-full">
      {/* Top Navbar */}
      {/* Second navbar */}
      <div className="border-b border-gray-400 ">
        <Content>
          <div className="flex items-center justify-between py-2">
            <Link to={"/"}>
              <img className="w-[151px]" src={logo} alt="Logo" />
            </Link>
            <div className="font-medium">
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700   px-2  transition-all 0.3s"
                }
              >
                Rewards
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeLink} border-x-2 px-2`
                    : "border-x-2   px-2  hover:text-red-700"
                }
              >
                Gift Cards
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700  px-2   transition-all 0.3s"
                }
              >
                Product Finder
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeLink} border-x-2  px-2`
                    : "border-x-2  hover:text-red-700  px-2"
                }
              >
                Community
              </NavLink>

              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink}   px-2`
                    : " hover:text-red-700  px-2   transition-all 0.3s"
                }
              >
                Help
              </NavLink>
              {user ? (
                <button onClick={handleLogOut} className="text-black hover:text-red-700  border-x-2 px-2">
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) =>
                    isActive
                      ? `${activeLink} border-x-2  px-2`
                      : "border-x-2  hover:text-red-700  px-2"
                  }
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </Content>
      </div>
      {/* Third Navbar */}
      <div className="border-b border-gray-400 ">
        <Content>
          <div className="flex items-center justify-between py-3">
            <div className="font-semibold text-base space-x-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700  pb-3 border-red-700 transition-all 0.3s"
                }
              >
                Pizza Oven
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700  pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Bundles
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700  pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Accessories
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700  pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Patio & Garden
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700  pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Fuel
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700  pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Camp Stoves
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700  pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Personalize
              </NavLink>
            </div>

            <div className="flex  items-center gap-6">
              <div className=" w-64 py-2 flex items-center gap-3 bg-gray-200 rounded-full">
                {" "}
                <div className="pl-4">
                  <FiSearch className="text-gray-500" size={23} />
                </div>
                <input
                  type="search"
                  name=""
                  placeholder="Search"
                  id=""
                  className="outline-none bg-transparent"
                />
              </div>

              <Link to="/sign-in">
                <FaRegCircleUser size={23} />
              </Link>
              <FiShoppingCart onClick={toggleSidebar} size={23} />
            </div>
          </div>
        </Content>
      </div>
      <div className="flex justify-end">
      {isSidebarOpen && (
        <div className="fixed top-0 bottom-0 flex justify-end left-0  right-0 bg-black bg-opacity-50 z-50">
          {/* Add your sidebar content here */}
          <div className="w-80 bg-white h-full">
              <h2 className="text-xl">easfas</h2>
            <div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
