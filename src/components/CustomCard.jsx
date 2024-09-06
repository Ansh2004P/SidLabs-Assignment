import React from "react";
import propTypes from "prop-types";

const CustomCard = ({ title, subtitle, description }) => {
  return (
    <div className="z-30  rounded-lg h-fit lg:h-[420px] shadow-lg lg:w-[32%] w-[75%] flex justify-center items-center lg:self-end cursor-pointer duration-300 ease-in hover:scale-105 sm:mx-auto  shadow-neutral-600 hover:bg-neutral-800">
      <div className="lg:w-[95%] lg:h-[95%] w-[96%] h-[99%] my-1 flex flex-col items-center lg:my-2 relative py-8">
        <header className=" pb-3 w-[90%] text-center text-white text-[0.75rem] lg:text-[1.6rem] font-bold">
          {title}
        </header>
        <p className="lg:pb-10 pb-3 w-[90%] text-center text-white text-[0.25rem] lg:text-[1.2rem] font-medium">
          {subtitle}
        </p>
        <p className="w-[90%] text-white text-[0.625rem] lg:text-[1rem] font-light pb-8 lg:pb-12">
          {description}
        </p>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  number: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  description: propTypes.string,
};

export default CustomCard;
