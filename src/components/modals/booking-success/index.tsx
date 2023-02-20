import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { formatAmount } from "../../../util/formatAmount";
import * as Styled from "./styled";

const BookingSuccessModal = ({ isOpen }: { isOpen: boolean }) => {
  const {
    booking: { data, displaySelectedSeats, selectedSeats },
    auth: { user },
  } = useAppSelector((state) => state);
  const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.giaVe, 0);
  const navigate = useNavigate();

  return (
    <Styled.SuccessBookingModal
      centered
      open={isOpen}
      closable={false}
      footer={[
        <div className="modal-footer">
          <Button onClick={() => navigate(0)}>Mua lại vé phim này</Button>
          <Button onClick={() => navigate("/")}>Quay về trang chủ</Button>
        </div>,
      ]}
      title={
        <div className="modal-title">
          <FontAwesomeIcon icon={faCircleCheck} className="success-icon" />
          <p>Đặt vé thành công</p>
        </div>
      }
    >
      <div className="booking-detail">
        <Styled.MovieImage
          bgUrl={data.thongTinPhim && data.thongTinPhim.hinhAnh}
        ></Styled.MovieImage>
        <div className="movie-info">
          <p className="movie-name">
            {data.thongTinPhim && data.thongTinPhim.tenPhim}
          </p>
          <p>{data.thongTinPhim && data.thongTinPhim.tenCumRap}</p>
          <p className="address">
            {data.thongTinPhim && data.thongTinPhim.diaChi}
          </p>
          <table>
            <tbody>
              <tr>
                <td valign="top">Suất chiếu:</td>
                <td valign="top">
                  {data.thongTinPhim &&
                    `${data.thongTinPhim.gioChieu} ${data.thongTinPhim.ngayChieu}`}
                </td>
              </tr>
              <tr>
                <td valign="top">Phòng:</td>
                <td valign="top">{data.thongTinPhim && data.thongTinPhim.tenRap}</td>
              </tr>
              <tr>
                <td valign="top">Ghế:</td>
                <td valign="top">
                  {displaySelectedSeats.map((seat: string, idx: number) => (
                    <span className="seat-number" key={idx}>
                      {seat}
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="account-detail">
        <p className="title">Thông tin đặt vé</p>
        <table>
          <tbody>
            <tr>
              <td>Họ tên:</td>
              <td>{user && user.hoTen}</td>
            </tr>
            <tr>
              <td>Điện thoại:</td>
              <td>{user && user.soDT}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user && user.email}</td>
            </tr>
            <tr>
              <td>Tổng tiền:</td>
              <td>{formatAmount(totalPrice)} đ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="noti">
        Kiểm tra lại vé đã mua trong thông tin tài khoản của bạn !
      </p>
    </Styled.SuccessBookingModal>
  );
};

export default BookingSuccessModal;
