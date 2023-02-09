import React from "react";
import { Tabs, TabsProps } from "antd";
import * as Styled from './styled'

const StyledTabs = ({ ...props }: TabsProps) => {
  return <Styled.CustomTabs {...props} />;
};

export default StyledTabs;
