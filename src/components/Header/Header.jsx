import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Dots from "../../common/Dots/Dots";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            Experts.ai
          </Link>
          <div
            className="header__burger"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <Dots />
          </div>
          <nav className={`navbar ${openMenu ? "active" : ""}`}>
            <ul className="navbar__items">
              <li className="navbar__item">
                <Link to="/how-it-works" className="navbar__link">
                  How it works
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/about-us" className="navbar__link">
                  Abous us
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/services" className="navbar__link">
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
