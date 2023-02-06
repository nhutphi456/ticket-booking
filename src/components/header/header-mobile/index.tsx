import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [getItem("Login", "1"), getItem("Join Us", "2")];
const HeaderMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
    <Styled.HeaderMobile className={isActive ? "header-active" : ""}>
      <div className="container">
        <div className="header-mobile-wrapper">
          <div className="logo-container">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
          </div>
          <div className="header-right">
            <div className="menu-icon" onClick={showDrawer}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Styled.SideBar 
              placement="right"
              onClose={onClose}
              open={open}
              theme="dark"
              contentWrapperStyle={{
                width: '100%',
                backgroundColor: '#0a1e5e'
              }}
            >
              <Button>Log In</Button>
              <Button>Join Us</Button>
            </Styled.SideBar>
          </div>
        </div>
      </div>
    </Styled.HeaderMobile>
  );
};

export default HeaderMobile;
