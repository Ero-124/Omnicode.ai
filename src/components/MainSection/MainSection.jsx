import HowItWorksTitle from "../HowItWorks/HowItWorksTitle";
import "./MainSection.scss";
import MainSectionContent from "./MainSectionContent/MainSectionContent";
import MainSectionSlider from "./MainSectionSlider/MainSectionSlider";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="main-section__wrapper">
          <MainSectionContent />
          <MainSectionSlider />
        </div>
        <HowItWorksTitle />
      </div>
    </section>
  );
};

export default MainSection;
