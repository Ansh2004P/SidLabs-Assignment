/* eslint-disable react/no-unescaped-entities */
import "../animation.css";

const InsightSection = () => {
  return (
    <div className="h-fit py-12 flex justify-center items-center">
      <div className="h-fit w-[95%] flex flex-col lg:items-start items-center gap-12">
        {/* Header Section */}
        <header className="font-semibold flex items-center flex-col gap-3 w-full">
          <div className="flex flex-col items-center w-full px-4">
            <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mb-4"></div>
            <h1 className="text-[#0076B4] text-[1.125rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.4375rem] font-bold text-center">
              Trending Insights
            </h1>
            <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mt-4"></div>
          </div>
        </header>

        {/* Cards Section */}
        <div className="px-4 scroll-container text-white">
          <div className="w-full scroll-wrapper flex justify-evenly lg:gap-10 gap-4">
            {/* Card 1 */}
            <div className="border border-neutral-800 duration-300 ease-in-out hover:border-[#0077B4] bg-neutral-800 rounded-[1.4375rem] lg:w-[30%] md:w-[45%] sm:w-[60%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              <img
                src="https://sidlabs-demo.vercel.app/assets/NewsCardOne-4a0a0e4e.png"
                alt="Industry Update"
                className="w-full h-auto rounded-[1.4375rem]"
              />
              <h1 className="text-[0.875rem] lg:text-[1.75rem] font-bold">
                Industry Update
              </h1>
              <p className="text-[0.5625rem] lg:text-[1rem] font-semibold">
                There has been significant progress in using AI for medical
                diagnostics, personalized medicine, drug discovery, and
                improving patient care.
              </p>
              <span className="text-[0.5625rem] lg:text-[1rem] font-thin">
                Increased attention on the ethical implications of AI, including
                fairness, transparency, bias mitigation, and responsible
                deployment of AI systems.
              </span>
            </div>

            {/* Card 2 */}
            <div className="card border border-neutral-800 duration-300 ease-in-out hover:border-[#0077B4] bg-neutral-800 rounded-[1.4375rem] lg:w-[30%] md:w-[45%] sm:w-[60%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              <img
                src="https://sidlabs-demo.vercel.app/assets/NewsCardTwo-2773e4d5.png"
                alt="Online Tech Education"
                className="w-full h-auto rounded-[1.4375rem]"
              />
              <h1 className="text-[0.875rem] lg:text-[1.5rem] font-semibold">
                Online Tech Education
              </h1>
              <p className="text-[0.5625rem] lg:text-[1rem]">
                Online tech education has witnessed a surge in accessibility,
                with platforms offering diverse courses in various languages,
                catering to global audiences.
              </p>
              <span className="text-[0.5625rem] lg:text-[1rem] font-thin">
                Emphasis on skill-based learning has grown, with platforms
                offering specialized courses in emerging tech fields such as AI,
                cybersecurity, and data science.
              </span>
            </div>

            {/* Card 3 */}
            <div className="border border-neutral-800 duration-300 ease-in-out hover:border-[#0077B4] bg-neutral-800 rounded-[1.4375rem] lg:w-[30%] md:w-[45%] sm:w-[60%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              <img
                src="https://sidlabs-demo.vercel.app/assets/NewsCardThree-eb78519e.png"
                alt="Modern Age Parenting"
                className="w-full h-auto rounded-[1.4375rem]"
              />
              <h1 className="text-[0.875rem] lg:text-[1.5rem] font-bold">
                Modern Age Parenting
              </h1>
              <p className="text-[0.5625rem] lg:text-[1rem] font-semibold">
                With the rise of technology, there's a surge in digital tools
                aiding parents—from apps monitoring child activities to
                educational platforms offering interactive learning experiences.
              </p>
              <span className="text-[0.5625rem] lg:text-[1rem] font-thin">
                Online forums, social media groups, and virtual communities are
                thriving, offering a space for parents.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightSection;
