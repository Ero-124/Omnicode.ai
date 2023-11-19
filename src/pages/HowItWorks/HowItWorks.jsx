import Dots from "../../common/Dots/Dots";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <div className="container">
        <div className="howItWorks__wrapper">
          <div className="title">AI Experts</div>
          <div className="dots__items">
            <Dots />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
