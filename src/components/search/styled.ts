import { Select } from "antd";
import styled from "styled-components";

const Search = styled.div`
  margin-top: -150px;
  z-index: 9;
  .search-tab {
    background-image: url("/images/toolbar-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 30px;
    position: relative;
    z-index: 9;
    &:before {
      content: "";
      background-image: linear-gradient(0deg, #0f5ae0 0%, #7400ba 100%);
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: auto;
      z-index: -1;
    }

    @media (max-width: 768px) {
      padding: 20px 15px;
    }
    @media (max-width: 480px) {
      padding: 15px 10px;
    }
  }
  .search-tab-title {
    p:first-child {
      color: #31d7a9;
      font-weight: 600;
      margin-bottom: 16px;
      @media (max-width: 768px) {
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
    p:last-child {
      font-size: 28px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
  .search-tab-area {
    position: relative;
    margin-top: 30px;
    padding: 30px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    &:before {
      background-color: #000;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.4;
      width: 100%;
      height: calc(100% + 1px);
      z-index: -1;
    }
    @media (max-width: 768px) {
      margin-top: 15px;
      padding: 15px;
    }
  }
  .btn-container {
    width: 100%;
    margin-top: 10px;
    text-align: right;
    button {
      @media (max-width: 480px) {
        width: 100%;
        padding: 12px;
        height: auto;
        border-radius: 0;
      }
    }
  }
  .search-groups {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .search-group {
    flex: 1;
    width: 33.3333%;
    position: relative;
    display: flex;
    align-items: center;
    .thumb {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
        @media (max-width: 480px) {
          width: 30px;
          height: 30px;
        }
      }
    }
    .title {
      color: #31d7a9;
      @media (max-width: 480px) {
        font-size: 12px;
      }
    }
    .ant-select-selection-item {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 10px;
      display: block;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
const MovieSelect = styled(Select)`
  &.search-movie {
    width: 32.75%;
    .ant-select-selection-item {
      line-height: 41px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .ant-select-selector {
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    border-radius: 0;
    border-bottom: 1px solid #9eb1eb !important;
    height: 42px !important;
    .ant-select-selection-search {
      inset-inline: 0;
      .ant-select-selection-search-input {
        color: #dbe2fb !important;
        height: 45px !important;
        font-size: 16px;
        padding-right: 30px;
      }
    }
    .ant-select-selection-placeholder {
      color: #4c588f;
      line-height: 45px;
    }
  }
  &.ant-select-focused {
    .ant-select-selector {
      box-shadow: none !important;
    }
  }
  .ant-select-arrow {
    color: #90a5e8;
  }
`;

const GroupSelect = styled(Select)`
  width: 70%;
  .ant-select-selector {
    background: transparent !important;
    border: none !important;
    border-radius: 0;
    .ant-select-selection-placeholder {
      color: #4c588f;
    }
  }
  &.ant-select-open {
    .ant-select-selection-item {
      color: #fff;
    }
  }
  &.ant-select-focused {
    .ant-select-selector {
      box-shadow: none !important;
    }
  }
  .ant-select-arrow {
    color: #90a5e8;
  }
  .ant-select-selection-item {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    .ant-select-selector {
      padding: 0!important;
    }
  }
`;

export { Search, MovieSelect, GroupSelect };
