import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ILoginUser } from "../../../models/user";
import { useAppSelector } from "../../../redux/hooks";
import FormInput from "../../input";
import * as Styled from "./styled";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    auth: { loading, errorMessage },
  } = useAppSelector((state) => state);

  const onLogin = (values: ILoginUser) => {
    login(values);
  };

  return (
    <Styled.FormContainer>
      <div className="form-wrap">
        <div className="account-area">
          <div className="account-header">
            <p className="header-line-1">Hello</p>
            <p className="header-line-2">Welcome Back</p>
          </div>
          <div className="form-main">
            <Form form={form} layout="vertical" onFinish={onLogin}>
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
                <FormInput placeholder="Enter username" disabled={loading} />
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
                  disabled={loading}
                />
              </Form.Item>
              {errorMessage && (
                <div className="error-message-wrap">
                  <span>{errorMessage}</span>
                </div>
              )}
              <div className="btn-wrap">
                <Button
                  htmlType="submit"
                  className={loading ? "loading" : ""}
                  loading={loading}
                >
                  Log In
                </Button>
              </div>
            </Form>
          </div>
          <div className="form-footer">
            Don't have an account?
            <span className="link" onClick={() => navigate("/signup")}>
              {" "}
              Sign up now
            </span>
          </div>
        </div>
      </div>
    </Styled.FormContainer>
  );
};

export default LoginForm;
