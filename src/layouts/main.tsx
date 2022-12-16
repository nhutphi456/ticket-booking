import React, { ReactNode } from "react";

const Header = React.lazy(() => import("../components/header"));
interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ paddingTop: "88px" }}>{children}</div>
    </React.Fragment>
  );
};

export default MainLayout;
