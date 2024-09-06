const MotoSection = () => {
  return (
    <div className="relative h-fit py-12 pt-16 flex justify-center items-center font-thin">
      <div className="relative h-fit w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-700 flex items-center">
        {/* Full Cover Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent"></div>

        <div className="relative w-full lg:w-2/3 pt-4 lg:pl-20 flex h-fit flex-col lg:items-start items-center gap-4">
          {/* Header Section */}
          <header className="text-white font-[400] lg:block flex flex-col items-center">
            <p className="text-[1.625rem] lg:text-[4rem] font-bold">SIDLABS</p>
            <span className="text-[1.25rem] lg:text-[2.5rem] font-medium">
              Your Destination for Innovation
            </span>
          </header>

          {/* Mobile Image (visible only on mobile) */}
          <div className="lg:hidden">
            <img
              src="https://sidlabs-demo.vercel.app/assets/Destination-Image-eb10ae12.png"
              alt="Mobile Destination"
              height={400}
              width={300}
            />
          </div>

          {/* Additional Text */}
          <span className="lg:w-[75%] w-[90%] text-center lg:text-left text-[0.625rem] text-white lg:text-[1.25rem] font-[400] lg:pb-0 pb-4">
            Our suite of products represents three distinct stores in our
            innovation mall. Each store is a world in itself, driven by the
            relentless pursuit of excellence and global human upgradation.
          </span>
        </div>

        {/* Desktop Image (visible only on desktop) */}
        <div className="w-1/3 mr-28 mt-6 hidden lg:block">
          <img
            src="https://sidlabs-demo.vercel.app/assets/Destination-Image-eb10ae12.png"
            alt="Destination"
          />
        </div>
      </div>
    </div>
  );
};

export default MotoSection;
