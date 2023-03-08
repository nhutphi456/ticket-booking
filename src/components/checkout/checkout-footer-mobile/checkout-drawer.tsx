import { DrawerProps } from "antd";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { formatAmount } from "../../../util/formatAmount";
import * as Styled from "./styled";

const CheckoutDrawer = ({...props}: DrawerProps) => {
  const [activePaymentOption, setActivePaymentOption] = useState(1);
  const {
    booking: {
      selectedSeats,
      displaySelectedSeats,
      data: { thongTinPhim },
    },
    auth: { user },
  } = useAppSelector((state) => state);
  const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.giaVe, 0);
  return (
    <Styled.CheckoutDrawer {...props}>
      <div className="booking-info">
        <div className="total-price">{formatAmount(totalPrice)} đ</div>
        <div className="movie-info">
          <p className="movie-name">{thongTinPhim && thongTinPhim.tenPhim}</p>
          <p>{thongTinPhim && thongTinPhim.tenCumRap}</p>
          {/* <p>{thongTinPhim && thongTinPhim.ngayChieu}</p> */}
          <p>
            {thongTinPhim && thongTinPhim.ngayChieu} -{" "}
            {thongTinPhim && thongTinPhim.gioChieu} -{" "}
            {thongTinPhim && thongTinPhim.tenRap}
          </p>
        </div>
        <div className="seat-info">
          <div className="seat-names">
            <span>Ghế </span>
            {displaySelectedSeats.map((seatName, index: number) => (
              <span className="seat-name" key={index}>
                {seatName}
              </span>
            ))}
          </div>
          <div className="seat-price">{formatAmount(totalPrice)} đ</div>
        </div>
        <div className="email">
          <p>Email</p>
          <p>{user && user.email}</p>
        </div>
        <div className="phone">
          <p>Phone</p>
          <p>{user && user.soDT}</p>
        </div>
        <div className="payment">
          <p>Hình thức thanh toán</p>
          <ul className="payment-options">
            <li
              className={`option ${activePaymentOption === 1 && "active"}`}
              onClick={() => setActivePaymentOption(1)}
            >
              <a href="#0">
                <img
                  src={process.env.PUBLIC_URL + "/images/card.png"}
                  alt="card"
                />
                <span>Credit Card</span>
              </a>
            </li>
            <li
              className={`option ${activePaymentOption === 2 && "active"}`}
              onClick={() => setActivePaymentOption(2)}
            >
              <a href="#0">
                <img
                  src={process.env.PUBLIC_URL + "/images/card.png"}
                  alt="card"
                />
                <span>Debit Card</span>
              </a>
            </li>
            <li
              className={`option ${activePaymentOption === 3 && "active"}`}
              onClick={() => setActivePaymentOption(3)}
            >
              <a href="#0">
                <img
                  src={process.env.PUBLIC_URL + "/images/paypal.png"}
                  alt="paypal"
                />
                <span>Paypal</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Styled.CheckoutDrawer>
  );
};

export default CheckoutDrawer;
