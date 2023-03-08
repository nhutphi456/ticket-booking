import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AccountMain from "../components/account";
import Loading from "../components/loading";
import MainLayout from "../layouts/main";
import { getAccountDetailAction } from "../redux/accountSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Account = () => {
  const { accountName } = useParams();
  const {
    account: { loading },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!accountName) return;
    dispatch(
      getAccountDetailAction({
        taiKhoan: accountName,
      })
    );
  }, [accountName, dispatch]);

  if (loading) return <Loading />;
  return (
    <MainLayout>
      <AccountMain />
    </MainLayout>
  );
};

export default Account;
