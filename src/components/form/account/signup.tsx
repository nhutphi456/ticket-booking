import React from "react";
import { Button, Form } from "antd";
import * as Styled from "./styled";
import { useForm } from "antd/es/form/Form";
import FormInput from "../../input";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useAppSelector } from "../../../redux/hooks";

interface ISignupFormValue {
  taiKhoan: string;
  matKhau: string;
  confirm: string;
  email: string;
}
const SignUpForm = () => {
  const { signup, login } = useAuth();
  const {
    auth: { signUpLoading, signUpErrorMessage, successSignUpUser },
  } = useAppSelector((state) => state);
  const [form] = useForm();
  const navigate = useNavigate();

  const onSignUp = async (values: ISignupFormValue) => {
    console.log("signup", values);
    const { taiKhoan, matKhau, email } = values;
    const params = {
      taiKhoan,
      matKhau,
      email,
      soDt: "012345678",
      maNhom: "GP03",
      maLoaiNguoiDung: "KhachHang",
      hoTen: taiKhoan,
    };
    await signup(params);
    if (successSignUpUser) {
      await login({
        taiKhoan: successSignUpUser.taiKhoan,
        matKhau: successSignUpUser.matKhau,
      });
      navigate("/");
    }
  };

  return (
    <Styled.FormContainer>
      <div className="form-wrap">
        <div className="account-area">
          <div className="account-header">
            <p className="header-line-1">Welcome</p>
            <p className="header-line-2">To boleto</p>
          </div>
          <div className="form-main">
            <Form form={form} layout="vertical" onFinish={onSignUp}>
              <Form.Item
                name="taiKhoan"
                label="Login Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter username",
                  },
                ]}
              >
                <FormInput
                  placeholder="Enter username"
                  disabled={signUpLoading}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email",
                  },
                ]}
              >
                <FormInput placeholder="Enter email" disabled={signUpLoading} />
              </Form.Item>
              <Form.Item
                name="matKhau"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password",
                  },
                ]}
              >
                <FormInput
                  placeholder="Enter password"
                  type="password"
                  disabled={signUpLoading}
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter password",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("matKhau") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <FormInput
                  placeholder="Enter password"
                  type="password"
                  disabled={signUpLoading}
                />
              </Form.Item>
              {signUpErrorMessage && (
                <div className="error-message-wrap">
                  <span>{signUpErrorMessage}</span>
                </div>
              )}
              <div className="btn-wrap">
                <Button
                  htmlType="submit"
                  className={signUpLoading ? "loading" : ""}
                  loading={signUpLoading}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </div>
          <div className="form-footer">
            Already have an account?
            <span className="link" onClick={() => navigate("/login")}>
              {" "}
              Login
            </span>
          </div>
        </div>
      </div>
    </Styled.FormContainer>
  );
};

export default SignUpForm;
