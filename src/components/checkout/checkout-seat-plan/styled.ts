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
    @media (max-width: 480px) {
      width: 90%;
      padding: 15px 0px;
    }
  }
  .seat-container {
    width: calc(100% - 100px);
    background-color: #001232;
    @media (max-width: 1080px) {
      width: 100%;
    }
  }
  .seats {
    width: 85%;
    margin: 0 auto;
    .screen {
      text-align: center;
      position: relative;
      img {
        height: 50px;
        width: 100%;
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
    @media (max-width: 480px) {
      width: 90%;
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
      @media (max-width: 480px) {
        font-size: 24px;
      }
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
      @media (max-width: 480px) {
        p {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 1280px) {
    width: 72%;
  }
  @media (max-width: 1080px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
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
      @media (max-width: 480px) {
        width: 100px;
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    .username {
      color: #fff;
    }
    @media (max-width: 480px) {
      .username {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 1280px) {
    width: 72%;
  }
  @media (max-width: 1080px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    padding: 10px 15px;
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
  @media (max-width: 1080px) {
    width: 0;
  }
`;

export const Seats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  .theater-row {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    @media (max-width: 480px) {
      width: auto;
    }
  }
  .row-name {
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 2%;
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
    @media (max-width: 1080px) {
      gap: 3px;
    }
  }

  @media (max-width: 480px) {
    gap: 5px;
    overflow-x: scroll;
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
  @media (max-width: 1280px) {
    .seat {
      width: 32px;
    }
  }
  @media (max-width: 1080px) {
    // height: 23.5px;
    .seat {
      width: 30px;
    }
    .seat-name {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    height: 25px;
    .seat {
      width: 25px;
    }
  }
`;

export const ProfileImage = styled.div<{ bgUrl: string }>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 5px;
  background: url(${(props) => props.bgUrl}) no-repeat center;
  background-size: cover;
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;
