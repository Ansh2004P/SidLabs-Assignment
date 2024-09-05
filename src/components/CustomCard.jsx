import React from "react";
import propTypes from "prop-types";

const CustomCard = ({ number, title, description, imgSrc, imgAlt }) => {
  return (
    <div className="z-30 border border-sky-700 rounded-lg h-fit lg:h-[420px] shadow-lg lg:w-[32%] w-[75%] flex justify-center items-center lg:self-end cursor-pointer duration-300 ease-in hover:scale-105 sm:mx-auto">
      <div className="lg:w-[95%] lg:h-[95%] w-[96%] h-[99%] my-1 flex flex-col items-center lg:py-2 lg:my-2 bg-[#EFF9FF] relative">
        <p className="lg:my-8 my-3 w-[1.375rem] h-[1.375rem] lg:w-[3.125rem] lg:h-[3.125rem] flex items-center justify-center bg-[#0077B4] rounded-full text-white text-[1.125rem] lg:text-[1.5rem] font-bold">
          {number}
        </p>
        <header className="lg:pb-8 pb-3 w-[90%] text-center text-black text-[0.75rem] lg:text-[1.5rem] font-bold">
          {title}
        </header>
        <p className="w-[90%] text-black text-[0.625rem] lg:text-[1rem] font-light pb-8 lg:pb-12">
          {description}
        </p>
        <img
          className="absolute -bottom-2 hidden lg:block"
          src={imgSrc}
          alt={imgAlt}
        />
        <img
          className="absolute -bottom-1 lg:hidden"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  number: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  imgSrc: propTypes.string,
  imgAlt: propTypes.string,
};

export default CustomCard;
