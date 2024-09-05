import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import propTypes from "prop-types";

const MissionSection = ({ scrollPosition }) => {
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    // Define GSAP animation
    animationRef.current = gsap.fromTo(
      element,
      { opacity: 0, y: 50 }, // Start state
      {
        opacity: 1,
        y: 0, // End state
        duration: 1.5,
        ease: "power2.out",
        paused: true, // Animation is paused initially
      }
    );
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    const rect = element.getBoundingClientRect();
    const threshold = window.innerHeight * 0.85;

    if (
      scrollPosition &&
      scrollPosition.y + window.innerHeight >= rect.top + scrollPosition.y
    ) {
      animationRef.current.play(); // Trigger animation when in view
    }
  }, [scrollPosition]);

  return (
    <div
      ref={sectionRef}
      className="h-fit pt-8 lg:pt-16 flex justify-center items-center pb-8"
    >
      <div className="w-[95%] h-fit flex lg:justify-between justify-center">
        <div className="lg:w-1/2 w-[90%] text-center lg:text-start items-center lg:items-start flex flex-col gap-6 pr-0 lg:pr-20 lg:pt-6">
          <header className="text-sky-700 font-sans text-[1.375rem] lg:text-[2.4375rem] font-[600]">
            About Us
          </header>
          <h3 className="Spline text-[0.6875rem] lg:text-[1.8125rem] seperate_color font-[600] uppercase">
            Elevating humanity through innovation and technology is our mission.
          </h3>
          <div className="w-2/3 lg:hidden block" data-aos="zoom-in">
            <img
              src="https://sidlabs-demo.vercel.app/assets/Mission-59e18e6f.png"
              alt="Mission Image"
            />
          </div>
          <p className="plus_Jakarta text-[0.5rem] lg:text-[1.5rem] font-[400]">
            Our vision is to reduce the gap in harnessing technology, towards
            human evolution! We believe that every technological solution should
            be purposeful and aligned with the unique needs of the user.
            One-size-fits-all approaches are outdated; instead, we advocate for
            solutions that are tailored, intuitive, and genuinely enhance the
            human experience.
          </p>
        </div>
        <div
          className="w-1/2 lg:flex lg:justify-center hidden"
          data-aos="zoom-in"
        >
          <img
            src="https://sidlabs-demo.vercel.app/assets/Mission-59e18e6f.png"
            alt="Mission Image"
          />
        </div>
      </div>
    </div>
  );
};

MissionSection.propTypes = {
  scrollPosition: propTypes.shape({
    y: propTypes.number.isRequired,
  }).isRequired,
};

export default MissionSection;
