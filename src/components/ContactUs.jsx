const ContactUs = () => {
  return (
    <div className="h-fit lg:pb-20 py-6 w-full flex flex-col justify-center items-center">
      <header className="font-semibold flex items-center flex-col gap-3 w-full">
        <div className="flex flex-col items-center w-full px-4">
          <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mb-4"></div>
          <h1 className="text-[#0076B4] text-[1.125rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.4375rem] font-bold text-center">
            Contact Us
          </h1>
          <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mt-4"></div>
        </div>
      </header>
      <div className="flex w-[80%] justify-between gap-16 pt-16">
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
          <header className="text-white text-[0.9375rem] lg:text-[2.5rem] font-[400] tracking-[0.01563rem]">
            Stay In Touch With Us
          </header>

          {/* Form */}
          <form className="flex flex-col items-start w-[85%] gap-4 lg:gap-9">
            <input
              type="text"
              className="px-5 placeholder-gray-500  border border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full h-[2.10125rem] lg:h-[3.2rem] outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="px-5 placeholder-gray-500  border border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full h-[2.10125rem] lg:h-[3.2rem] "
              placeholder="Email"
            />
            <input
              type="text"
              className=" px-5 placeholder-gray-500 border border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full h-[2.10125rem] lg:h-[3.2rem] outline-none"
              placeholder="Subject"
            />
            <textarea
              rows="8"
              className="px-5 placeholder-gray-500 border border-black-1px rounded-lg input_Section text-[0.625rem] lg:text-[1rem] w-full outline-none pt-2"
              placeholder="Type Message Here..."
            ></textarea>
            <button className="px-28 py-2 mx-[20%] bg-[#0076B4] rounded-[1.875rem] tracking-wider active:bg-blue-900 text-white self-center lg:self-start lg:text-[1rem] text-[0.6875rem] font-[600]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
