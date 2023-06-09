import { Collapse, Tabs } from "antd";
import styled from "styled-components";

export const DateTab = styled(Tabs)`
  .ant-tabs-tab-btn .date-header {
    font-size: 16px;
    text-transform: capitalize;
    text-align: center;
    p {
      line-height: 25px;
    }
  }
  .ant-tabs-nav {
    margin: 0;
  }
`;

export const ShowTimeDetailItem = styled.div`
  .item {
    padding: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #11326f;
    // line-height: 50px;
    &:first-child {
      border-top: 1px solid #11326f;
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
  .cinema-branch-info {
    display: flex;
    position: relative;
    color: #fff;
    width: 40%;
    .cinema-info {
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
    // &:after {
    //   content: "";
    //   position: absolute;
    //   bottom: -20px;
    //   width: 100%;
    //   border-bottom: 1px solid #8080803a;
    // }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .btn-container {
    display: flex;
    .btn-ticket {
      color: #fff;
      padding: 5px;
      width: 60px;
      margin: 5px;
      position: relative;
      background: #162f5f;
      text-align: center;
      -webkit-mask-image: url("/images/movie-ticket.png");
      mask-image: url("/images/movie-ticket.png");
      mask-size: 100% 100%;
      mask-repeat: no-repeat;
      mask-position: center;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background: #31d7a9;
      }
    }
  }
`;

export const DateCollapse = styled(Collapse)`
  border: none;
  border-radius: 0;
  .ant-collapse-content {
    background-color: #011943;
    .ant-collapse-content-box {
      padding: 0;
    }
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
      &::after {
        content: "";
        position: absolute;
        width: calc(100% - 20px);
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: 1px solid #8080803a;
      }
      @media (max-width: 480px) {
        padding: 20px 10px;
      }
    }
  }
  .date-header {
    color: #31d7a9;
    display: flex;
    > p:first-child {
      width: 30%;
    }
  }
`;
