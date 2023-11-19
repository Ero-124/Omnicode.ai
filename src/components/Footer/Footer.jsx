import "./Footer.scss";
import InstagramPhoto from "./img/instagram.png";
import FacebookPhoto from "./img/facebook.png";
import LinkedinPhoto from "./img/linkedin.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__social">
            <div className="footer__logo">Experts.ai</div>
            <ul className="social__links">
              <li>
                <a href="#facebook" title="Go to Facebook">
                  <img src={FacebookPhoto} alt="Logo Facebook" />
                </a>
              </li>
              <li>
                <a href="#instagram" title="Go to Instagram">
                  <img src={InstagramPhoto} alt="Logo Instagram" />
                </a>
              </li>
              <li>
                <a href="#linkedin" title="Go to Linkedin">
                  <img src={LinkedinPhoto} alt="Logo Linkedin" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__navigation">
            <ul className="navigation__list">
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
            </ul>
            <strong>Terms of Use & Privacy Policy</strong>
          </div>
        </div>
        <strong className="footer__copyright">
          © 2022 Experts | All rights reserved.
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
