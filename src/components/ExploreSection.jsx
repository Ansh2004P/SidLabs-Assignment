import React from "react";
import CustomCard from "./CustomCard";
import flagship from "../assets/imgs/FlagShip.svg";

const ExploreSection = () => {
  return (
    <div className="h-fit pt-12 pb-2 lg:pb-6 flex justify-center bg-transparent">
      <div className="w-[95%] h-fit flex flex-col justify-between items-center lg:items-start gap-5">
        <header className="lg:relative lg:top-6 flex flex-col items-center lg:block">
          <h2 className="text-[#0076B4] text-[1.375rem] lg:text-[2.4375rem] font-bold">
            Explore
          </h2>
          <p className="lg:text-[1.8125rem] pt-1 text-[0.6875rem] font-semibold uppercase text-[#0076B4]">
            OUR FLAGSHIP PROJECTS
          </p>
        </header>
        <div className="w-full flex flex-col lg:flex-row items-center lg:mt-20 lg:items-start gap-8 relative">
          <CustomCard
            number="1"
            title="[AI]wise Partners: Revolutionizing Business Intelligence"
            description="Dive into the future of business intelligence with [AI]wise Partners. This cutting-edge solution harnesses the power of artificial intelligence to provide unparalleled insights, helping businesses make data-driven decisions with confidence."
            imgSrc={flagship}
            imgAlt="Flagship Card Decoration"
          />
          <CustomCard
            number="2"
            title="AwareWilderness: CRAFTING MEMORIES"
            description="Empowering travelers to embark on transformative journeys that not only satisfy their wanderlust but also contribute to the conservation and preservation of our planet's precious wilderness."
            imgSrc={flagship}
            imgAlt="Flagship Card Decoration"
          />
          <CustomCard
            number="3"
            title="CARE Platform"
            description="CARE utilizes a comprehensive framework to evaluate and recommend child-friendly apps, videos, and games, ensuring your child’s digital interactions are both enriching and safe."
            imgSrc={flagship}
            imgAlt="Flagship Card Decoration"
          />
        </div>
        <div className="hidden lg:block mx-[10%] absolute inset-x-0 top-[255%] border-t-2 border-[#0076B4] -z-20"></div>
        <div className="border border-sky-700 block md:block lg:hidden absolute h-[30%] w-[1px] top-[155%] -z-10"></div>

        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default ExploreSection;
