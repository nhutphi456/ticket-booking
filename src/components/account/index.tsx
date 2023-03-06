import React from "react";
import { IBookingHistory } from "../../models/account";
import { useAppSelector } from "../../redux/hooks";
import { formatAmount } from "../../util/formatAmount";
import BookingHistory from "./account-booking-history";
import AccountDetail from "./account-detail";
import * as Styled from "./styled";

const AccountMain = () => {
  const {
    account: { data },
  } = useAppSelector((state) => state);
  const totalExpense = data?.thongTinDatVe.reduce(
    (acc, ticket: IBookingHistory) => acc + ticket.giaVe,
    0
  );

  return (
    <Styled.Account className="container">
      <div className="card">
        <h5 className="title">Tổng chi tiêu</h5>
        <p className="total-expense">{formatAmount(totalExpense)} đ</p>
      </div>
      <AccountDetail />
      <BookingHistory />
    </Styled.Account>
  );
};

export default AccountMain;
