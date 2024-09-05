import React from "react";

import CustomButtons from "./CustomButtons";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <div className="h-fit w-full py-3 flex justify-between px-4  relative">
      <HeaderLogo />
      <div className="w-full sm:w-[65%] md:w-[60%] lg:w-[30%] flex justify-around ml-6 pr-4 mr-2">
        <CustomButtons content="About us" />
        <CustomButtons  content="Flagship Projects" />
        <CustomButtons content="Contact Now" />
      </div>
    </div>
  );
};

export default Header;
