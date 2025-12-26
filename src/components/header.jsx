import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { FcSearch } from "react-icons/fc";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/themecontext";

import { useNavigate } from "react-router-dom";

const Header = ({ toggle, setToggle, setSearchQuery }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center p-3">
        <div className="ml-5">
          <div
            className={`hamburger ${toggle ? "open" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <img src={logo} width={60} height={60} className="hidden md:block cursor-pointer ml-5" onClick={() => navigate('/')} />

        <div className="flex bg-gray-100 p-2 w-full flex-1 max-w-[500px] mx-auto items-center rounded-full font-bold text-1lg">
          <FcSearch className="text-[25px] cursor-pointer" />
          <input
            type="search"
            placeholder="Search"
            className="px-1 rounded-full w-full bg-transparent outline-none text-black"
            onChange={(e) => { setSearchQuery(e.target.value) }}
          />
        </div>

        <div className="flex items-center gap-4 mr-5">
          <div className="cursor-pointer">
            {theme == "light" ? (
              <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:scale-110 transition-all" onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
            ) : (
              <div className="bg-gray-700 p-2 rounded-full cursor-pointer hover:scale-110 transition-all" onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
            )}
          </div>
          <div className="cursor-pointer">
            {theme == "light" ? (
              <HiMoon
                onClick={() => {
                  setTheme("dark");
                  localStorage.setItem("theme", "dark");
                }}
                className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer hover:scale-110 transition-all"
              />
            ) : (
              <HiSun
                onClick={() => {
                  setTheme("light");
                  localStorage.setItem("theme", "light");
                }}
                className="text-[35px] bg-slate-700 text-white p-1 rounded-full cursor-pointer hover:scale-110 transition-all"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
