import styled from "styled-components";

export const Loading = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #001232;
  z-index: 999999;
  overflow: hidden;
  @keyframes ldio-3jj2riu3jxm {
    0% {
      top: 86px;
      left: 86px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 53px;
      left: 53px;
      width: 66px;
      height: 66px;
      opacity: 0;
    }
  }
  .ldio-3jj2riu3jxm div {
    position: absolute;
    border-width: 14px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-3jj2riu3jxm 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .ldio-3jj2riu3jxm div:nth-child(1) {
    border-color: #31d7a9;
    animation-delay: 0s;
  }
  .ldio-3jj2riu3jxm div:nth-child(2) {
    border-color: #31d7a9;
    animation-delay: -0.5s;
  }
  .loadingio-spinner-ripple-u6tb1zik42e {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #001232;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .ldio-3jj2riu3jxm {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-3jj2riu3jxm div {
    box-sizing: content-box;
  }
`;
