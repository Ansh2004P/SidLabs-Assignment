import React from "react";
import { Star, TestimonialTop } from "../utils/utils";
import propTypes from "prop-types";

const CustomTestimony = ({ name, rating, testimonial }) => {
  return (
    <div className="border flex-shrink-0 w-[70%] lg:w-[24rem] border-[#0076B4] flex flex-col items-center bg-white gap-4 lg:py-6 lg:px-6 py-3 px-3 rounded-[0.4375rem] testimonial_card">
      <div className="self-start">
        <TestimonialTop />
      </div>
      <p className="text-[#727272] text-[0.5rem] lg:text-[1rem] font-[400] capitalize">
        {testimonial}
      </p>
      <div className="flex flex-col w-full gap-1">
        <p className="text-[#252525] text-[0.625rem] lg:text-[1rem] font-[600] capitalize">
          {name}
        </p>
        <div className="flex w-full justify-between font-[400] capitalize text-[0.5rem] lg:text-[1rem]">
          <p className="text-[#727272]"></p>
          <span className="flex gap-4 items-center">
            <Star />
            <span className="text-[#0076B4]">{rating}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

CustomTestimony.propTypes = {
  name: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  testimonial: propTypes.string.isRequired,
};

export default CustomTestimony;
