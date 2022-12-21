import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
  border-radius: 0px;
  background-color: transparent;
  color: #fff;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #23334f;
  font-size: 16px;
  &::placeholder {
    color: #4c588f;
  }
  &:hover {
    border-color: #23334f;
  }

  &:focus {
    border: none;
    box-shadow: none !important;
    border-bottom: 1px solid #f1481f;
  }
  &.ant-input-disabled {
    color: #fff;
  }
`;
