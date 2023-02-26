import { Tabs } from "antd";
import styled from "styled-components";

export const CustomTabs = styled(Tabs)`
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
  @media (max-width: 480px) {
    max-height: unset;
  }
`;
