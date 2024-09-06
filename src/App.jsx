import Scrollbars from "react-custom-scrollbars";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ExploreSection from "./components/ExploreSection";
import MotoSection from "./components/MotoSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import InsightSection from "./components/InsightSection";
import TestimonialSection from "./components/TestimonialSection";
import { useEffect, useRef, useState } from "react";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [scrollPosition, setScrollPosition] = useState({ y: 0 });
  const scrollbarsRef = useRef(null);

  const handleScroll = () => {
    const scrollbars = scrollbarsRef.current;
    setScrollPosition({
      y: scrollbars.getScrollTop(), // Update scroll position
    });
  };

  return (
    <>
      <div className="w-screen h-screen fixed bg-neutral-900 overflow-x-clip">
        <Scrollbars
          autoHide
          className="flex-grow"
          onScroll={handleScroll}
          ref={scrollbarsRef}
        >
          <Header isHeroInView={scrollPosition.y > window.innerHeight * 0.85} />
          <HeroSection />
          <MissionSection />
          <ExploreSection />
          {/* <MotoSection />   */}
          <InsightSection />
          <TestimonialSection />
          <ContactUs />
          <Footer />
          {/* <CustomCursor /> */}
        </Scrollbars>
      </div>
    </>
  );
}

export default App;
