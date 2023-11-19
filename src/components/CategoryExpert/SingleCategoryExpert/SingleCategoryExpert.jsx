const SingleCategoryExpert = ({ photo, title, desc }) => {
  return (
    <div className="category-expert__columns">
      <div className="category-expert__item">
        <div className="item__photo">
          <img src={photo} alt={title} />
        </div>
        <h6 className="item__title">{title}</h6>
        <p className="item__desc">{desc}</p>
        <a href="#more" className="item__more">
          Explore more
        </a>
      </div>
    </div>
  );
};

export default SingleCategoryExpert;
