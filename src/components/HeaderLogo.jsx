import React from "react";
import img1 from "../assets/imgs/HeaderLogo.png";

const HeaderLogo = () => {
  return (
    <img
      src={img1}
      alt="logo"
      className="ml-1 mt-1 pl-4 z-50 w-20 h-8 sm:h-8 md:h-10 lg:h-10 sm:w-auto lg:w-auto md:w-auto" // Responsive height
    />
  );
};

export default HeaderLogo;
