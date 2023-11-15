import React, { useState } from "react";
import logo from "../../../assets/Logo/logo.svg";
import Content from "../../../Components/Content/Content";
import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  const activeLink = "text-red-700";
  const activeThirdLink = "border-b-4 pb-5 border-red-700 transition-all 0.3s";

  return (
    <div className="bg-white w-full hidden md:block">
      {/* Top Navbar */}
      {/* Second navbar */}
      <div className="border-b border-gray-400 ">
        <Content>
          <div className="flex items-center justify-between py-2">
            <Link to={'/'}>
              <img  className="w-[151px]" src={logo} alt="Logo" />
            </Link>
            <div className="font-medium">
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700 hover:border-b-4  px-2 pb-2 border-red-700 transition-all 0.3s"
                }
              >
                Rewards
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeLink} border-x-2 px-2`
                    : "border-x-2  px-2 hover:text-red-700"
                }
              >
                Gift Cards
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700  px-2 hover:border-b-4 pb-2 border-red-700 transition-all 0.3s"
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
                    ? `${activeThirdLink}  px-2`
                    : " hover:text-red-700  px-2 hover:border-b-4 pb-2 border-red-700 transition-all 0.3s"
                }
              >
                Corporate Sales
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeLink} border-x-2  px-2`
                    : "border-x-2  hover:text-red-700  px-2"
                }
              >
                Help
              </NavLink>
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
                    : " hover:text-red-700 hover:border-b-4 pb-3 border-red-700 transition-all 0.3s"
                }
              >
                Pizza Oven
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700 hover:border-b-4 pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Bundles
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700 hover:border-b-4 pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Accessories
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700 hover:border-b-4 pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Patio & Garden
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700 hover:border-b-4 pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Fuel
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700 hover:border-b-4 pb-5 border-red-700 transition-all 0.3s"
                }
              >
                Camp Stoves
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) =>
                  isActive
                    ? `${activeThirdLink} `
                    : " hover:text-red-700 hover:border-b-4 pb-5 border-red-700 transition-all 0.3s"
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

              <Link to='/sign-in'>
              <FaRegCircleUser size={23} /></Link>
              <FiShoppingCart size={23} />
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default Navbar;
