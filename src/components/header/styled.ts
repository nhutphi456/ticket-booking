import styled from "styled-components";
import { Button } from "antd";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  backgroundcolor: "#fff";
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.102);
  &.header-active {
    background: #0a1e5e;
    border: none;
    animation-name: fadeInDown;
    animation-duration: 1s;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;F
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

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const LoginButton = styled(Button)``;

export { Header, LoginButton };
