import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo/logo.svg";
// import Content from "../../../Components/Content/Content";
import { Link, NavLink } from "react-router-dom";
import {
  FaArrowRightToBracket,
  FaBars,
  FaBarsStaggered,
  FaRegCircleUser,
  FaRegHeart,
} from "react-icons/fa6";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
// import useAuth from "../../../Components/Hooks/useAuth";
import { MdDashboardCustomize } from "react-icons/md";
// import HomeOrderCart from "../../Dashboard/UserDashboard/HomeOrderCart";
import { RxCross2 } from "react-icons/rx";
import Content from "../../Components/Content/Content";
const Navbar = () => {
  const user = true;
  // const { user, logOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const activeLink = "text-red-700";
  const activeThirdLink = "text-red-500 transition-all 0.3s";
  const handleLogOut = () => {
    // logOut();
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleNavbar = () => {
    setNav(!nav);
  };

  const route = [
    {
      link: "mens_casual_shoes",
      name: "Men's Casual Shoes",
    },
    {
      link: "women_sports_shoes",
      name: "Women's Sports Shoes",
    },
    {
      link: "girl_formal_shoes",
      name: "Girl Formal Shoes",
    },
    {
      link: "discount",
      name: "Discount",
    },
    {
      link: "offer-Shoes",
      name: "Offer Shoes",
    },
  ];

  return (
    <div className="bg-white w-full  ">
      {/* Top Navbar */}
      <div className="bg-[#1A1A1A]">
        <p className="font-semibold text-white text-center py-2 underline px-1 text-base">
          Spend $200+ Code FREECAMPING | $400+ Code FREETOOLS | $1000+ Code
          FREEPRIME
        </p>
      </div>
      {/* Second navbar */}
      <div className="border-b border-gray-400 hidden md:block">
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
                    ? `${activeThirdLink}   px-2`
                    : " hover:text-red-700   px-2  transition-all 0.3s"
                }
              >
                Rewards
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700   px-2  transition-all 0.3s"
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
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700   px-2  transition-all 0.3s"
                }
              >
                Community
              </NavLink>

              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700   px-2  transition-all 0.3s"
                }
              >
                Help
              </NavLink>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="text-black hover:text-red-700  px-2"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) =>
                    isActive
                      ? `${activeThirdLink}  px-2`
                      : " hover:text-red-700   px-2  transition-all 0.3s"
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
      <div className="border-b border-gray-400 hidden md:block">
        <Content>
          <div className="flex items-center justify-between py-3">
            <div className="font-semibold text-base space-x-5">
              {route.map((rout) => (
                <NavLink
                  to={rout.link}
                  className={({ isActive }) =>
                    isActive
                      ? `${activeThirdLink} `
                      : " hover:text-red-700  pb-3 border-red-700 transition-all 0.3s"
                  }
                >
                  {rout.name}
                </NavLink>
              ))}
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
                  className={`outline-none bg-transparent ${
                    nav ? "hidden" : ""
                  }`}
                />
              </div>

              {user ? (
                <Link to="/dashboard/my_account">
                  <MdDashboardCustomize size={23} />
                </Link>
              ) : (
                <Link to="/sign-in">
                  <FaRegCircleUser size={23} />
                </Link>
              )}
              <Link to="/wishlist">
                <FaRegHeart size={23} />
              </Link>

              {user ? (
                <FiShoppingCart
                  onClick={toggleSidebar}
                  className="cursor-pointer"
                  size={23}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </Content>
      </div>
      <div className="flex justify-end">
        {isSidebarOpen && (
          <div className="fixed top-0 bottom-0 flex justify-end left-0  right-0 bg-black bg-opacity-50 z-50 transition-opacity duration-100 ease-in-out">
            {/* Add your sidebar content here */}
            <div
              className={`w-[480px] overflow-y-auto p-5 bg-white h-full transform  transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? "translate-x-0" : ""
              }`}
            >
              <div className="flex justify-between">
                <h2 className="text-base font-medium">SHOPPING CART</h2>
                <button
                  className="flex items-center gap-2 hover:text-blue-500 "
                  onClick={toggleSidebar}
                >
                  <span className="text-base ">close</span>
                  <FaArrowRightToBracket size={20} />
                </button>
              </div>
              <div className="pt-4 px-2">{/* <HomeOrderCart /> */}</div>
            </div>
          </div>
        )}
      </div>
      {/* mobile */}
      <section className="mt-3 border-b border-gray-400 pb-2 md:hidden">
        <Content>
          <div className="flex items-center pb-4 justify-between bg-white">
            <div className="flex gap-3 items-center">
              <button onClick={toggleNavbar}>
                <FaBars size={25} />
              </button>
              <div className="w-[120px] h-[30px]">
                <Link to="/">
                  {" "}
                  {/* <img className="w-full" src={logo} alt="" />{" "} */}
                </Link>
              </div>{" "}
            </div>
            <div className="flex  items-center gap-4">
              {user ? (
                <Link to="/dashboard/my_account">
                  <MdDashboardCustomize size={20} />
                </Link>
              ) : (
                <Link to="/sign-in">
                  <FaRegCircleUser size={20} />
                </Link>
              )}
              <Link to="/wishlist">
                <FaRegHeart size={20} />
              </Link>

              {user ? (
                <FiShoppingCart
                  onClick={toggleSidebar}
                  className="cursor-pointer"
                  size={23}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className=" py-2 flex items-center gap-3 bg-gray-200 rounded ">
            {" "}
            <div className="pl-4">
              <FiSearch className="text-gray-500" size={23} />
            </div>
            <input
              type="search"
              name=""
              placeholder="Search"
              id=""
              className={`outline-none bg-transparent ${nav ? "hidden" : ""}`}
            />
          </div>
        </Content>
        {nav && (
          <div className="fixed top-0 bottom-0 flex justify-end left-0 right-0 bg-black bg-opacity-50 mt-28 inset-0 z-50 transition-opacity duration-100 ease-in-out">
            {/* Add your sidebar content here */}
            <div
              className={`w-full overflow-y-auto p-5 bg-white h-full transform transition-transform duration-300 ease-in ${
                nav ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-end">
                <button onClick={toggleNavbar}>
                  <RxCross2 size={22} />
                </button>
              </div>
              <div className="pt-4 px-2">
                <div className="flex items-center justify-between py-3">
                  <div className="font-semibold text-base  space-y-5">
                    {route.map((rout, index) => (
                      <div key={index} className="flex flex-col ">
                        <NavLink
                          to={rout.link}
                          className={({ isActive }) =>
                            isActive
                              ? `${activeThirdLink} `
                              : " hover:text-red-700  border-red-700 transition-all 0.3s"
                          }
                        >
                          {rout.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-2 text-center items-center justify-center py-2">
                    <NavLink
                      className="bg-gray-400 text-center px-1 text-base font-medium text-white w-full py-3 rounded"
                      to="/s"
                    >
                      Rewards
                    </NavLink>
                    <NavLink
                      className="bg-gray-400 text-center px-1 text-base font-medium text-white w-full py-3 rounded"
                      to="/s"
                    >
                      Gift Cards
                    </NavLink>
                    <NavLink
                      className="bg-gray-400 text-center px-1 text-base font-medium text-white w-full py-3 rounded"
                      to="/s"
                    >
                      Product Finder
                    </NavLink>
                    <NavLink
                      className="bg-gray-400 text-center px-1 text-base font-medium text-white w-full py-3 rounded"
                      to="/s"
                    >
                      Community
                    </NavLink>
                    <NavLink
                      className="bg-gray-400 text-center px-1 text-base font-medium text-white w-full py-3 rounded"
                      to="/s"
                    >
                      Help
                    </NavLink>
                    {user ? (
                      <button
                        onClick={handleLogOut}
                        className="text-black hover:text-red-700  px-2"
                      >
                        Logout
                      </button>
                    ) : (
                      <NavLink
                        className="bg-gray-400 text-center px-1 text-base font-medium text-white w-full py-3 rounded"
                        to="/sign-in"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
