import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import propTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MissionSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionElement = sectionRef.current;
    const headerElement = headerRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;

    // Parallax effect for background image
    animationRef.current = gsap.fromTo(
      sectionElement,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 50%",
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionElement,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );

    // Text Animations
    gsap.fromTo(
      [headerElement, textElement],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );

    // Image Animation
    gsap.fromTo(
      imageElement,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative pt-20 pb-20 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-700 md:h-fit sm:h-fit h-fit lg:h-fit
      flex justify-center items-center overflow-hidden"
    >
      {/* Background overlay shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent  "></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-20 rounded-full blur-3xl transform -translate-y-20 -translate-x-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl transform translate-y-20 translate-x-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent  "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent  "></div>

      <div className="absolute top-[90%] left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-[90%] left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-900 blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center lg:items-start lg:flex-row w-[95%] gap-8">
        {/* Left side - Text */}
        <div className="lg:w-1/2 text-center lg:text-start flex flex-col gap-6">
          <header
            ref={headerRef}
            className="text-white font-bold text-[2.5rem] lg:text-[5rem] tracking-wide -mt-4"
          >
            About us
          </header>
          <p
            ref={textRef}
            className="text-white text-[1.5rem] lg:text-[1.5rem] leading-relaxed font-light max-w-[90%] lg:max-w-full "
          >
            Our mission is to transform the way people engage with technology,
            providing solutions that not only boost productivity but also enrich
            the human experience. We deliver tailored, impactful solutions that
            make a significant difference.
          </p>
        </div>

        {/* Right side - Image */}
        <div
          className={`lg:w-1/2 block flex justify-center items-center w-1/3 h-1/4 ${
            window.innerWidth < 640 ? "hidden" : ""
          }`}
        >
          <img
            ref={imageRef}
            src="https://sidlabs-demo.vercel.app/assets/Mission-59e18e6f.png"
            alt="Mission Image"
            className="w-full h-auto lg:max-w-md shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-500"
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
