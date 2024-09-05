import React from "react";
import propTypes from "prop-types";
import HeaderLogo from "./HeaderLogo";

const Header = ({ isHeroInView }) => {
  return (
    <div className="fixed z-50 h-fit w-full py-3 flex justify-between ">
      <div
        className={`absolute h-full w-full z-40 -mt-3 ${
          !isHeroInView ? "bg-transparent" : "bg-white shadow-lg"
        }`}
      />

      <HeaderLogo />

      <div className="px-4 relative z-50 w-full sm:w-auto flex justify-end items-center space-x-3 sm:space-x-4 ">
        <li className="cursor-pointer list-none text-sky-700 px-2 sm:text-sm md:text-md lg:text-lg text-xs rounded-md  transition-all duration-300  hover:text-sky-400 text-md">
          About us
        </li>
        <li className="cursor-pointer list-none text-sky-700 px-2 sm:text-sm md:text-md lg:text-lg text-xs rounded-md  transition-all duration-300  hover:text-sky-400 text-md">
          Flagship Projects
        </li>
        <li className="cursor-pointer list-none text-sky-700 px-2 sm:text-sm md:text-md lg:text-lg text-xs rounded-md  transition-all duration-300  hover:text-sky-400 text-md">
          Contact Now
        </li>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  isHeroInView: propTypes.bool,
};
