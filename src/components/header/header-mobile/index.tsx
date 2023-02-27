import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useAppSelector } from "../../../redux/hooks";
import * as Styled from "./styled";

const HeaderMobile = () => {
  const {
    auth: { isAuthenticated, user },
  } = useAppSelector((state) => state);
  const { logout } = useAuth();

  const items: MenuProps["items"] = isAuthenticated
    ? [
        {
          key: "1",
          label: (
            <Link to="/account">
              <span className="dropdown-menu-item">
                Tài khoản: {user && user.hoTen}
              </span>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <span onClick={logout} className="dropdown-menu-item log-out-btn">
              Đăng xuất
            </span>
          ),
        },
      ]
    : [
        {
          key: "1",
          label: (
            <Link to="/login">
              <span className="dropdown-menu-item">Đăng nhập</span>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to="/signup">
              <span className="dropdown-menu-item">Đăng ký</span>
            </Link>
          ),
        },
      ];

  return (
    <Styled.HeaderMobile>
      <div className="container">
        <div className="header-mobile-wrapper">
          <Link to="/">
            <div className="logo-container">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="logo"
              />
            </div>
          </Link>
          <div className="header-right">
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              overlayClassName="menu-dropdown"
            >
              <div className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </Styled.HeaderMobile>
  );
};

export default HeaderMobile;
