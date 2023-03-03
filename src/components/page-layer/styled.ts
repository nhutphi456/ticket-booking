import styled from "styled-components";

export const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #001232;
  z-index: 9999;
  animation-name: fadeOut;
  animation-duration: 1s;
  animation-iteration-count: 1;
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      display: none;
    }
  }
`;
