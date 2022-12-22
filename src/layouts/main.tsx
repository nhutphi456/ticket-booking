import React, { ReactNode } from "react";

const Header = React.lazy(() => import("../components/header"));
interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <main style={{ paddingTop: "88px" }}>{children}</main>
    </React.Fragment>
  );
};

export default MainLayout;
