import styled from "styled-components";

export const Account = styled.div`
  padding-top: 100px;
  .card {
    padding: 30px;
    margin-bottom: 30px;
    background: #032055;
    .title {
      border-bottom: 1px dashed #11326f;
      padding-bottom: 23px;
      margin-bottom: 30px;
      font-size: 24px;
    }
    @media (max-width: 480px) {
      padding: 15px;
    }
  }
  .ant-input,
  .ant-input-password > .ant-input {
    border-radius: 0px;
    background-color: transparent;
    color: #fff;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #23334f;
    font-size: 16px;
    &::placeholder {
      color: #4c588f;
    }
    &:hover {
      border-color: #23334f;
    }

    &:focus {
      border: none;
      box-shadow: none !important;
      border-bottom: 1px solid #23334f;
    }
    &.ant-input-disabled {
      color: #fff;
    }
  }
  .ant-input-password {
    padding: 0;
    background: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #23334f;
    > .ant-input {
      border: none;
      &:focus {
        border: none;
      }
    }
    &:hover {
      border-color: #23334f;
    }
    .ant-input-password-icon {
      color: #4c588f;
      &:hover svg {
        color: #4c588f;
      }
    }
  }
  .ant-input-affix-wrapper-focused.ant-input-password {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid #23334f;
  }

  .total-expense {
    font-size: 38px;
    font-weight: 600;
    line-height: 60px;
    color: #31d7a9;
  }

  @media (max-width: 480px) {
    padding-top: 50px;
  }
`;
export const AccountDetail = styled.div`
  button {
    width: 50%;
    height: 46px;
  }
  .ant-form-item-label label {
    color: #fff;
  }
  .ant-form-item {
    @media (max-width: 480px) {
      margin-bottom: 0;
    }
  }
`;

export const BookingHistory = styled.div`
  .seat-name {
    &::after {
      content: ", ";
    }
    &:last-child::after {
      content: "";
    }
  }
  .ant-pagination-item a,
  .ant-pagination-item-link svg {
    color: #fff;
  }
  .ant-pagination-item-ellipsis {
    color: #fff !important;
  }
  .ant-pagination-item-active a {
    color: rgba(0, 0, 0, 0.88);
  }
`;
