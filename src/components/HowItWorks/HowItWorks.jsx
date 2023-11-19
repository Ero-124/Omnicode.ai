import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__wrapper">
          <div className="how-it-works__columns">
            <div className="how-it-works__item">
              <span className="item__number">1</span>
              <span className="item__radius violet"></span>
              <div className="item__title">
                Target Identification and Prioritization
              </div>
              <div className="item__desc">
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </div>
            </div>
          </div>

          <div className="how-it-works__columns">
            <div className="how-it-works__item">
              <span className="item__number">2</span>
              <span className="item__radius blue"></span>
              <div className="item__title">
                Target Identification and Prioritization
              </div>
              <div className="item__desc">
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </div>
            </div>
          </div>

          <div className="how-it-works__columns">
            <div className="how-it-works__item">
              <span className="item__number">3</span>
              <span className="item__radius pink"></span>
              <div className="item__title">
                Target Identification and Prioritization
              </div>
              <div className="item__desc">
                Nightingale's AI algorithms analyze vast amounts of biological
                and genetic data to identify.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
