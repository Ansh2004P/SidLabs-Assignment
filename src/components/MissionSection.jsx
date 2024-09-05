import React from "react";

const MissionSection = () => {
  return (
    <div className="h-fit pt-8 lg:pt-16 flex justify-center items-center  pb-8">
      <div className="w-[95%] h-fit flex lg:justify-between justify-center">
        <div className="lg:w-1/2 w-[90%] text-center lg:text-start items-center lg:items-start flex flex-col gap-6 pr-0 lg:pr-20 lg:pt-6">
          <header className="text-sky-700 plus_Jakarta text-[1.375rem] lg:text-[2.4375rem] font-[600]">
            Our Mission
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

export default MissionSection;
