import Scrollbars from "react-custom-scrollbars";
import CustomTestimony from "./CustomTestimony";

const TestimonialSection = () => {
  return (
    <div className="h-fit lg:py-12 py-6 w-full flex justify-center items-center">
      <div className="h-fit w-full py-8 flex flex-col justify-between items-center lg:gap-0 gap-4">
        <div className="lg:w-1/2 lg:pl-20 flex h-fit flex-col lg:items-start items-center gap-6 lg:gap-12 w-[90%]">
          <header className="font-semibold flex items-center flex-col gap-3 w-full">
            <div className="flex flex-col items-center w-full px-4">
              <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mb-4"></div>
              <h1 className="text-[#0076B4] text-[1.125rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.4375rem] font-bold text-center">
                Why Us?
              </h1>
              <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mt-4"></div>
            </div>
          </header>
        </div>
        <div className="lg:w-full w-fit items-start flex gap-12 py-4 lg:py-12 overflow-hidden">
          <Scrollbars
            autoHide
            dir="ltr"
            style={{ width: "100%", height: 240 }}
          >
            <div className="px-4 lg:px-0 overflow-x-auto flex lg:justify-start gap-12">
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
              {/* Repeat CustomTestimony components */}
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
