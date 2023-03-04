import styled from "styled-components";

export const Footer = styled.div`
  position: relative;
  margin-top: 100px;
  overflow: hidden;
  .newsletter-section {
    padding-bottom: 120px;
  }
  .newsletter-container {
    background-image: url("/images/newsletter-bg01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    padding: 60px 20px;
    text-align: center;
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(0deg, #7400ba 0%, #0f5ae0 100%);
      opacity: 0.8;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
    }
  }
  .newsletter-wrapper {
    max-width: 540px;
    margin: 0 auto;
    position: relative;
    z-index: 3;
    .cate {
      color: #31d7a9;
      margin-bottom: 23px;
      text-transform: uppercase;
      font-size: 24px;
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
    .title {
      margin-bottom: 50px;
      text-transform: uppercase;
      font-size: 36px;
      @media (max-width: 480px) {
        font-size: 20px;
      }
    }
    .newsletter-form {
      margin-bottom: 34px;
      position: relative;
      input {
        width: 100%;
        height: 50px;
        padding-right: 160px;
        color: #99abe2;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 25px;
        padding-left: 20px;
        box-shadow: 0px 3px 10px 0px rgb(0 0 0 / 10%);
        background: transparent;
        &:focus-visible {
          outline: none;
        }
      }
      button {
        position: absolute;
        right: 0;
        top: 0;
        background-image: -webkit-linear-gradient(
          169deg,
          #5560ff 17%,
          #aa52a1 63%,
          #ff4343 100%
        );
        box-shadow: 0px 10px 15px 0px rgb(59 55 188 / 50%);
        width: auto;
        height: 100%;
        padding: 0 40px;
        border-radius: 25px;
        border: none;
        color: #dbe2fb;
        font-size: 18px;
        text-transform: capitalize;
        cursor: pointer;
        @media (max-width: 480px) {
          padding: 0 20px;
          font-size: 16px;
        }
      }
    }
  }
  .footer-top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
    .logo {
      padding-bottom: 20px;
    }
    .social-icons {
      display: flex;
      li {
        cursor: pointer;
        padding: 7.5px;
        .icon {
          display: inline-block;
          width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 14px;
          transition: all 0.5s;
        }
        &:hover {
          .icon {
            background: #31d7a9;
            border-color: #31d7a9;
          }
        }
      }
    }
    @media (max-width: 480px) {
      display: block;
    }
  }
  .footer-bottom {
    padding: 25px 0;
    .footer-bottom-area {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap-reverse;
      .left {
        margin-bottom: 25px;
        a {
          color: #31d7a9;
          text-decoration: none;
        }
      }
      .links {
        margin: 0 -15px;
        margin-bottom: 25px;
        display: flex;
        flex-wrap: wrap;
        li {
          padding: 0 15px;
          cursor: pointer;
          line-height: 1.2;
        }
      }
    }
  }
  li span {
    color: #dbe2fb;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 80px;
    mask-image: url(/images/footer-shape.png);
    mask-position: top center;
    mask-repeat: no-repeat;
    mask-size: cover;
    background: #0a1e5e;
    z-index: -2;
  }
`;
