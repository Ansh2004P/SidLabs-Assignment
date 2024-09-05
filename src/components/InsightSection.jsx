/* eslint-disable react/no-unescaped-entities */
import React from "react";

const InsightSection = () => {
  return (
    <div className="h-fit py-12 flex justify-center items-center">
      <div className="h-fit w-[95%] flex flex-col lg:items-start items-center gap-12">
        {/* Header Section */}
        <header className="plus_Jakarta font-semibold flex items-center lg:block flex-col gap-3">
          <h1 className="text-[#0076B4] text-[1.375rem] lg:text-[2.4375rem]">
            AI Insights
          </h1>
          <p className="uppercase text-[0.6875rem] lg:text-[1.8125rem]">
            Stay Updated with the Latest News and Developments
          </p>
        </header>

        {/* Cards Section */}
        <div className="overflow-x-auto">
          <div className="flex lg:gap-12 gap-6 lg:justify-between">
            {/* Card 1 */}
            <div className="flex-shrink-0 border duration-300 ease-in-out hover:border-[#0077B4] bg-white rounded-[1.4375rem] lg:w-[30%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              {/* Add image source here */}
              <img
                src="https://sidlabs-demo.vercel.app/assets/NewsCardOne-4a0a0e4e.png"
                alt="Industry Update"
              />
              <h1 className="newstitle text-[0.875rem] lg:text-[1.5rem]">
                Industry Update
              </h1>
              <p className="newsPara text-[0.5625rem] lg:text-[1rem]">
                There has been significant progress in using AI for medical
                diagnostics, personalized medicine, drug discovery, and
                improving patient care.
              </p>
              <span className="newsPara text-[0.5625rem] lg:text-[1rem]">
                Increased attention on the ethical implications of AI, including
                fairness, transparency, bias mitigation, and responsible
                deployment of AI systems.
              </span>
            </div>

            {/* Card 2 */}
            <div className="flex-shrink-0 border duration-300 ease-in-out hover:border-[#0077B4] bg-white rounded-[1.4375rem] lg:w-[30%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              {/* Add image source here */}
              <img
                src="https://sidlabs-demo.vercel.app/assets/NewsCardTwo-2773e4d5.png"
                alt="Online Tech Education"
              />
              <h1 className="newstitle text-[0.875rem] lg:text-[1.5rem]">
                Online Tech Education
              </h1>
              <p className="newsPara text-[0.5625rem] lg:text-[1rem]">
                Online tech education has witnessed a surge in accessibility,
                with platforms offering diverse courses in various languages,
                catering to global audiences.
              </p>
              <span className="newsPara text-[0.5625rem] lg:text-[1rem]">
                Emphasis on skill-based learning has grown, with platforms
                offering specialized courses in emerging tech fields such as AI,
                cybersecurity, and data science.
              </span>
            </div>

            {/* Card 3 */}
            <div className="flex-shrink-0 border duration-300 ease-in-out hover:border-[#0077B4] bg-white rounded-[1.4375rem] lg:w-[30%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              {/* Add image source here */}
              <img
                src="https://sidlabs-demo.vercel.app/assets/NewsCardThree-eb78519e.png"
                alt="Modern Age Parenting"
              />
              <h1 className="newstitle text-[0.875rem] lg:text-[1.5rem]">
                Modern Age Parenting
              </h1>
              <p className="newsPara text-[0.5625rem] lg:text-[1rem]">
                With the rise of technology, there's a surge in digital tools
                aiding parents—from apps monitoring child activities to
                educational platforms offering interactive learning experiences.
              </p>
              <span className="newsPara text-[0.5625rem] lg:text-[1rem]">
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
