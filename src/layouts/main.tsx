import React, { ReactNode } from "react";
import Footer from "../components/footer";
import HeaderMobile from "../components/header/header-mobile";
import Layer from "../components/page-layer";
import useMobile from "../hooks/useMobile";
import * as Styled from "./styled";

const Header = React.lazy(() => import("../components/header"));
interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  const isMobile = useMobile();

  return (
    <React.Fragment>
      {!isMobile ? <Header /> : <HeaderMobile />}
      <Styled.MainContainer>
        {children}
        <Layer />
      </Styled.MainContainer>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
