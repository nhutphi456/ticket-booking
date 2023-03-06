import { Button, Col, Form, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import { updateAccountAction } from "../../redux/accountSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as Styled from "./styled";

interface FormValue {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDT: string;
}
const AccountDetail = () => {
  const [form] = useForm();
  const {
    account: { data, updateLoading, updateSuccessData },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    form.setFieldsValue({
      taiKhoan: data?.taiKhoan,
      matKhau: data?.matKhau,
      hoTen: data?.hoTen,
      email: data?.email,
      soDT: data?.soDT,
    });
  }, []);

  useEffect(() => {
    if (updateSuccessData && !updateLoading) {
      message.destroy();
      message.success("Cập nhật thông tin thành công!");
    }
  }, [updateSuccessData, updateLoading]);

  const onFinish = (values: FormValue) => {
    console.log("value", values);
    const { taiKhoan, matKhau, soDT, email, hoTen } = values;
    const params = {
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDt: soDT,
      maNhom: "GP09",
      maLoaiNguoiDung: "KhachHang",
    };

    dispatch(updateAccountAction(params));
  };
  return (
    <Styled.AccountDetail className="card">
      <h5 className="title">Thông tin tài khoản</h5>
      <div className="form-container">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={[40, 40]} align="middle">
            <Col sm={8} xs={24}>
              <Form.Item
                label="Tài khoản"
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tài khoản",
                  },
                ]}
              >
                <Input placeholder="Tài khoản" disabled />
              </Form.Item>
            </Col>
            <Col sm={8} xs={24}>
              <Form.Item
                label="Mật khẩu"
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
                  },
                ]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
            </Col>
            <Col sm={8} xs={24}>
              <Form.Item
              label="Họ tên"
                name="hoTen"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ tên",
                  },
                ]}
              >
                <Input placeholder="Họ tên" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[40, 40]} align="middle">
            <Col sm={8} xs={24}>
              <Form.Item
              label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col sm={8} xs={24}>
              <Form.Item
              label="Số điện thoại"
                name="soDT"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
            <Col sm={8} xs={24}>
              <Button htmlType="submit" loading={updateLoading}>
                Cập nhật
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Styled.AccountDetail>
  );
};

export default AccountDetail;
