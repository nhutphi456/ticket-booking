import styled from "styled-components";

export const CheckoutSidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 25%;
  height: 100vh;
  background-color: #0a1e5e;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 15px;
  z-index: 100;
  .booking-info {
    padding: 0 8%;
    > div {
      padding: 12px 0;
      border-bottom: 1px dashed #11326f;
    }
  }
  .total-price {
    font-size: 41px;
    text-align: center;
    font-weight: 600;
    line-height: 60px;
    color: #31d7a9;
  }
  .movie-info {
    line-height: 1.4;
    font-size: 14px;
    color: #9aace5;
    .movie-name {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
  }
  .seat-info {
    display: flex;
    justify-content: space-between;
    .seat-name {
      &::after {
        content: ", ";
      }
      &:last-child::after {
        content: "";
      }
    }
    .seat-price {
      width: 40%;
      color: #31d7a9;
      font-weight: 600;
      text-align: right;
    }
  }
  .email,
  .phone {
    p:first-child {
      color: #9aace5;
    }
    p:last-child {
      margin-top: 2px;
    }
  }
  .payment {
    p:first-child {
      color: #9aace5;
    }
    .payment-options {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }
    .option {
      a {
        display: inline-block;
        text-decoration: unset;
        color: #fff;
        width: 90px;
        height: 100%;
        border-radius: 10px;
        border: 1px solid #11326f;
        text-align: center;
        padding: 20px 10px 18px;
        img {
          max-width: 100%;
          margin-top: auto;
          margin-bottom: 10px;
          height: auto;
        }
        span {
          font-size: 12px;
          line-height: 1.2;
        }
      }
      &:last-child {
        a img {
          margin-top: 12px;
        }
      }
      &.active {
        a {
          border-color: #4441e7;
          border-width: 2px;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: -20px;
            right: -20px;
            width: 40px;
            height: 40px;
            background-color: #0a1e5e;
          }
          &::after {
            content: "";
            position: absolute;
            top: -15px;
            right: -15px;
            width: 30px;
            height: 30px;
            background: url("/images/check.png");
          }
        }
      }
    }
  }
  .checkout-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .ant-btn {
      width: 100%;
      height: auto;
      font-size: 25px;
      font-weight: 600;
      padding: 15px 0;
      border-radius: 0;
      &:disabled {
        color: #fff;
        background-color: rgb(175, 175, 175);
        background-image: none;
      }
    }
  }
`;
