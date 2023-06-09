import { Link } from "react-router-dom";
import { getTheaterClass } from "../../../util/getTheaterGlass";
import TicketButton from "../../button/ticket";
import * as Styled from "./styled";

interface Props {
  showTimeByDate: any;
}

const ShowTimeDetailItem = ({ showTimeByDate }: Props) => {
  const renderShowItem = () => {
    let availableComplexes: any[] = [];
    showTimeByDate.forEach((st: any) => {
      const complexIndex = availableComplexes.findIndex(
        (c) => c.maCumRap === st.thongTinRap.maCumRap
      );
      if (complexIndex < 0) {
        availableComplexes.push(st.thongTinRap);
      }
    });

    // console.log("complexes", availableComplexes);
    return availableComplexes.map((ac: any, index: number) => {
      const [cinemaName, branch] = ac.tenCumRap.split("-");

      return (
        <div className="item" key={index}>
          <div className="cinema-branch-info">
            <div className="cinema-info">
              <p className="cinema-detail">
                <span
                  className={`cinema-name ${getTheaterClass(ac.maHeThongRap)}`}
                >
                  {cinemaName}
                </span>{" "}
                - <span className="cinema-branch">{branch}</span>
              </p>
            </div>
          </div>
          <div className="btn-container">
            {showTimeByDate
              .filter((st: any) => st.thongTinRap.maCumRap === ac.maCumRap)
              .map((showTime: any, index: number) => {
                return (
                  <Link to={`/checkout/${showTime.maLichChieu}`}>
                    <TicketButton key={index} ngayChieuGioChieu={showTime.ngayChieuGioChieu}/>
                  </Link>
                );
              })}
          </div>
        </div>
      );
    });
  };
  return (
    <Styled.ShowTimeDetailItem>{renderShowItem()}</Styled.ShowTimeDetailItem>
  );
};

export default ShowTimeDetailItem;
