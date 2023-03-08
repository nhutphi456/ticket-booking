import { message } from "antd";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { bookingApi } from "../services/booking";

const useBooking = () => {
  const {
    auth: { user },
    booking: { data, selectedSeats },
  } = useAppSelector((state) => state);
  const [bookLoading, setBookLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const onFinishBooking = async () => {
    const params = {
      maLichChieu: data.thongTinPhim.maLichChieu,
      danhSachVe: selectedSeats.map((seat) => {
        return {
          maGhe: seat.maGhe,
          giaVe: seat.giaVe,
        };
      }),
      taiKhoanNguoiDung: user.taiKhoan,
    };
    setBookLoading(true);
    message.loading("Đang đặt vé...");
    try {
      const { status } = await bookingApi.bookTicket(params);
      if (status === 200) {
        setBookLoading(false);
        setIsSuccessful(true);
        message.destroy();
      }
    } catch (error) {}
    // console.log("params", params);
  };

  return { onFinishBooking, bookLoading, isSuccessful };
};

export default useBooking;
