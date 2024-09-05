// CustomCursor.js
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false); // New state for hover

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const elements = document.querySelectorAll("#nav h4");
    elements.forEach((elem) => {
      elem.addEventListener("mouseenter", handleMouseEnter);
      elem.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Small cursor */}
      <div
        className={`fixed pointer-events-none rounded-full transition-transform ${
          hovered
            ? "w-12 h-12 scale-150 border-2 border-white bg-transparent"
            : "w-6 h-6 bg-sky-500"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
      {/* Large cursor */}
      <div
        className={`fixed pointer-events-none rounded-full transition-transform ${
          hovered ? "opacity-40 blur-[80px]" : "opacity-50 blur-[80px]"
        }`}
        style={{
          left: position.x - 175, // Adjusting based on width/2
          top: position.y - 175, // Adjusting based on height/2
          width: "350px",
          height: "350px",
          backgroundColor: hovered ? "transparent" : "skyblue",
          border: hovered ? "1px solid #fff" : "none",
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
