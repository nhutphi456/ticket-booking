import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";

interface Props {
  isOpen: boolean;
}
const TimeOutModal = ({ isOpen }: Props) => {
  const navigate = useNavigate();
  return (
    <Styled.TimeoutModal
      centered
      open={isOpen}
      closable={false}
      footer={[<Button onClick={() => navigate(0)}>Đặt vé lại</Button>]}
    >
      Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5
      phút.
    </Styled.TimeoutModal>
  );
};

export default TimeOutModal;
