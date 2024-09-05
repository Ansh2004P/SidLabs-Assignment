import HeaderLogo from "./HeaderLogo";
import {
  WhatsApp,
  FaceBook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../utils/utils";

const Footer = () => {
  return (
    <div
      className="h-fit lg:pt-20 pt-6 bg-[#F7F9FC] flex justify-center items-end"
      data-aos="fade-in"
    >
      <div className="w-[90%] h-fit flex flex-col gap-3 lg:gap-8">
        <div className="flex lg:flex-row flex-col justify-center gap-4 lg:gap-0 lg:justify-between">
          <div className="lg:w-full flex flex-col lg:items-start items-center gap-4 lg:gap-8">
            <HeaderLogo />
            <div className="flex w-full flex-col lg:flex-row gap-3 lg:gap-0 lg:items-start items-center justify-between lg:pr-40 pr-0">
              <h3 className="text-[0.9rem] lg:text-start text-center lg:text-[1rem] text-[#040505] font-[400]">
                Join us on this extraordinary journey as we redefine the limits
                of human potential. Together, we are forging a brighter
                future—one innovation at a time.
              </h3>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row gap-3 lg:gap-0 lg:items-start items-center justify-between">
            <div className="lg:w-[30%] text-center lg:text-left">
              <h1 className="text-[rgba(4, 5, 5, 0.80)] text-[0.9rem] lg:text-[1rem]">
                Address
              </h1>
              <span className="text-[0.9rem] lg:text-[1rem] text-[#040505]">
                SidLabs, Asaf Ali Road, New Delhi-110002
              </span>
            </div>
            <div className="lg:w-[30%] text-center lg:text-left">
              <h1 className="text-[rgba(4, 5, 5, 0.80)] text-[0.9rem] lg:text-[1rem]">
                Email
              </h1>
              <span className="text-[0.9rem] lg:text-[1rem] text-[#040505]">
                info@sidlabs.net
              </span>
            </div>
            <div className="w-[90%] lg:w-[30%] text-center lg:text-left">
              <h1 className="text-[rgba(4, 5, 5, 0.80)] text-[0.9rem] lg:text-[1rem]">
                Chat with us!
              </h1>
              <WhatsApp />
            </div>
          </div>
        </div>
        <div className="border border-[rgba(0, 0, 0, 0.32)] w-[130%] -ml-10 lg:ml-0 lg:w-full"></div>
        <div className="flex lg:flex-row flex-col justify-between pb-6 lg:pb-12 items-center gap-3 lg:gap-0">
          <p className="text-[#040505] text-[0.5rem] lg:text-[0.875rem] font-[400] leading-[1.25rem]">
            Copyright © 2023 SidLabs. All rights reserved. Terms of Use &
            Privacy Policy
          </p>
          <div className="flex lg:gap-8 gap-4">
            <div className="rounded-[6.25rem] border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
              <FaceBook />
            </div>

            <div className="rounded-[6.25rem] bg-[#0077B5] border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
              <LinkedIn />
            </div>

            <div className="rounded-[6.25rem] border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
              <Twitter />
            </div>

            <div className="rounded-[6.25rem] border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
