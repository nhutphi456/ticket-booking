import { ReactNode } from "react";
import { AccountContainer } from "./styled";

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return <AccountContainer>{children}</AccountContainer>;
};

export default AccountLayout;
