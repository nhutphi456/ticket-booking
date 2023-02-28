import styled from "styled-components";

export const FormContainer = styled.div`
  width: 1170px;
  height: 100vh;
  margin: auto;
  padding: 0 15px;
  .form-wrap {
    padding: 60px 0;
  }
  .account-area {
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    padding: 60px 45px;
    background-color: rgba(68, 90, 153, 0.051);
    box-shadow: 0px 0px 29.4px 0.6px rgb(0 0 0 / 50%);
    .account-header {
      margin-bottom: 37px;
      .header-line-1 {
        text-align: center;
        font-size: 24px;
        margin-bottom: 25px;
        color: #31d7a9;
        text-transform: uppercase;
        letter-spacing: 1px;
        @media (max-width: 480px) {
          font-size: 18px;
          margin-bottom: 15px;
        }
      }
      .header-line-2 {
        font-size: 40px;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        letter-spacing: 2px;
        @media (max-width: 480px) {
          font-size: 24px;
        }
      }
    }
  }
  .form-main {
    .ant-form-item-label label {
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
    }
    .ant-form-item {
      margin-bottom: 30px;
    }
    .btn-wrap {
      text-align: center;
      margin-bottom: 22px;
      .ant-btn {
        padding: 0 50px;
        height: 50px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
    .error-message-wrap {
      color: #ff4d4f;
      margin-bottom: 22px;
    }
  }
  .form-footer {
    text-align: center;
    color: #fff;
    .link {
      cursor: pointer;
      color: #31d7a9;
    }
  }
  @media (max-width: 1280px) {
    width: 800px;
  }
  @media (max-width: 768px) {
    width: 550px;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
    .form-wrap {
      padding: 0;
      height: 100vh;
    }
    .account-area {
      padding: 30px 20px;
      height: 100%;
    }
  }
`;
