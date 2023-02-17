import { useTimer } from "../../../hooks/useTimer";
import { useAppSelector } from "../../../redux/hooks";
import { Modal } from 'antd';
import CheckoutSeatPlanHeader from "./checkout-seat-plan-header";
import Seats from "./checkout-seats";
import * as Styled from "./styled";
import TimeOutModal from "../../modals/time-out";

const CheckOutSeatPlan = () => {
  const {
    booking: {
      data: { thongTinPhim, danhSachGhe },
    },
  } = useAppSelector((state) => state);
  const { mins, seconds, isExpired } = useTimer(5);

  return (
    <Styled.SeatPlan>
      <CheckoutSeatPlanHeader />
      <div className="seat-area">
        <Styled.SeatPlanMovieThumb
          bgUrl={thongTinPhim && thongTinPhim.hinhAnh}
        ></Styled.SeatPlanMovieThumb>
        <div className="seat-container">
          <div className="seat-header">
            <div className="theater-info">
              <div className="theater-name">
                {thongTinPhim && thongTinPhim.tenCumRap}
              </div>
              {thongTinPhim && (
                <div className="show-time">
                  {thongTinPhim.ngayChieu} - {thongTinPhim.tenRap} -{" "}
                  {thongTinPhim.gioChieu}
                </div>
              )}
            </div>
            <div className="counter-container">
              <div className="counter-head">Thời gian giữ ghế</div>
              <div className="counter">
                {mins < 10 ? `0${mins}` : mins}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </div>
            </div>
          </div>
          <div className="seats">
            <div className="screen">
              <img
                src={process.env.PUBLIC_URL + "/images/screen.png"}
                alt="screen"
              />
              <p className="screen-text">Màn hình</p>
            </div>
            <Seats seats={danhSachGhe} />
          </div>
        </div>
      </div>
      <TimeOutModal isOpen={isExpired}/>
    </Styled.SeatPlan>
  );
};

export default CheckOutSeatPlan;
