import styled from "styled-components";
import { Button } from "antd";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 21px 0;
  backgroundcolor: "#fff";
  z-index: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.102);
  .header-container {
    width: 80%;
    margin: auto;
    .header-wrapper {
      display: flex;
      justify-content: space-between;F
    }
  }
  .header-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    .ant-btn {
      height: auto;
      font-size: 16px;
      font-weight: 600;
      padding: 10px 49px;
    }
    .welcome-text {
      color: #fff;
    }
  }
`;
const LoginButton = styled(Button)``;

export { Header, LoginButton };
