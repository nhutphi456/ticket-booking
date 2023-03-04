import styled from "styled-components";

export const MovieDetailTab = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  .ant-tabs-tab {
    color: #fff;
    text-transform: uppercase;
    .ant-tabs-tab-btn {
      font-size: 18px;
      font-weight: 600;
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
    &.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #31d7a9;
    }
    &:hover .ant-tabs-tab-btn {
      color: #31d7a9;
    }
  }
  .ant-tabs-ink-bar {
    height: 3px !important;
    background: #31d7a9;
  }
  .no-show-time {
    font-size: 18px;
    color: #fff;
  }
`;

export const MovieDetailSummary = styled.div`
  font-size: 16px;
  color: #dbe2fb;
  line-height: 28px;
  text-align: justify;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
