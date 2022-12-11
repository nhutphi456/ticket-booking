import React, { ReactNode } from "react";

const Header = React.lazy(() => import('../components/header'))
interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
