import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { ILoginUser } from "../../../models/user";
import { authApi } from "../../../services/auth";
import useAuth from "../../../hooks/useAuth";

interface Props {
  isOpen: boolean;
  onCancel: () => void;
}
const LoginModal = ({ isOpen, onCancel }: Props) => {
  const [form] = Form.useForm();
  const { login } = useAuth();
  const onFinish = async (values: ILoginUser) => {
    await login(values);
    onCancel();
  };
  return (
    <Modal title="Login" open={isOpen} onCancel={onCancel}>
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Username" name="taiKhoan">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="matKhau">
          <Input />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </Modal>
  );
};

export default LoginModal;
