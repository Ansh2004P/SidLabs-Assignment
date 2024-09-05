const ContactUs = () => {
  return (
    <div className="h-fit lg:py-20 py-6 w-full flex justify-center items-center">
      <div className="flex w-[80%] justify-between gap-16">
        {/* Desktop Image */}
        <div className="hidden lg:block">
          <img
            src={
              "https://sidlabs-demo.vercel.app/assets/ContactUS-75c9fb9e.png"
            }
            alt="Contact Us"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-[65%] h-fit flex flex-col items-center lg:items-start gap-4">
          <header className="text-black bebas text-[0.9375rem] lg:text-[2.25rem] font-[400] tracking-[0.01563rem]">
            Stay In Touch With Us
          </header>

          {/* Mobile Image */}
          <div className="lg:hidden block w-[65%] ">
            <img
              src={
                "https://sidlabs-demo.vercel.app/assets/ContactUS-75c9fb9e.png"
              }
              alt="Contact Us Mobile"
            />
          </div>

          {/* Form */}
          <form className="flex flex-col items-start w-[85%] gap-4 lg:gap-9">
            <input
              type="text"
              className="px-2 border border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full h-[2.10125rem] lg:h-[3.2rem] outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="px-2 border border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full h-[2.10125rem] lg:h-[3.2rem] "
              placeholder="Email"
            />
            <input
              type="text"
              className="border px-2 border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full h-[2.10125rem] lg:h-[3.2rem] outline-none"
              placeholder="Subject"
            />
            <textarea
              rows="8"
              className="border px-2 border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full outline-none pt-2"
              placeholder="Type Message Here"
            ></textarea>
            <button className="px-8 py-2 bg-[#0076B4] rounded-[1.875rem] tracking-wider active:bg-blue-900 text-white self-center lg:self-start lg:text-[1rem] text-[0.6875rem] font-[600]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
