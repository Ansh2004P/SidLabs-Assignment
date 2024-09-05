import React from "react";
import img1 from "../assets/imgs/HeroSection.png";
import { DownArrowKey } from "../utils/utils";

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-auto">
      <img
        src={
          "https://sidlabs-demo.vercel.app/assets/HeroSection-Image_Mobile-d0366779.png"
        }
        alt="Hero Section"
        className="w-full h-full object-x-cover absolute top-0 left-0 -z-10 block sm:hidden"
      />
      <img
        src={img1} // You can replace this with a different image for mobile if needed
        alt="Hero Section Mobile"
        className="w-full h-full object-x-cover absolute top-0 left-0 -z-10 hidden sm:block"
      />
      <div className="relative flex flex-col h-full overflow-auto px-10">
        <span className="flex flex-col h-full text-sky-700 pr-4 lg:pr-10 lg:mr-10 justify-center text-end lg:text-end relative">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-sans">
            A VENTURE STUDIO
          </h1>
          <h3 className="text-end text-lg sm:text-2xl lg:text-4xl font-normal font-sans mt-4 pt-4 w-full  mx-auto ">
            Advancing Human Intelligence <br />
            Through Innovation
          </h3>
        </span>
        <span className="flex flex-col text-sky-700 relative py-4 font-normal text-sm sm:text-lg lg:text-xl text-center lg:text-end mx-auto lg:ml-[45%]">
          Explore More
          <DownArrowKey />
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
