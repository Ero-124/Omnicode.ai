import "./BrainSection.scss";

const BrainSection = () => {
  return (
    <section className="brain-section">
      <div className="brain-section__wrapper">
        <div className="brain-section__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="471"
            height="629"
            viewBox="0 0 471 629"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M-158 167.683C-158 161.003 -155.346 154.596 -150.623 149.873L-8.12724 7.37724C-3.40367 2.65367 3.00287 0 9.683 0H156.5H303.317C309.997 0 316.404 2.65368 321.127 7.37725L463.623 149.873C468.346 154.596 471 161.003 471 167.683V314.5V461.317C471 467.997 468.346 474.404 463.623 479.127L321.127 621.623C316.404 626.346 309.997 629 303.317 629H156.5H9.683C3.00285 629 -3.40367 626.346 -8.12724 621.623L-150.623 479.127C-155.346 474.404 -158 467.997 -158 461.317V314.5V167.683Z"
              fill="#232323"
            />
          </svg>
          <span>LOGO</span>
        </div>
        <div className="brain-section__content">
          <h3 className="content__title">The brains behind this</h3>
          <p>
            Our mission at <a href="">Experts.ai</a> is to bridge the gap
            between visionary businesses and exceptional AI talent. We believe
            that AI has the potential to revolutionize industries and create
            unprecedented value, but only when placed in the hands of those who
            truly understand its complexities and capabilities. We strive to
            facilitate collaborations that yield not only groundbreaking
            technological advancements but also foster learning and growth for
            both our clients and experts.
          </p>
          <p>
            We pride ourselves on being more than just a platform – we're a
            community where brilliance converges. Our platform serves as a hub
            where businesses seeking AI expertise can seamlessly connect with a
            curated network of AI specialists, data scientists, machine learning
            engineers, and visionaries. We meticulously vet our experts,
            ensuring that only the most accomplished and forward-thinking minds
            become part of the Experts.ai community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrainSection;
