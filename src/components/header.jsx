import React, { useState, useContext, useEffect } from "react";
import logo from "../assets/logo.png";
import { FcSearch, FcNoIdea, FcIdea } from "react-icons/fc";
import { HiOutlineBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import { ThemeContext } from "../context/themecontext";
import GenreList from "./genrelist";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {}, []);
  return (
    <>
      <div className="flex justify-around items-center p-5">
        <img src={logo} width={60} height={60} className="hidden md:block" />
        <div className="md:hidden">
          {!toggle ? (
            <HiOutlineBars3CenterLeft
              onClick={() => setToggle(!toggle)}
              className="dark:text-white text-[25px] cursor-pointer"
            />
          ) : (
            <HiOutlineXMark
              onClick={() => setToggle(!toggle)}
              className="dark:text-white text-[25px] cursor-pointer"
            />
          )}
          {toggle ? (
            <div className="absolute z-10 bg-white mt-3 dark:bg-[#121212]">
              <GenreList />
            </div>
          ) : null}
        </div>
        <div className="flex bg-gray-100 p-2 w-96 items-center rounded-full lg:mx-20 mx-5 font-bold text-1lg">
          <FcSearch />
          <input
            type="search"
            placeholder="Search"
            className="px-1 rounded-full w-full bg-transparent outline-none text-black"
          />
        </div>
        <div className="cursor-pointer">
          {theme == "light" ? (
            <FcNoIdea
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
              className="text-[30px] bg-gray-500 text-gray-900 p-1 rounded-full"
            />
          ) : (
            <FcIdea
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
              className="text-[30px] bg-gray-500 text-white p-1 rounded-full"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
