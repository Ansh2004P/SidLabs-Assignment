import CustomTestimony from "./CustomTestimony";

const TestimonialSection = () => {
  return (
    <div
      className="h-fit lg:py-12 py-6 w-full flex justify-center items-center"
      data-aos="fade-up"
    >
      <div className="h-fit w-full py-8 bg-[#EFF9FF] flex flex-col lg:flex-row justify-between items-center lg:gap-0 gap-4">
        <div className="lg:w-1/2 lg:pl-20 flex h-fit flex-col lg:items-start items-center gap-6 lg:gap-12 w-[90%]">
          <header className="flex flex-col lg:gap-0 gap-1 lg:items-start items-center">
            <p className="text-[#0076B4] text-[1.375rem] lg:text-[1.5rem] font-[600]">
              Testimonial
            </p>
            <span className="capitalize text-[1.2rem] lg:text-[2.5rem] font-[400] seperate_color">
              See What Our Clients Say’s About Us
            </span>
          </header>
          <p className="text-[#8492A0] hidden lg:block w-[69%] text-[1.25rem] font-[400] capitalize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="lg:w-[48rem] px-4 lg:px-0 items-start overflow-x-auto flex lg:justify-start gap-12 py-4 lg:py-12">
          <CustomTestimony
            
            name="David L."
            rating="5.0"
            testimonial="Partnering with SidLabs has been a game-changer for our business. Their innovative AI solutions and exceptional support have streamlined our operations, boosted efficiency, and driven remarkable growth. Highly recommend their expertise and cutting-edge technology!"
          />
          <CustomTestimony
           
            name="Jessica M."
            rating="4.6"
            testimonial="The AI solutions provided by SidLabs have revolutionized our workflow. Their technology is both powerful and user-friendly, and their team is incredibly responsive and knowledgeable. We're thrilled with the results and couldn't ask for a better partner in innovation."
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
