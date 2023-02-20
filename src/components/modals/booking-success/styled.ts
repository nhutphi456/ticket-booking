import { Modal } from "antd";
import styled from "styled-components";

export const SuccessBookingModal = styled(Modal)`
  .booking-detail {
    display: flex;
  }
  .account-detail {
    margin-top: 15px;
    .title {
      font-size: 24px;
      font-weight: 600;
    }
    table {
      width: 100%;
      font-size: 18px;
      tr td {
        padding: 10px 0;
        border-top: 1px solid #dee2e6;
      }
    }
  }
  .noti {
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    margin-top: 10px;
  }
  .modal-title {
    font-size: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    .success-icon {
      margin-right: 10px;
      font-size: 32px;
      color: #16ff00;
    }
  }
  .modal-footer {
    display: flex;
    justify-content: space-between;
    button {
      width: 50%;
      padding: 10px 15px;
      height: auto;
    }
  }
  .movie-info {
    width: 70%;
    margin-left: 10px;
    p,
    table {
      line-height: 1.5;
      font-size: 17px;
      font-weight: 600;
    }
    table {
      width: 100%;
      tr td:first-child {
        width: 30%;
      }
    }
    .movie-name {
      font-size: 24px;
      font-weight: 600;
      padding-bottom: 5px;
      margin-bottom: 5px;
      border-bottom: 1px dashed #11326f;
    }
    .address {
      font-size: 14px;
      color: #9b9b9b;
    }
    table {
      margin-top: 10px;
    }
    span.seat-number {
      &::after {
        content: ", ";
      }
      &:last-child::after {
        content: "";
      }
    }
  }
`;

export const MovieImage = styled.div<{ bgUrl: string }>`
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 190px;
  width: 30%;
  border-radius: 4px;
`;
