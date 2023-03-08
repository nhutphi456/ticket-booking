import { Collapse, Tabs } from "antd";
import styled from "styled-components";

export const TabsContainer = styled.div`
  .title {
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    color: #31d7a9;
  }
`;
export const CinemaTabs = styled(Tabs)`
  max-height: 705px;
  // overflow: hidden scroll;
  .ant-tabs-nav {
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
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
    @media (max-width: 480px) {
      bottom: -10px;
    }
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
        @media (max-width: 480px) {
          gap: 2px;
        }
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
    @media (max-width: 480px) {
      width: calc(100% - 28px);
    }
  }
  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const CinamaCollapse = styled(Collapse)`
  border: none;
  border-radius: 0;
  .ant-collapse-content {
    background-color: #011943;
    .ant-collapse-content-box {
      padding: 0;
    }
  }
  .cinema-branch {
    color: #fff;
  }
  .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 0px !important;
  }
  .ant-collapse-item {
    border-bottom: none;
    .ant-collapse-header {
      padding: 20px 16px;
      .ant-collapse-header-text {
        width: 100%;
      }
      .ant-collapse-expand-icon {
        display: none;
      }
      @media (max-width: 480px) {
        padding: 10px;
      }
    }
    .ant-collapse-arrow {
      color: #fff !important;
    }
  }
`;
