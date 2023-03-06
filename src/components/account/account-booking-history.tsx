import { Table } from "antd";
import moment from "moment";
import React from "react";
import useMobile from "../../hooks/useMobile";
import { ISeatInfo } from "../../models/account";
import { useAppSelector } from "../../redux/hooks";
import * as Styled from "./styled";

const getSeatCode = (seatName: string) => {
  const ROW_CHARACTERS = "abcdefghij";
  const NUMBER_OF_SEATS_PER_ROW = 16;
  const rowNumber = Math.ceil(+seatName / NUMBER_OF_SEATS_PER_ROW);

  return (
    ROW_CHARACTERS[rowNumber - 1].toUpperCase() +
    (+seatName - NUMBER_OF_SEATS_PER_ROW * (rowNumber - 1))
  );
};
const BookingHistory = () => {
  const {
    account: { data },
  } = useAppSelector((state) => state);
  const isMobile = useMobile();

  const columns = [
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },
    {
      title: "Thời lượng phim",
      dataIndex: "thoiLuongPhim",
      key: "thoiLuongPhim",
      render: (duration: number) => `${duration} phút`,
    },
    {
      title: "Ngày đặt",
      dataIndex: "ngayDat",
      key: "ngayDat",
      render: (date: string) => moment(date).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Mã vé",
      dataIndex: "maVe",
      key: "maVe",
    },
    {
      title: "Tên rạp",
      dataIndex: "danhSachGhe",
      key: "danhSachGhe",
      render: (danhSachGhe: ISeatInfo[]) => danhSachGhe[0].tenHeThongRap,
    },
    {
      title: "Ghế",
      dataIndex: "danhSachGhe",
      key: "danhSachGhe",
      render: (danhSachGhe: ISeatInfo[]) => {
        return danhSachGhe.map((seat: ISeatInfo, index: number) => {
          return (
            <span className="seat-name" key={index}>
              {getSeatCode(seat.tenGhe)}
            </span>
          );
        });
      },
    },
  ];
  return (
    <Styled.BookingHistory className="card">
      <h5 className="title">Lịch sử đặt vé</h5>
      <div className="table-container">
        <Table
          dataSource={data?.thongTinDatVe}
          columns={columns}
          bordered
          size={isMobile ? "small" : "middle"}
          scroll={{ x: 1200 }}
        />
      </div>
    </Styled.BookingHistory>
  );
};

export default BookingHistory;
