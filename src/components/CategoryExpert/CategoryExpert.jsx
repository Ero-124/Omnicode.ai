import "./CategoryExpert.scss";
import SingleCategoryExpert from "./SingleCategoryExpert/SingleCategoryExpert";
import categoryPhoto1 from "./img/img.png";
import categoryPhoto2 from "./img/img2.png";
import categoryPhoto3 from "./img/img3.png";

const CategoryExpert = () => {
  return (
    <section className="category-expert">
      <div className="container">
        <div className="category-expert__title title">
          Browse expert by category
        </div>
        <div className="category-expert__wrapper">
          <SingleCategoryExpert
            photo={categoryPhoto1}
            title="Development & IT"
            desc="Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify."
          />
          <SingleCategoryExpert
            photo={categoryPhoto2}
            title="AI services"
            desc="Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify."
          />
          <SingleCategoryExpert
            photo={categoryPhoto3}
            title="Development & IT"
            desc="Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify."
          />
          <SingleCategoryExpert
            photo={categoryPhoto2}
            title="AI services"
            desc="Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify."
          />
          <SingleCategoryExpert
            photo={categoryPhoto3}
            title="Design & Creative"
            desc="Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify."
          />
          <SingleCategoryExpert
            photo={categoryPhoto1}
            title="Development & IT"
            desc="Nightingale's AI algorithms analyze vast amounts of biological and genetic data to identify."
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryExpert;
