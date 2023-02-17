import styled from "styled-components";

export const SeatPlan = styled.div`
  position: relative;
  width: 75%;
  height: 100vh;
  .seat-area {
    position: relative;
    margin-top: 65px;
    display: flex;
  }
  .seat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 82%;
    margin: 0 auto;
  }
  .seat-container {
    width: calc(100% - 100px);
    background-color: #001232;
  }
  .seats {
    .screen {
      text-align: center;
      position: relative;
      img {
        height: 50px;
        width: 85%;
      }
      .screen-text {
        position: absolute;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
  .theater-info {
    .theater-name {
      color: #fff;
    }
    .show-time {
      font-size: 14px;
      color: #dbe2fb;
      margin-top: 5px;
    }
  }
  .counter-container {
    text-align: center;
    .counter-head {
      font-size: 12px;
    }
    .counter {
      font-size: 36px;
      font-weight: 600;
    }
  }
  .re-book {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: 999;
  }
`;

export const SeatPlanHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  padding: 10px 20px;
  background: #0a1e5e;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transform: scale(0.8);
    }
  }
  .profile {
    display: flex;
    align-items: center;
  }
`;

export const SeatPlanMovieThumb = styled.div<{ bgUrl: string }>`
  position: relative;
  height: 100vh;
  width: 100px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
`;

export const Seats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  .theater-row {
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .row-name {
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    span {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .seat-row {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .seat-note {
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-top: 15px;
    .note-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        display: flex;
        width: 30px;
      }
      p {
        margin-top: 5px;
      }
    }
  }
`;

export const Seat = styled.div`
  height: 32.5px;
  position: relative;
  .seat {
    cursor: pointer;
    width: 35px;
    &.booked {
      cursor: not-allowed;
    }
  }
  .seat-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

export const ProfileImage = styled.div<{ bgUrl: string }>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 5px;
  background: url(${(props) => props.bgUrl}) no-repeat center;
  background-size: cover;
`;
