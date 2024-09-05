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

function App() {
  return (
    <>
      <div className="w-screen h-screen fixed">
        <Scrollbars autoHide className="flex-grow">
          <Header />
          <HeroSection />
          <MissionSection />
          <ExploreSection />
          <MotoSection />
          <InsightSection />
          <TestimonialSection />
          <ContactUs />
          <Footer />
        </Scrollbars>
      </div>
    </>
  );
}

export default App;
