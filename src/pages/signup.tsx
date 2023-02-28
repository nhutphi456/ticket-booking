import React from "react";
import SignUpForm from "../components/form/account/signup";
import AccountLayout from "../layouts/account-layout";

const SignupPage = () => {
  return (
    <AccountLayout>
      <SignUpForm />
    </AccountLayout>
  );
};

export default SignupPage;
