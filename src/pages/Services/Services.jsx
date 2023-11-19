import Dots from "../../common/Dots/Dots";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="title">Services</div>
          <div className="dots__items">
            <Dots />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
