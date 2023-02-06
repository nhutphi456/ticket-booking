import styled from "styled-components";
import { Drawer } from "antd";
export const HeaderMobile = styled.div`
  // position: fixed;
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
    > div {
      width: 40px;
      height: 5px;
      background-color: grey;
      border-radius: 10px;
      // border-bottom: 5px solid grey;
      margin-top: 5px;
    }
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
      font-size: 16px;[]
      font-weight: 700;
      &:last-child {
        margin-top: 5px;
      }
    }
  }
`;
