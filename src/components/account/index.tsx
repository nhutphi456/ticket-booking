import React from "react";
import BookingHistory from "./account-booking-history";
import AccountDetail from "./account-detail";
import * as Styled from "./styled";

const AccountMain = () => {
  return (
    <Styled.Account className="container">
      <AccountDetail />
      <BookingHistory />
    </Styled.Account>
  );
};

export default AccountMain;
