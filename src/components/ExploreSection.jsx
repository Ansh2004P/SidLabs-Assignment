import CustomCard from "./CustomCard";
import flagship from "../assets/imgs/FlagShip.svg";

const ExploreSection = () => {
  return (
    <div className="h-fit pt-12 pb-2 lg:pb-6 flex justify-center bg-transparent w-screen">
      <div className="w-[95%] h-fit flex flex-col justify-between items-center lg:items-start gap-5">
        <header className="font-semibold flex items-center flex-col gap-3 w-full">
          <div className="flex flex-col items-center w-full px-4">
            <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mb-4"></div>
            <h1 className="text-[#0076B4] text-[1.125rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.4375rem] font-bold text-center">
              Flagship Projects
            </h1>
            <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mt-4"></div>
          </div>
        </header>

        <div className="w-full flex flex-col lg:flex-row items-center lg:mt-20 lg:items-start gap-8 relative">
          <CustomCard
            title="[AI]wise Partners"
            subtitle="Revolutionizing Business Intelligence"
            description="Dive into the future of business intelligence with [AI]wise Partners. This cutting-edge solution harnesses the power of artificial intelligence to provide unparalleled insights, helping businesses make data-driven decisions with confidence."
            imgSrc={flagship}
            imgAlt="Flagship Card Decoration"
          />
          <CustomCard
            title="AwareWilderness: CRAFTING MEMORIES"
            description="Empowering travelers to embark on transformative journeys that not only satisfy their wanderlust but also contribute to the conservation and preservation of our planet's precious wilderness."
            imgSrc={flagship}
            imgAlt="Flagship Card Decoration"
          />
          <CustomCard
            title="CARE Platform"
            description="CARE utilizes a comprehensive framework to evaluate and recommend child-friendly apps, videos, and games, ensuring your child’s digital interactions are both enriching and safe."
            imgSrc={flagship}
            imgAlt="Flagship Card Decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
