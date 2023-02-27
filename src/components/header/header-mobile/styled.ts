import styled from "styled-components";
import { Drawer } from "antd";
export const HeaderMobile = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.102);
  background: #0a1e5e;
  .header-mobile-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-icon {
    > svg {
      font-size: 30px;
    }
  }
  .logo-container {
    display: flex;
    align-items: center;
    img {
      @media (max-width: 480px) {
        width: 100px;
      }
    }
  }
  .menu-dropdown {
    background-color: red;
  }
`;

export const SideBar = styled(Drawer)`
  .ant-drawer-header-title {
    justify-content: end !important;
  }
  .ant-drawer-header {
    background-color: #0a1e5e;
  }
  .ant-drawer-body {
    padding: 20px;
    background-color: #0a1e5e;
    button {
      display: block;
      width: 100%;
      height: auto;
      padding: 10px;
      font-size: 16px;
      []font-weight: 700;
      &:last-child {
        margin-top: 5px;
      }
    }
  }
`;
