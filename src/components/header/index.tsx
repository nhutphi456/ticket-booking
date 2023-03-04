import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderAfterLogin from "./header-after-login";
import HeaderBeforeLogin from "./header-before-login";
import * as Styled from "./styled";

const Header = () => {
  const {
    auth: { isAuthenticated },
  } = useAppSelector((state) => state);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHeaderScroll = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", handleHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  return (
    <Styled.Header className={isActive ? "header-active" : ""}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-container">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="logo"
              />
            </Link>
          </div>
          <div className="header-right">
            <div className="header-buttons">
              {/* <Link to="/test">to test</Link> */}
              {isAuthenticated ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
            </div>
          </div>
        </div>
      </div>
    </Styled.Header>
  );
};

export default Header;
