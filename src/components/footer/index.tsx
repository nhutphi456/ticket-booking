import {
  faFacebookF, faGoogle,
  faInstagram, faPinterest, faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import * as Styled from "./styled";

const Footer = () => {
  return (
    <Styled.Footer>
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <div className="newsletter-wrapper">
              <h5 className="cate">subscribe to Boleto </h5>
              <h3 className="title">to get exclusive benifits</h3>
              <form className="newsletter-form">
                <input type="text" placeholder="Your Email Address" />
                <button type="submit">subscribe</button>
              </form>
              <p>We respect your privacy, so we never share your info</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/footer-logo.png"}
                alt="footer-logo"
              />
            </Link>
          </div>
          <ul className="social-icons">
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faPinterest} />
              </span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faGoogle} />
              </span>
            </li>
            <li>
              <span className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-area">
            <div className="left">
              <p>
                Copyright © 2020.All Rights Reserved By{" "}
                <Link to="/">Boleto </Link>
              </p>
            </div>
            <ul className="links">
              <li>
                <span className="link-item">About</span>
              </li>
              <li>
                <span className="link-item">Terms Of Use</span>
              </li>
              <li>
                <span className="link-item">Privacy Policy</span>
              </li>
              <li>
                <span className="link-item">FAQ</span>
              </li>
              <li>
                <span className="link-item">Feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Styled.Footer>
  );
};

export default Footer;
