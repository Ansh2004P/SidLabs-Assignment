import React from "react";
import img1 from "../assets/imgs/HeroSection.png";
import { FaChevronDown } from "react-icons/fa"; // Importing an arrow icon

const HeroSection = () => {
  return (
    <section className="h-screen text-white flex flex-col justify-center relative">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 h-screen w-[100%] object-cover -z-20"
        src={img1}
        alt="Hero background"
      />

      {/* Overlay */}
      <div className="absolute h-screen w-screen -z-10 bg-gradient-to-b from-transparent to-gray-900 opacity-95" />

      {/* Text and Button */}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Cutting-Edge Venture Studio
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10">
          Advancing Human Intelligence through Pioneering AI Innovations
        </p>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <FaChevronDown className="text-white text-3xl animate-bounceHigh" />
      </div>
    </section>
  );
};

export default HeroSection;
