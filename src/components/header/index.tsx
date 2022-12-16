import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderAfterLogin from "./header-after-login";
import HeaderBeforeLogin from "./header-before-login";
import * as Styled from "./styled";

const Header = () => {
  const {
    auth: { isAuthenticated },
  } = useAppSelector((state) => state);

  return (
    <Styled.Header>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="logo-container">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
          </div>
          <div className="header-right">
            <div className="header-buttons">
              <Link to="/test">to test</Link>
              {isAuthenticated ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
            </div>
          </div>
        </div>
      </div>
    </Styled.Header>
  );
};

export default Header;
