import { Button, Tabs } from "antd";
import styled from "styled-components";

export const TheaterTabs = styled(Tabs)`
  // background-color: #032055;
  background-color: #0320557d;
  border: 1px solid #032055d8;
  min-height: 705px;
  max-height: 705px;
  color: #fff;
  .ant-tabs-tabpane {
    padding: 0 !important;
  }
  .ant-tabs-tab {
    margin: 0 !important;
    padding: 20px !important;
    opacity: 0.3;
    transition: all 0.2s;
    &:hover {
      opacity: 1;
    }
    &.ant-tabs-tab-active {
      opacity: 1;
    }
  }
  .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    display: none;
  }
  .ant-tabs-content-holder {
    margin-left: 0;
    border-left: 1px solid #032055d8;
  }
  .ant-tabs-nav-wrap {
    overflow: hidden auto !important;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #032055;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 10px;
    }
  }
  .logo-container {
    position: relative;
    height: 50px;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -20px;
      width: 100%;
      border-bottom: 1px solid #8080803a;
    }
  }
`;
export const CinemaTabs = styled(Tabs)`
  // width: 40%;
  max-height: 705px;
  // overflow: hidden scroll;
  .ant-tabs-nav {
    width: 40%;
  }
  .ant-tabs-tab {
    margin: 0 !important;
    padding: 20px 15px !important;
    color: #fff;
    &.ant-tabs-tab-active {
      color: #fff;
    }
  }
  .ant-tabs-tab-btn {
    width: 100%;
    color: #fff !important;
  }
  .ant-tabs-content-holder {
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #032055;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 10px;
    }
  }
`;

export const CinemaLabel = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  .cinema-info {
    padding-left: 10px;
    width: calc(100% - 60px);
    p {
      text-align: left;
      .cinema-name {
        font-weight: 600;
        &.bhd-star {
          color: #8bc541;
        }
        &.cgv {
          color: #e71a0f;
        }
        &.cinestar {
          color: #df0d7a;
        }
        &.galaxy {
          color: #ff751a;
        }
        &.lotte {
          color: #cf544b;
        }
        &.mega-gs {
          color: #eeb730;
        }
      }
    }
    .cinema-detail {
      overflow-wrap: break-word;
    }
    .cinema-address {
      color: #949494;
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100%;
    border-bottom: 1px solid #8080803a;
    // opacity: 0.3;
  }
`;

export const MovieShowTimeItem = styled.div`
  position: relative;
  padding: 20px 25px 17px 20px;
  .film-info {
    display: flex;
    .film-image {
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    }
    .film-detail {
      padding-left: 10px;
      color: #fff;
      .film-name {
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
      }
      .film-duration {
        font-size: 14px;
      }
    }
  }
  .film-show-time {
    color: #949494;
    .film-show-time-item {
      margin-bottom: 5px;
      .show-time-date {
        margin-bottom: 5px;
      }
      .show-time-buttons {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
      }
    }
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: calc(100% - 40px);
    transform: translateX(-50%);
    border-bottom: 1px solid #8080803a;
  }
`;

export const ShowTimeButton = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  background: none;
  background-color: transparent;
  color: #9b9b9b;
  border-radius: 7px;
  padding: 5px 5px;
  border: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  .start-time {
    color: #5b05b4;
    font-size: 17px;
    transition: all 0.5s;
  }
  &:hover {
    color: #9b9b9b !important;
    border-color: #e4e4e4 !important;
    .start-time {
      color: #dc496a;
    }
  }
`;
